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
  tags: ['Node.js', 'Express', 'Backend', 'API', 'Database'],
  modules: [
    {
      title: 'Node.js Intro',
      lessons: [
        {
          id: 'node-1',
          title: 'The Event Loop',
          duration: '15min',
          content: 'The event loop is what allows Node.js to perform non-blocking I/O operations despite the fact that JavaScript is single-threaded. It offloads operations to the system kernel whenever possible.'
        },
        {
          id: 'node-2',
          title: 'Modules',
          duration: '20min',
          content: 'Node.js has a simple module loading system. You can use `require` to include modules in your app. CommonJS is the standard, but ES Modules (`import`/`export`) are becoming more common.'
        }
      ]
    },
    {
      title: 'Express.js',
      lessons: [
        {
          id: 'node-3',
          title: 'Routing',
          duration: '25min',
          content: 'Routing refers to how an application’s endpoints (URIs) respond to client requests. You define routing using methods of the Express `app` object that correspond to HTTP methods: `app.get()`, `app.post()`, etc.'
        },
        {
          id: 'node-4',
          title: 'Middleware',
          duration: '30min',
          content: 'Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. They can modify the request/response objects, end the cycle, or call the next middleware.'
        },
        {
          id: 'node-rest',
          title: 'Building RESTful APIs',
          duration: '40min',
          content: "REST (Representational State Transfer) is an architectural style for designing networked applications. A RESTful API uses HTTP methods explicitly: GET to retrieve resources, POST to create them, PUT/PATCH to update them, and DELETE to remove them. Good API design also involves using proper HTTP status codes (200 OK, 201 Created, 400 Bad Request, 404 Not Found, 500 Server Error).",
          aids: {
            mistakes: ["Returning 200 OK for every response, even errors. This breaks the contract of the web and confuses API clients."]
          }
        }
      ]
    }
  ]
};