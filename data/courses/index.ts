
import { Course } from '../../types';
import { cssCourse } from './css';
import { genAiCourse } from './gen-ai';
import { htmlCourse } from './html';
import { jsCourse } from './js';
import { nodeCourse } from './node';
import { pythonCourse } from './python';
import { reactCourse } from './react';
import { safetyCourse } from './safety';
import { gitCourse } from './git';
import { cCourse } from './c';
import { rustCourse } from './rust';
import { typescriptCourse } from './typescript';

export const COURSES: Course[] = [
  genAiCourse,
  rustCourse,
  typescriptCourse,
  safetyCourse,
  htmlCourse,
  cssCourse,
  jsCourse,
  gitCourse,
  cCourse,
  reactCourse,
  nodeCourse,
  pythonCourse,
];
