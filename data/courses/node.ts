import { Course } from '../../types';
import { SiNodedotjs } from 'react-icons/si';

export const nodeCourse: Course = {
  id: 'node',
  title: 'Node.js Backend',
  description: 'Create scalable server-side applications with JavaScript and Node.js.',
  Icon: SiNodedotjs,
  color: '#9F5255',
  category: 'Backend',
  difficulty: 'Advanced',
  popularity: 80,
  releaseDate: '2024-04-05',
  modules: [
    { title: 'Node.js Intro', lessons: [{ id: 'node-1', title: 'The Event Loop', duration: '15min', content: 'The event loop is what allows Node.js to perform non-blocking I/O operations.' }, { id: 'node-2', title: 'Modules', duration: '20min', content: 'Node.js has a simple module loading system. You can use `require` to include modules in your app.' }] },
    { title: 'Express.js', lessons: [{ id: 'node-3', title: 'Routing', duration: '25min', content: 'Routing refers to how an application’s endpoints (URIs) respond to client requests.' }, { id: 'node-4', title: 'Middleware', duration: '30min', content: 'Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function.' }] }
  ]
};