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
  modules: [
    { title: 'React Core Concepts', lessons: [{ id: 'react-1', title: 'Components & Props', duration: '20min', content: 'React apps are made out of components. A component is a piece of the UI that has its own logic and appearance.' }, { id: 'react-2', title: 'State & Lifecycle', duration: '25min', content: 'State is similar to props, but it is private and fully controlled by the component.' }] },
    { title: 'React Hooks', lessons: [{ id: 'react-3', title: 'useState & useEffect', duration: '30min', content: 'Hooks are functions that let you “hook into” React state and lifecycle features from function components.' }, { id: 'react-4', title: 'Custom Hooks', duration: '25min', content: 'Building your own Hooks lets you extract component logic into reusable functions.' }] },
    { title: 'Advanced React', lessons: [{ id: 'react-5', title: 'Context API', duration: '20min', content: 'Context provides a way to pass data through the component tree without having to pass props down manually at every level.' }, { id: 'react-6', title: 'React Router', duration: '30min', content: 'React Router is the standard library for routing in React.' }] },
    deploymentModule,
  ]
};