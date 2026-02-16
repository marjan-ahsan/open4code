
import React, { useEffect, useRef, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Course } from '../types';
import { COURSES } from '../constants';
import { FaArrowRight, FaSearch, FaTh, FaProjectDiagram, FaCheckCircle, FaFilter, FaChevronDown } from 'react-icons/fa';
import ConstellationView from './ConstellationView';
import HeroSection from './HeroSection';

interface CourseExplorerProps {
  onSelectCourse: (course: Course) => void;
  progress: Record<string, boolean>;
}

const isCourseCompleted = (course: Course, progress: Record<string, boolean>): boolean => {
  const allLessons = course.modules.flatMap(m => m.lessons);
  if (allLessons.length === 0) return false;
  return allLessons.every(l => progress[l.id]);
};

const calculateTotalDuration = (course: Course): number => {
  return course.modules.reduce((totalMinutes, module) => {
    const moduleMinutes = module.lessons.reduce((subTotal, lesson) => {
      const durationMatch = lesson.duration.match(/(\d+)/);
      return subTotal + (durationMatch ? parseInt(durationMatch[0], 10) : 0);
    }, 0);
    return totalMinutes + moduleMinutes;
  }, 0);
};

const CourseCard: React.FC<{ course: Course; onSelectCourse: (course: Course) => void; delay: number; progress: Record<string, boolean> }> = ({ course, onSelectCourse, delay, progress }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    let timeoutId: number;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timeoutId = setTimeout(() => {
            element.classList.remove('opacity-0', 'translate-y-3');
          }, delay);
          observer.unobserve(element);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
      clearTimeout(timeoutId);
    };
  }, [delay]);

  const totalLessons = useMemo(() => course.modules.flatMap(m => m.lessons).length, [course]);
  const completedLessons = useMemo(() => course.modules.flatMap(m => m.lessons).filter(l => progress[l.id]).length, [course, progress]);
  const courseProgress = totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0;
  const isCompleted = isCourseCompleted(course, progress);

  return (
    <div ref={ref} className="opacity-0 translate-y-3 transition-all duration-500 ease-out">
      <button
        onClick={() => onSelectCourse(course)}
        className="w-full text-left p-5 rounded-xl border border-border bg-surface hover:border-primary/40 transition-all duration-200 group"
      >
        <div className="flex items-start justify-between mb-4">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${course.color}18` }}>
            <span style={{ color: course.color }} className="text-lg"><course.Icon /></span>
          </div>
          {isCompleted && (
            <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
              <FaCheckCircle /> Done
            </span>
          )}
        </div>

        <h3 className="font-heading text-base font-bold mb-1 text-text-primary group-hover:text-primary transition-colors line-clamp-1">
          {course.title}
        </h3>
        <p className="text-xs text-text-secondary line-clamp-2 mb-4 leading-relaxed">{course.description}</p>

        <div className="flex items-center justify-between text-[11px] text-text-tertiary mb-2">
          <span>{course.modules.length} modules · {totalLessons} lessons</span>
          <span>{Math.round(courseProgress)}%</span>
        </div>
        <div className="w-full bg-muted rounded-full h-1">
          <div className="bg-primary h-1 rounded-full transition-all duration-500" style={{ width: `${courseProgress}%` }}></div>
        </div>

        {course.tags && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {course.tags.map(tag => (
              <span key={tag} className="bg-muted text-text-tertiary text-[10px] font-medium px-2 py-0.5 rounded-md">{tag}</span>
            ))}
          </div>
        )}
      </button>
    </div>
  );
};

const CourseExplorer: React.FC<CourseExplorerProps> = ({ onSelectCourse, progress }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'constellation'>('grid');
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeDifficulty, setActiveDifficulty] = useState('All');
  const [activeTime, setActiveTime] = useState('All');
  const [sortBy, setSortBy] = useState('default');
  const [showFilters, setShowFilters] = useState(false);

  const CATEGORIES = useMemo(() => ['All', ...Array.from(new Set(COURSES.map(c => c.category)))], []);
  const DIFFICULTIES: ('All' | 'Beginner' | 'Intermediate' | 'Advanced')[] = ['All', 'Beginner', 'Intermediate', 'Advanced'];
  const completedCoursesCount = useMemo(() => COURSES.filter(course => isCourseCompleted(course, progress)).length, [progress]);

  const filteredCourses = useMemo(() => {
    let courses = [...COURSES];

    if (activeCategory !== 'All') {
      courses = courses.filter(course => course.category === activeCategory);
    }
    if (activeDifficulty !== 'All') {
      courses = courses.filter(course => course.difficulty === activeDifficulty);
    }
    if (activeTime !== 'All') {
      courses = courses.filter(course => {
        const totalMinutes = calculateTotalDuration(course);
        if (activeTime === '< 2 hours') return totalMinutes < 120;
        if (activeTime === '2-5 hours') return totalMinutes >= 120 && totalMinutes <= 300;
        if (activeTime === '> 5 hours') return totalMinutes > 300;
        return true;
      });
    }
    if (searchTerm) {
      const lowercasedFilter = searchTerm.toLowerCase();
      courses = courses.filter(course =>
        course.title.toLowerCase().includes(lowercasedFilter) ||
        course.description.toLowerCase().includes(lowercasedFilter)
      );
    }
    if (sortBy === 'popular') {
      courses.sort((a, b) => b.popularity - a.popularity);
    } else if (sortBy === 'newest') {
      courses.sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime());
    } else if (sortBy === 'a-z') {
      courses.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === 'z-a') {
      courses.sort((a, b) => b.title.localeCompare(a.title));
    }
    return courses;
  }, [searchTerm, activeCategory, activeDifficulty, activeTime, sortBy]);

  const areFiltersActive = activeCategory !== 'All' || activeDifficulty !== 'All' || activeTime !== 'All';

  return (
    <div className="min-h-screen pt-16 bg-bg">
      <HeroSection
        title="Course Explorer"
        subtitle="Choose your path and master new technology with our interactive curriculum."
      />

      <div className="container mx-auto px-4 sm:px-6 pb-20">
        {/* Progress + Search + Filters */}
        <div className="max-w-4xl mx-auto mb-10 space-y-4">
          {/* Stats */}
          <div className="flex items-center justify-center gap-2 text-sm text-text-secondary">
            <span className="text-emerald-500"><FaCheckCircle /></span>
            <span><strong className="text-text-primary">{completedCoursesCount}</strong> of {COURSES.length} courses completed</span>
          </div>

          {/* Search + Filter Row */}
          <div className="flex gap-2">
            <div className="relative flex-1">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary text-sm"><FaSearch /></span>
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full py-2.5 pl-9 pr-4 text-sm bg-surface border border-border rounded-lg outline-none focus:border-primary transition-colors text-text-primary placeholder-text-tertiary"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`px-3 py-2.5 rounded-lg border text-sm font-medium transition-colors flex items-center gap-2 ${showFilters || areFiltersActive
                  ? 'bg-primary text-white border-primary'
                  : 'bg-surface border-border text-text-secondary hover:border-text-tertiary'
                }`}
            >
              <FaFilter className="text-xs" />
              <span className="hidden sm:inline">Filters</span>
            </button>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="hidden sm:block px-3 py-2.5 text-sm bg-surface border border-border rounded-lg outline-none focus:border-primary text-text-secondary cursor-pointer"
              aria-label="Sort courses"
            >
              <option value="default">Sort</option>
              <option value="popular">Popular</option>
              <option value="newest">Newest</option>
              <option value="a-z">A-Z</option>
            </select>
            <div className="hidden lg:flex bg-muted rounded-lg p-0.5">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-3 py-2 rounded-md text-sm transition-colors ${viewMode === 'grid' ? 'bg-surface text-text-primary shadow-sm' : 'text-text-tertiary'}`}
              >
                <FaTh />
              </button>
              <button
                onClick={() => setViewMode('constellation')}
                className={`px-3 py-2 rounded-md text-sm transition-colors ${viewMode === 'constellation' ? 'bg-surface text-text-primary shadow-sm' : 'text-text-tertiary'}`}
              >
                <FaProjectDiagram />
              </button>
            </div>
          </div>

          {/* Filter Panel */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="p-4 bg-surface border border-border rounded-xl space-y-4">
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-text-tertiary block mb-2">Category</span>
                    <div className="flex flex-wrap gap-1.5">
                      {CATEGORIES.map(category => (
                        <button
                          key={category}
                          onClick={() => setActiveCategory(category)}
                          className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${activeCategory === category
                              ? 'bg-primary text-white'
                              : 'bg-muted text-text-secondary hover:text-text-primary'
                            }`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-text-tertiary block mb-2">Difficulty</span>
                    <div className="flex flex-wrap gap-1.5">
                      {DIFFICULTIES.map(difficulty => (
                        <button
                          key={difficulty}
                          onClick={() => setActiveDifficulty(difficulty)}
                          className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${activeDifficulty === difficulty
                              ? 'bg-primary text-white'
                              : 'bg-muted text-text-secondary hover:text-text-primary'
                            }`}
                        >
                          {difficulty}
                        </button>
                      ))}
                    </div>
                  </div>
                  {areFiltersActive && (
                    <div className="pt-2 border-t border-border">
                      <button
                        onClick={() => { setActiveCategory('All'); setActiveDifficulty('All'); setActiveTime('All'); }}
                        className="text-xs font-medium text-primary hover:underline"
                      >
                        Reset filters
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredCourses.map((course, index) => (
              <CourseCard key={course.id} course={course} onSelectCourse={onSelectCourse} delay={index * 60} progress={progress} />
            ))}
          </div>
        ) : (
          <ConstellationView courses={filteredCourses} progress={progress} onSelectCourse={onSelectCourse} />
        )}

        {filteredCourses.length === 0 && (
          <div className="text-center py-20">
            <p className="text-sm text-text-secondary">No courses match your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseExplorer;
