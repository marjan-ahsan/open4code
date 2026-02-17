import { Course } from '../../types';
import { SiReact } from 'react-icons/si';
import { deploymentModule } from './shared/deployment';

export const reactCourse: Course = {
  id: 'react',
  title: 'React Framework',
  description: 'Build powerful single-page applications with the most popular UI library.',
  Icon: SiReact,
  color: '#36A18B',
  category: 'Frontend',
  difficulty: 'Intermediate',
  popularity: 97,
  releaseDate: '2024-03-10',
  tags: ['React', 'Hooks', 'Components', 'Virtual DOM', 'State Management'],
  modules: [
    {
      title: 'React Core Concepts',
      lessons: [
        {
          id: 'react-1',
          title: 'Components & Props',
          duration: '20min',
          content: 'React apps are made out of components. A component is a piece of the UI that has its own logic and appearance. Components can be as small as a button or as large as an entire page. Props (short for properties) are the way we pass data from parent components down to children.'
        },
        {
          id: 'react-2',
          title: 'State & Lifecycle',
          duration: '25min',
          content: 'State is similar to props, but it is private and fully controlled by the component. When a component\'s state changes, React automatically re-renders the component to reflect the new state in the UI.'
        }
      ]
    },
    {
      title: 'React Hooks',
      lessons: [
        {
          id: 'react-3',
          title: 'useState & useEffect',
          duration: '30min',
          content: 'Hooks are functions that let you “hook into” React state and lifecycle features from function components. `useState` lets you add state variables, and `useEffect` lets you perform side effects (like data fetching or subscribing to events).'
        },
        {
          id: 'react-4',
          title: 'Custom Hooks',
          duration: '25min',
          content: 'Building your own Hooks lets you extract component logic into reusable functions. If you find yourself writing the same code in multiple components, it might be time to create a custom Hook.'
        }
      ]
    },
    {
      title: 'Advanced React',
      lessons: [
        {
          id: 'react-5',
          title: 'Context API',
          duration: '20min',
          content: 'Context provides a way to pass data through the component tree without having to pass props down manually at every level. It is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user or theme.'
        },
        {
          id: 'react-perf',
          title: 'Performance Optimization',
          duration: '30min',
          content: "React is fast by default, but complex apps can get slow. Learn to use `React.memo` to skip re-rendering components when their props haven't changed. Use the `useMemo` hook to cache expensive calculations and `useCallback` to cache function definitions, preventing unnecessary child re-renders.",
          aids: {
            tips: ["Don't optimize prematurely! Only use `useMemo` and `useCallback` when you actually notice a performance issue or referential equality matters."]
          }
        },
        {
          id: 'react-6',
          title: 'React Router',
          duration: '30min',
          content: 'React Router is the standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.'
        }
      ]
    },
    deploymentModule,
  ]
};