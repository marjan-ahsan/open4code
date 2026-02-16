import React, { useMemo, useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Course } from '../types';

interface ConstellationViewProps {
  courses: Course[];
  progress: Record<string, boolean>;
  onSelectCourse: (course: Course) => void;
}

// Helper function to check if a course is completed
const isCourseCompleted = (course: Course, progress: Record<string, boolean>): boolean => {
  const allLessons = course.modules.flatMap(m => m.lessons);
  if (allLessons.length === 0) return false;
  return allLessons.every(l => progress[l.id]);
};

interface CourseNodeProps {
    node: any;
    progress: Record<string, boolean>;
    onNodeInteraction: (course: Course) => void;
    isActive: boolean;
    containerHeight: number;
    index: number;
}

const CourseNode: React.FC<CourseNodeProps> = ({ node, progress, onNodeInteraction, isActive, containerHeight, index }) => {
    
    const totalLessons = useMemo(() => node.modules.flatMap((m: any) => m.lessons).length, [node]);
    const completedLessons = useMemo(() => node.modules.flatMap((m: any) => m.lessons).filter((l: any) => progress[l.id]).length, [node, progress]);
    const courseProgress = totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0;
    
    const isTopHalf = node.y < containerHeight / 2;

    const popoverBaseClasses = "absolute w-48 p-3 transition-all duration-300 bg-slate-800 text-white text-sm rounded-md shadow-lg pointer-events-none transform z-20";
    const popoverPositionClasses = isTopHalf ? 'top-full mt-3' : 'bottom-full mb-3';
    const popoverVisibilityClasses = isActive
        ? 'opacity-100 visible translate-y-0'
        : 'opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:-translate-y-1';
    
    const arrowBaseClasses = "absolute left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent";
    const arrowPositionClasses = isTopHalf 
        ? 'bottom-full border-b-8 border-b-slate-800' 
        : 'top-full -mt-2 border-t-8 border-t-slate-800';

    return (
        <motion.div
            className="absolute group z-10"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20, delay: index * 0.1 }}
            style={{ left: node.x, top: node.y }}
        >
            <div
                className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center transition-all duration-300 cursor-pointer"
                onClick={() => onNodeInteraction(node)}
                style={{ transform: 'translate(-50%, -50%)' }}
            >
                {/* Glow effect for completed nodes */}
                {node.isCompleted && (
                    <motion.div
                        className="absolute inset-0 rounded-full"
                        style={{ backgroundColor: node.color, filter: 'blur(16px)' }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 0.75, scale: 1.1 }}
                        transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                    />
                )}
                {/* Main node circle */}
                <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${node.isCompleted ? 'shadow-lg' : 'border-2 border-stone-300 dark:border-slate-600 bg-stone-200 dark:bg-slate-800'}`}
                    style={node.isCompleted ? { backgroundColor: node.color } : {}}>
                    <node.Icon className={`text-3xl sm:text-4xl transition-colors duration-300 ${node.isCompleted ? 'text-white' : 'text-stone-500'}`} />
                </div>
                 {/* Rich Popover on Hover/Tap */}
                <div className={`${popoverBaseClasses} ${popoverPositionClasses} ${popoverVisibilityClasses}`}>
                    <h4 className="font-bold text-base mb-1 whitespace-nowrap overflow-hidden text-ellipsis">{node.title}</h4>
                    <p className="text-xs text-gray-300 mb-2">{node.modules.length} Modules &bull; {totalLessons} Lessons</p>
                    <div className="w-full bg-slate-600 rounded-full h-1.5">
                        <div className="h-1.5 rounded-full" style={{ width: `${courseProgress}%`, backgroundColor: node.color }}></div>
                    </div>
                    <p className="text-xs text-right mt-1">{Math.round(courseProgress)}% Complete</p>
                    <div className={`${arrowBaseClasses} ${arrowPositionClasses}`}></div>
                </div>
            </div>
        </motion.div>
    );
};


const ConstellationView: React.FC<ConstellationViewProps> = ({ courses, progress, onSelectCourse }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [activeNodeId, setActiveNodeId] = useState<string | null>(null);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: Math.max(containerRef.current.offsetHeight, 500), // Ensure min height
        });
      }
    };
    updateDimensions();
    const resizeObserver = new ResizeObserver(updateDimensions);
    if(containerRef.current) {
        resizeObserver.observe(containerRef.current);
    }
    return () => resizeObserver.disconnect();
  }, []);
  
  const handleNodeInteraction = (node: Course) => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (isTouchDevice) {
        if (activeNodeId === node.id) {
            onSelectCourse(node); // Second tap navigates
        } else {
            setActiveNodeId(node.id); // First tap shows popover
        }
    } else {
        onSelectCourse(node); // Click on desktop navigates
    }
  };

  const courseNodes = useMemo(() => {
    const { width, height } = dimensions;
    if (width === 0 || courses.length === 0) return [];

    const centerX = width / 2;
    const centerY = height / 2;
    const radiusX = Math.min(width * 0.45, 600);
    const radiusY = Math.min(height * 0.45, 300);
    
    return courses.map((course, i) => {
      const angle = (i / courses.length) * 2 * Math.PI - Math.PI / 2;
      return {
        id: course.id,
        x: centerX + radiusX * Math.cos(angle),
        y: centerY + radiusY * Math.sin(angle),
        ...course,
        isCompleted: isCourseCompleted(course, progress),
      };
    });
  }, [courses, progress, dimensions]);
  
  return (
    <div 
      ref={containerRef} 
      className="relative w-full min-h-[600px] bg-stone-100/50 dark:bg-black/20 rounded-2xl border border-stone-200 dark:border-slate-800 overflow-hidden"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
            setActiveNodeId(null);
        }
      }}
    >
        {/* Background decorative gradients */}
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-radial-gradient from-purple-500/10 to-transparent blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-radial-gradient from-sky-500/10 to-transparent blur-3xl"></div>

        {courseNodes.length > 0 && (
             <svg className="absolute inset-0 w-full h-full" aria-hidden="true">
                <defs>
                    <linearGradient id="completed-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{ stopColor: '#36A18B', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#F39E60', stopOpacity: 1 }} />
                    </linearGradient>
                </defs>
                {courseNodes.map((node, i) => {
                    const nextNode = courseNodes[(i + 1) % courseNodes.length];
                    const isPathCompleted = node.isCompleted && nextNode.isCompleted;

                    return (
                        <g key={`${node.id}-${nextNode.id}`}>
                            {/* Base faint line */}
                            <line 
                                x1={node.x} y1={node.y} 
                                x2={nextNode.x} y2={nextNode.y} 
                                className="stroke-stone-300/80 dark:stroke-slate-700/80" 
                                strokeWidth="2"
                                strokeDasharray="6,6"
                            />
                            {/* Animated completed line */}
                            {isPathCompleted && (
                                <motion.line
                                    x1={node.x} y1={node.y} 
                                    x2={nextNode.x} y2={nextNode.y} 
                                    stroke="url(#completed-gradient)"
                                    strokeWidth="3"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 1, delay: i * 0.2, ease: "easeInOut" }}
                                />
                            )}
                        </g>
                    )
                })}
            </svg>
        )}
        {courseNodes.map((node, i) => (
            <CourseNode 
              key={node.id} 
              node={node} 
              progress={progress} 
              onNodeInteraction={handleNodeInteraction} 
              isActive={activeNodeId === node.id}
              containerHeight={dimensions.height}
              index={i} 
            />
        ))}
    </div>
  );
};

export default ConstellationView;