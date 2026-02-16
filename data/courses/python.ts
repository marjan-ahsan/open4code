import { Course } from '../../types';
import { SiPython } from 'react-icons/si';

export const pythonCourse: Course = {
  id: 'python',
  title: 'Python for Everyone',
  description: 'A versatile language for web development, data science, and automation.',
  Icon: SiPython,
  color: '#F39E60',
  category: 'General',
  difficulty: 'Beginner',
  popularity: 85,
  releaseDate: '2024-01-20',
  modules: [
    { title: 'Python Basics', lessons: [{ id: 'python-1', title: 'Syntax and Variables', duration: '15min', content: 'Python was designed for readability, and has some similarities to the English language.' }, { id: 'python-2', title: 'Data Structures', duration: '25min', content: 'Python has several built-in data structures, such as lists, dictionaries, sets, and tuples.' }] },
    { title: 'Control Flow', lessons: [{ id: 'python-3', title: 'Conditionals & Loops', duration: '20min', content: 'Python relies on indentation (whitespace at the beginning of a line) to define scope in the code for loops, functions, and classes.' }, { id: 'python-4', title: 'Functions', duration: '20min', content: 'A function is a block of code which only runs when it is called.' }] }
  ]
};