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
  tags: ['Python', 'Data Science', 'Automation', 'Scripting', 'Backend'],
  modules: [
    {
      title: 'Python Basics',
      lessons: [
        {
          id: 'python-1',
          title: 'Syntax and Variables',
          duration: '15min',
          content: 'Python was designed for readability, and has some similarities to the English language. It uses new lines to complete a command, as opposed to other programming languages which often use semicolons or parentheses.'
        },
        {
          id: 'python-2',
          title: 'Data Structures',
          duration: '25min',
          content: 'Python has several built-in data structures, such as lists (ordered, mutable), dictionaries (key-value pairs), sets (unordered, unique), and tuples (ordered, immutable). Choosing the right structure is key to efficient code.'
        }
      ]
    },
    {
      title: 'Control Flow',
      lessons: [
        {
          id: 'python-3',
          title: 'Conditionals & Loops',
          duration: '20min',
          content: 'Python relies on indentation (whitespace at the beginning of a line) to define scope in the code. Other programming languages often use curly-brackets for this purpose. This enforces clean, readable code.'
        },
        {
          id: 'python-4',
          title: 'Functions',
          duration: '20min',
          content: 'A function is a block of code which only runs when it is called. You can pass data, known as parameters, into a function. A function can return data as a result. In Python, a function is defined using the `def` keyword.'
        },
        {
          id: 'python-list-comp',
          title: 'Pythonic Code: List Comprehensions',
          duration: '15min',
          content: "List comprehensions provide a concise way to create lists. Common applications are to make new lists where each element is the result of some operations applied to each member of another sequence or iterable, or to create a subsequence of those elements that satisfy a certain condition.",
          codeExample: {
            html: '',
            css: '',
            js: `# Traditional way
squares = []
for x in range(10):
    squares.append(x**2)

# Pythonic way (List Comprehension)
squares = [x**2 for x in range(10)]`
          }
        }
      ]
    }
  ]
};