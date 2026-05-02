import React, { useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import LandingPage from './components/LandingPage';
import CourseExplorer from './components/CourseExplorer';
import CourseDetail from './components/CourseDetail';
import Navbar from './components/Navbar';
import ScrollProgressBar from './components/ScrollProgressBar';
import HelpSystem from './components/HelpSystem';
import AboutPage from './components/AboutPage';
import ChangelogPage from './components/ChangelogPage';
import { Course } from './types';
import { useLocalStorage } from './hooks/useLocalStorage';
import { COURSES } from './data/courses';

export type View = 'landing' | 'explorer' | 'course' | 'about' | 'changelog';

const pageVariants: Variants = {
  initial: {
    opacity: 0,
    clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
    transition: { duration: 0.5 },
  },
  in: {
    opacity: 1,
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
    transition: { duration: 0.5, ease: 'easeInOut' },
  },
  out: {
    opacity: 0,
    clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
    transition: { duration: 0.5, ease: 'easeInOut' },
  },
};

const App: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [progress, setProgress] = useLocalStorage<Record<string, boolean>>('open4code-progress', {});

  const handleSelectCourse = (course: Course) => {
    navigate(`/courses/${course.id}`);
    window.scrollTo(0, 0);
  };

  const handleToggleLesson = useCallback((lessonId: string) => {
    setProgress(prev => ({
      ...prev,
      [lessonId]: !prev[lessonId],
    }));
  }, [setProgress]);

  const currentView = useMemo(() => {
    const section = location.pathname.split('/')[1];
    if (section === 'courses') return 'course';
    return (section || 'landing') as View;
  }, [location.pathname]);

  return (
    <div className="App">
      <ScrollProgressBar />
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
        >
          <Routes location={location}>
            <Route path="/" element={<LandingPage onStartLearning={() => navigate('/explorer')} />} />
            <Route path="/explorer" element={<CourseExplorer onSelectCourse={handleSelectCourse} progress={progress} />} />
            <Route path="/courses" element={<Navigate to="/explorer" replace />} />
            <Route
              path="/courses/:courseId"
              element={
                <CourseDetail
                  progress={progress}
                  onToggleLesson={handleToggleLesson}
                  onBack={() => navigate('/explorer')}
                />
              }
            />
            <Route
              path="/courses/:courseId/lessons/:lessonId"
              element={
                <CourseDetail
                  progress={progress}
                  onToggleLesson={handleToggleLesson}
                  onBack={() => navigate('/explorer')}
                />
              }
            />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/changelog" element={<ChangelogPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
      <HelpSystem currentView={currentView} />
      <Analytics />
    </div>
  );
};

export default App;