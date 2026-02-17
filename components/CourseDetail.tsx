
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { Course, Lesson, Module, Quiz as QuizType } from '../types';
import { FaChevronDown, FaCheckCircle, FaRegCircle, FaArrowLeft, FaLightbulb, FaStickyNote, FaExclamationTriangle, FaBrain, FaCode, FaBookReader, FaTwitter, FaLinkedin, FaChevronLeft, FaChevronRight, FaBars, FaHtml5, FaCss3Alt, FaJs, FaArrowRight, FaLock } from 'react-icons/fa';
import CodeEditorModal from './CodeEditorModal';
import BoxModelDemo from './demos/BoxModelDemo';
import FlexboxDemo from './demos/FlexboxDemo';
import GridDemo from './demos/GridDemo';
import LearningAid from './LearningAid';
import QuizComponent from './Quiz';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import ConfirmationModal from './ConfirmationModal';
import Celebration from './Celebration';
import { COURSES } from '../data/courses';

interface CourseDetailProps {
  progress: Record<string, boolean>;
  onToggleLesson: (lessonId: string) => void;
  onBack: () => void;
}

const escapeHTML = (str: string) => {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

const simpleSyntaxHighlight = (code: string, lang: 'html' | 'css' | 'js') => {
  if (!code) return '';
  let highlightedCode = escapeHTML(code);
  highlightedCode = highlightedCode.replace(/(\/\*[\s\S]*?\*\/)|(\/\/.*)|(&lt;!--[\s\S]*?--&gt;)/g, '<span class="text-green-500">$1</span>');
  if (lang === 'html') {
    highlightedCode = highlightedCode.replace(/(&lt;\/?[\w\d-]+)/g, '<span class="text-pink-400">$1</span>');
    highlightedCode = highlightedCode.replace(/([\w\d-]+)=/g, '<span class="text-amber-400">$1</span>=');
    highlightedCode = highlightedCode.replace(/(".*?")/g, '<span class="text-emerald-400">$1</span>');
  } else if (lang === 'css') {
    highlightedCode = highlightedCode.replace(/([^{}\s]+)\s*{/g, '<span class="text-amber-400">$1</span> {');
    highlightedCode = highlightedCode.replace(/([\w-]+)\s*:/g, '<span class="text-sky-400">$1</span>:');
    highlightedCode = highlightedCode.replace(/:(\s*[^;!]+)(!important)?/g, (match, p1, p2) => `: <span class="text-emerald-400">${p1}</span>${p2 ? `<span class="text-red-400">${p2}</span>` : ''}`);
  } else if (lang === 'js') {
    const keywords = ['const', 'let', 'var', 'function', 'return', 'if', 'else', 'for', 'while', 'async', 'await', 'import', 'export', 'from', 'try', 'catch', 'new', 'throw'];
    const keywordRegex = new RegExp(`\\b(${keywords.join('|')})\\b`, 'g');
    highlightedCode = highlightedCode.replace(keywordRegex, '<span class="text-purple-400">$1</span>');
    highlightedCode = highlightedCode.replace(/('.*?')|(".*?")|(`[\s\S]*?`)/g, '<span class="text-emerald-400">$1</span>');
    highlightedCode = highlightedCode.replace(/\b(\d+)\b/g, '<span class="text-amber-400">$1</span>');
    highlightedCode = highlightedCode.replace(/(console)\./g, '<span class="text-sky-400">$1</span>.');
  }
  return highlightedCode;
};

const LessonNode: React.FC<{
  lesson: Lesson,
  isActive: boolean,
  isCompleted: boolean,
  isLocked: boolean,
  onClick: () => void,
  delay: number
}> = ({ lesson, isActive, isCompleted, isLocked, onClick, delay }) => {
  const ref = useScrollAnimation<HTMLButtonElement>(delay);

  return (
    <button
      ref={ref}
      disabled={isLocked}
      className={`
        opacity-0 translate-y-5 transition-all duration-300 ease-out
        relative group p-4 w-full max-w-xs sm:w-44 h-[72px] flex flex-col justify-center items-center text-center rounded-xl border
        ${isActive ? 'border-primary bg-primary-muted' : 'border-border'}
        ${isCompleted ? 'bg-emerald-50 dark:bg-emerald-900/10 border-emerald-200 dark:border-emerald-800/30' : 'bg-surface'}
        ${isLocked ? 'opacity-40 cursor-not-allowed' : 'hover:border-primary/40 cursor-pointer'}
      `}
      onClick={onClick}
    >
      <div className="absolute bottom-full mb-2 w-max max-w-xs px-3 py-1.5 bg-zinc-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-20">
        {isLocked ? 'Complete previous lesson to unlock' : lesson.title}
        <span className="text-zinc-400 ml-2">({lesson.duration})</span>
      </div>
      <div className="relative z-10 flex flex-col items-center gap-1.5">
        {isLocked ? (
          <span className="text-text-tertiary text-base"><FaLock /></span>
        ) : (
          isCompleted ? <span className="text-emerald-500 text-base"><FaCheckCircle /></span> : <span className="text-text-tertiary text-base"><FaRegCircle /></span>
        )}
        <h3 className="font-medium text-xs line-clamp-1 text-text-primary">{lesson.title}</h3>
      </div>
    </button>
  );
}

const CourseDetail: React.FC<CourseDetailProps> = ({ progress, onToggleLesson, onBack }) => {
  const { courseId, lessonId } = useParams<{ courseId: string; lessonId: string }>();
  const navigate = useNavigate();

  const course = useMemo(() => COURSES.find(c => c.id === courseId), [courseId]);

  const allLessons = useMemo(() => course?.modules.flatMap(m => m.lessons) || [], [course]);
  const activeLesson = useMemo(() => allLessons.find(l => l.id === lessonId) || null, [allLessons, lessonId]);
  const currentLessonIndex = useMemo(() => activeLesson ? allLessons.findIndex(l => l.id === activeLesson.id) : -1, [activeLesson, allLessons]);

  const [openModules, setOpenModules] = useState<Record<string, boolean>>({});
  const [isCodeModalOpen, setIsCodeModalOpen] = useState(false);
  const [activeQuiz, setActiveQuiz] = useState<QuizType | null>(null);
  const [quizPassed, setQuizPassed] = useState<Record<string, boolean>>({});
  const [scrollY, setScrollY] = useState(0);
  const mainContentRef = useRef<HTMLElement>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [activeCodeTab, setActiveCodeTab] = useState<'html' | 'css' | 'js'>('html');
  const [showCelebration, setShowCelebration] = useState(false);

  useEffect(() => {
    if (course) {
      const initialState: Record<string, boolean> = {};
      course.modules.forEach(module => {
        initialState[module.title] = true;
      });
      setOpenModules(initialState);
    }
  }, [course]);

  useEffect(() => {
    const mainEl = mainContentRef.current;
    if (!mainEl) return;
    const handleScroll = () => setScrollY(mainEl.scrollTop);
    mainEl.addEventListener('scroll', handleScroll);
    return () => mainEl.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleModule = (title: string) => {
    setOpenModules(prev => ({ ...prev, [title]: !prev[title] }));
  };

  const courseProgress = useMemo(() => {
    const totalLessons = allLessons.length;
    if (totalLessons === 0) return 0;
    const completedLessons = allLessons.filter(l => progress[l.id]).length;
    return (completedLessons / totalLessons) * 100;
  }, [allLessons, progress]);

  const completedModules = useMemo(() => {
    const status: Record<string, boolean> = {};
    course?.modules.forEach(module => {
      if (!module.lessons || module.lessons.length === 0) {
        status[module.title] = false;
      } else {
        status[module.title] = module.lessons.every(lesson => progress[lesson.id]);
      }
    });
    return status;
  }, [course, progress]);

  const getLessonStatus = (id: string, index: number) => {
    const isCompleted = progress[id] || false;
    let isLocked = false;
    if (index > 0) {
      const prevLesson = allLessons[index - 1];
      isLocked = !progress[prevLesson.id];
    }
    return { isCompleted, isLocked };
  };

  const renderVisualDemo = (lesson: Lesson) => {
    switch (lesson.visualDemo) {
      case 'box-model': return <BoxModelDemo />;
      case 'flexbox': return <FlexboxDemo />;
      case 'grid': return <GridDemo />;
      default: return null;
    }
  };

  const scrollToTop = () => {
    if (mainContentRef.current) mainContentRef.current.scrollTop = 0;
  };

  const handleSelectLesson = (lesson: Lesson) => {
    const status = getLessonStatus(lesson.id, allLessons.findIndex(l => l.id === lesson.id));
    if (status.isLocked) return;

    navigate(`/courses/${courseId}/lessons/${lesson.id}`);
    setActiveQuiz(null);
    if (lesson.codeExample) {
      if (lesson.codeExample.html) setActiveCodeTab('html');
      else if (lesson.codeExample.css) setActiveCodeTab('css');
      else if (lesson.codeExample.js) setActiveCodeTab('js');
    }
    scrollToTop();
    if (window.innerWidth < 640) setIsSidebarOpen(false);
  }

  const handleNextLesson = () => {
    if (currentLessonIndex < allLessons.length - 1) {
      handleSelectLesson(allLessons[currentLessonIndex + 1]);
    } else {
      if (courseProgress === 100) setShowCelebration(true);
    }
  };

  const handlePrevLesson = () => {
    if (currentLessonIndex > 0) {
      handleSelectLesson(allLessons[currentLessonIndex - 1]);
    }
  };

  const handleQuizComplete = (passed: boolean) => {
    if (passed) {
      setShowCelebration(true);
      if (activeLesson) {
        setQuizPassed(prev => ({ ...prev, [activeLesson.id]: true }));
        onToggleLesson(activeLesson.id);
      }
    }
    setActiveQuiz(null);
  }

  const handleToggleCompletion = () => {
    if (!activeLesson) return;
    if (activeLesson.quiz && !quizPassed[activeLesson.id] && !progress[activeLesson.id]) {
      setActiveQuiz(activeLesson.quiz);
      return;
    }

    if (progress[activeLesson.id]) {
      setIsConfirmModalOpen(true);
    } else {
      onToggleLesson(activeLesson.id);
      const completedCount = allLessons.filter(l => progress[l.id]).length;
      if (completedCount + 1 === allLessons.length) {
        setShowCelebration(true);
      }
    }
  };

  const handleStartPracticeQuiz = () => {
    if (activeLesson?.quiz) setActiveQuiz(activeLesson.quiz);
  };

  const handleShare = (platform: 'twitter' | 'linkedin') => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(`I'm learning all about ${course?.title} on Open4Code! #Open4Code #LearnToCode`);
    const shareUrl = platform === 'twitter'
      ? `https://twitter.com/intent/tweet?url=${url}&text=${text}`
      : `https://www.linkedin.com/shareArticle?mini=true&url=${url}`;
    window.open(shareUrl, '_blank', 'noopener,noreferrer');
  };

  const TabButton: React.FC<{ lang: 'html' | 'css' | 'js'; activeLang: string; onClick: () => void; }> = ({ lang, activeLang, onClick }) => {
    const icons = {
      html: <span className="text-rose-400"><FaHtml5 /></span>,
      css: <span className="text-sky-400"><FaCss3Alt /></span>,
      js: <span className="text-amber-400"><FaJs /></span>,
    };
    return (
      <button
        onClick={onClick}
        className={`flex items-center gap-1.5 px-3 py-2 text-xs font-medium transition-colors border-b-2 ${activeLang === lang
          ? 'border-primary text-zinc-200'
          : 'border-transparent text-zinc-500 hover:text-zinc-300'
          }`}
      >
        {icons[lang]} {lang.toUpperCase()}
      </button>
    )
  };

  if (!course) return <div className="p-8 text-center text-red-500">Course not found.</div>;

  return (
    <>
      <div className="flex h-screen bg-bg text-text-primary">
        <AnimatePresence>
          {isSidebarOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
              className="fixed inset-0 bg-black/40 z-30 sm:hidden"
            />
          )}
        </AnimatePresence>

        <aside className={`
          h-full bg-surface border-r border-border overflow-y-auto fixed sm:static z-40 w-5/6 max-w-xs transition-transform sm:transition-all duration-300
          ${isSidebarOpen ? 'translate-x-0 sm:w-1/3 sm:max-w-sm p-5' : '-translate-x-full sm:w-0 sm:p-0'}
          sm:transform-none
        `}>
          <button onClick={onBack} className="flex items-center text-sm font-medium mb-6 text-text-secondary hover:text-text-primary transition-colors">
            <span className="mr-2"><FaArrowLeft /></span> Back
          </button>

          <div className="mt-4">
            <div className="flex justify-between items-center mb-1.5 text-xs text-text-secondary">
              <span>Progress</span>
              <span>{Math.round(courseProgress)}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-1.5">
              <motion.div
                className="bg-primary h-1.5 rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: `${courseProgress}%` }}
              />
            </div>
          </div>

          <div className="mt-6 space-y-1">
            {course.modules.map(module => (
              <div key={module.title}>
                <button onClick={() => toggleModule(module.title)} className="w-full flex justify-between items-center p-2.5 rounded-lg hover:bg-muted transition-colors">
                  <span className="font-medium text-sm flex items-center gap-2 text-text-primary">
                    {completedModules[module.title] && <span className="text-emerald-500 text-xs"><FaCheckCircle /></span>}
                    {module.title}
                  </span>
                  <span className={`text-text-tertiary text-xs transition-transform ${openModules[module.title] ? 'rotate-180' : ''}`}><FaChevronDown /></span>
                </button>
                <AnimatePresence>
                  {openModules[module.title] && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <div className="py-1 space-y-0.5 ml-2">
                        {module.lessons.map(lesson => {
                          const lessonIdx = allLessons.findIndex(l => l.id === lesson.id);
                          const { isCompleted, isLocked } = getLessonStatus(lesson.id, lessonIdx);
                          return (
                            <button
                              key={lesson.id}
                              disabled={isLocked}
                              onClick={() => handleSelectLesson(lesson)}
                              className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center gap-2.5 text-sm ${activeLesson?.id === lesson.id
                                ? 'bg-primary-muted text-primary font-medium'
                                : isLocked ? 'opacity-35 cursor-not-allowed' : 'hover:bg-muted text-text-secondary hover:text-text-primary'
                                }`}
                            >
                              {isLocked ? <span className="text-text-tertiary flex-shrink-0 text-xs"><FaLock /></span> : (isCompleted ? <span className="text-emerald-500 flex-shrink-0 text-xs"><FaCheckCircle /></span> : <span className="text-text-tertiary flex-shrink-0 text-xs"><FaRegCircle /></span>)}
                              <span className="truncate">{lesson.title}</span>
                            </button>
                          )
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </aside>

        <main ref={mainContentRef} className="flex-1 overflow-y-auto relative flex flex-col">
          <header className={`sticky top-0 z-20 flex items-center justify-between px-4 py-3 transition-all duration-200 ${scrollY > 10 ? 'bg-bg/90 backdrop-blur-xl border-b border-border' : ''}`}>
            <div className="flex items-center gap-2">
              <button
                onClick={onBack}
                className="p-2 rounded-lg hover:bg-muted transition-colors text-text-secondary border border-border/50 hidden sm:flex items-center gap-2 text-xs font-medium mr-2"
                title="Back to Explorer"
              >
                <FaArrowLeft /> Explorer
              </button>
              <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-1.5 rounded-lg hover:bg-muted transition-colors text-text-secondary">
                <span className="sm:hidden"><FaBars /></span>
                <span className="hidden sm:inline text-sm">{isSidebarOpen ? <FaChevronLeft /> : <FaChevronRight />}</span>
              </button>
              <h1 className="font-heading text-base sm:text-lg font-bold truncate max-w-[180px] sm:max-w-none text-text-primary ml-2">{course.title}</h1>
            </div>
            <div className="flex items-center gap-1">
              <button onClick={() => handleShare('twitter')} className="p-2 rounded-lg text-text-tertiary hover:text-sky-500 hover:bg-muted transition-colors text-sm"><FaTwitter /></button>
              <button onClick={() => handleShare('linkedin')} className="p-2 rounded-lg text-text-tertiary hover:text-blue-600 hover:bg-muted transition-colors text-sm"><FaLinkedin /></button>
            </div>
          </header>

          <div className="px-4 sm:px-8 py-4 flex-grow">
            <AnimatePresence mode="wait">
              {activeLesson ? (
                <motion.div key={activeLesson.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }}>
                  <button onClick={() => navigate(`/courses/${courseId}`)} className="flex items-center text-xs font-medium mb-6 text-text-tertiary hover:text-text-primary transition-colors">
                    <span className="mr-1.5"><FaArrowLeft /></span> Skill Tree
                  </button>

                  {activeQuiz ? (
                    <QuizComponent quiz={activeQuiz} onComplete={handleQuizComplete} />
                  ) : (
                    <div className="max-w-3xl mx-auto pb-28">
                      {/* Lesson Content */}
                      <div className="mb-8">
                        <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-2 text-text-primary">{activeLesson.title}</h2>
                        <div className="flex items-center gap-3 mb-6">
                          <span className="text-text-tertiary text-sm">{activeLesson.duration}</span>
                          {activeLesson.quiz && <span className="bg-primary-muted text-primary px-2 py-0.5 rounded-md text-[11px] font-medium">Quiz</span>}
                        </div>
                        <div className="prose prose-zinc dark:prose-invert prose-sm max-w-none text-text-secondary leading-relaxed">
                          {activeLesson.content}
                        </div>
                      </div>

                      {/* Code Example */}
                      {activeLesson.codeExample && (
                        <div className="mb-8">
                          <h3 className="font-heading text-base font-bold mb-3 flex items-center gap-2 text-text-primary">
                            <span className="text-text-tertiary"><FaCode /></span> Code
                          </h3>
                          <div className="bg-zinc-950 rounded-xl overflow-hidden border border-zinc-800">
                            <div className="flex items-center bg-zinc-900 border-b border-zinc-800">
                              {activeLesson.codeExample.html && <TabButton lang="html" activeLang={activeCodeTab} onClick={() => setActiveCodeTab('html')} />}
                              {activeLesson.codeExample.css && <TabButton lang="css" activeLang={activeCodeTab} onClick={() => setActiveCodeTab('css')} />}
                              {activeLesson.codeExample.js && <TabButton lang="js" activeLang={activeCodeTab} onClick={() => setActiveCodeTab('js')} />}
                              <div className="flex-grow"></div>
                              <button onClick={() => setIsCodeModalOpen(true)} className="m-1.5 px-3 py-1 text-zinc-400 hover:text-white text-[11px] font-medium rounded-md hover:bg-zinc-800 transition-colors">Try It</button>
                            </div>
                            <div className="p-5 overflow-x-auto">
                              <pre className="font-mono text-sm text-zinc-300 leading-relaxed">
                                <code dangerouslySetInnerHTML={{ __html: simpleSyntaxHighlight(activeLesson.codeExample[activeCodeTab] || '', activeCodeTab) }} />
                              </pre>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Visual Demo */}
                      {activeLesson.visualDemo && (
                        <div className="mb-8">
                          <h3 className="font-heading text-base font-bold mb-3 flex items-center gap-2 text-text-primary">
                            <span className="text-text-tertiary"><FaBookReader /></span> Playground
                          </h3>
                          <div className="bg-zinc-950 rounded-xl p-6 border border-zinc-800">
                            {renderVisualDemo(activeLesson)}
                          </div>
                        </div>
                      )}

                      {/* Learning Aids */}
                      {activeLesson.aids && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                          {activeLesson.aids.notes && <LearningAid Icon={FaStickyNote} title="Notes" items={activeLesson.aids.notes} className="bg-sky-50 dark:bg-sky-900/10 border-sky-200 dark:border-sky-800/30" iconClassName="text-sky-500" />}
                          {activeLesson.aids.tips && <LearningAid Icon={FaLightbulb} title="Tips" items={activeLesson.aids.tips} className="bg-amber-50 dark:bg-amber-900/10 border-amber-200 dark:border-amber-800/30" iconClassName="text-amber-500" />}
                        </div>
                      )}

                      {/* Actions */}
                      <div className="flex flex-col sm:flex-row gap-3 items-center justify-center pt-6 border-t border-border">
                        <button
                          onClick={handleToggleCompletion}
                          className={`w-full sm:w-auto px-6 py-2.5 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-2 ${progress[activeLesson.id]
                            ? 'bg-emerald-50 dark:bg-emerald-900/15 border border-emerald-200 dark:border-emerald-800/30 text-emerald-600 dark:text-emerald-400'
                            : activeLesson.quiz && !quizPassed[activeLesson.id]
                              ? 'bg-amber-50 dark:bg-amber-900/15 border border-amber-200 dark:border-amber-800/30 text-amber-600 dark:text-amber-400 hover:bg-amber-100 dark:hover:bg-amber-900/25'
                              : 'bg-muted border border-border text-text-primary hover:border-primary/40'
                            }`}
                        >
                          {progress[activeLesson.id]
                            ? <><FaCheckCircle /> Completed</>
                            : activeLesson.quiz && !quizPassed[activeLesson.id]
                              ? <><FaBrain /> Take Quiz to Complete</>
                              : <><FaRegCircle /> Mark as Done</>
                          }
                        </button>
                        {activeLesson.quiz && (
                          <button onClick={handleStartPracticeQuiz} className="w-full sm:w-auto px-6 py-2.5 bg-primary hover:bg-primary-hover text-white font-medium text-sm rounded-lg transition-colors">
                            {quizPassed[activeLesson.id] ? 'Retake Quiz' : 'Start Quiz'}
                          </button>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Bottom Nav */}
                  {!activeQuiz && (
                    <div className="fixed bottom-0 left-0 right-0 sm:left-auto sm:right-6 sm:bottom-6 z-30 p-3 sm:p-0">
                      <div className="bg-surface/90 backdrop-blur-xl border border-border p-1.5 rounded-xl flex items-center gap-1.5 max-w-sm mx-auto sm:mx-0">
                        <button
                          onClick={handlePrevLesson}
                          disabled={currentLessonIndex === 0}
                          className="flex-1 px-3 py-2.5 rounded-lg flex items-center justify-center gap-1.5 font-medium text-sm disabled:opacity-25 text-text-secondary hover:bg-muted transition-colors"
                        >
                          <FaChevronLeft className="text-xs" /> Prev
                        </button>
                        <div className="w-px h-6 bg-border"></div>
                        <button
                          onClick={handleNextLesson}
                          disabled={!progress[activeLesson.id]}
                          className="flex-[2] px-4 py-2.5 bg-primary hover:bg-primary-hover text-white rounded-lg flex items-center justify-center gap-1.5 font-medium text-sm transition-colors disabled:opacity-30"
                        >
                          {currentLessonIndex === allLessons.length - 1 ? 'Finish' : 'Next'} <FaArrowRight className="text-xs" />
                        </button>
                      </div>
                    </div>
                  )}
                </motion.div>
              ) : (
                <motion.div key="path-view" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <div className="max-w-3xl mx-auto px-4">
                    <h2 className="font-heading text-3xl font-bold mb-3 text-center text-text-primary">Skill Tree</h2>
                    <p className="text-sm text-text-secondary text-center mb-10">Track your progress and pick your next challenge.</p>
                    <div className="space-y-12 pb-12">
                      {course.modules.map((module, mIdx) => (
                        <div key={module.title}>
                          <h3 className="font-heading text-base font-bold mb-6 flex items-center justify-center gap-2 text-text-primary">
                            {completedModules[module.title] && <span className="text-emerald-500 text-sm"><FaCheckCircle /></span>}
                            {module.title}
                          </h3>
                          <div className="flex flex-wrap justify-center gap-3">
                            {module.lessons.map((lesson, lIdx) => {
                              const lessonIdx = allLessons.findIndex(l => l.id === lesson.id);
                              const { isCompleted, isLocked } = getLessonStatus(lesson.id, lessonIdx);
                              return (
                                <LessonNode
                                  key={lesson.id}
                                  lesson={lesson}
                                  isActive={false}
                                  isCompleted={isCompleted}
                                  isLocked={isLocked}
                                  onClick={() => handleSelectLesson(lesson)}
                                  delay={(mIdx * 80) + (lIdx * 40)}
                                />
                              )
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </main>
      </div>

      <AnimatePresence>
        {showCelebration && (
          <Celebration
            title={courseProgress === 100 ? "Course Complete!" : "Milestone Reached!"}
            message={courseProgress === 100 ? `Congratulations! You've finished ${course.title}.` : "You've successfully completed this task. Keep it up!"}
            onClose={() => setShowCelebration(false)}
          />
        )}
      </AnimatePresence>

      {isCodeModalOpen && activeLesson?.codeExample && (
        <CodeEditorModal initialCode={activeLesson.codeExample} onClose={() => setIsCodeModalOpen(false)} />
      )}

      <ConfirmationModal
        isOpen={isConfirmModalOpen}
        onClose={() => setIsConfirmModalOpen(false)}
        onConfirm={() => {
          if (activeLesson) onToggleLesson(activeLesson.id);
          setIsConfirmModalOpen(false);
        }}
        title="Reset Progress?"
        message="Mark this lesson as incomplete?"
      />
    </>
  );
};

export default CourseDetail;
