import { Course } from '../../types';
import { SiTypescript } from 'react-icons/si';
import { deploymentModule } from './shared/deployment';

export const typescriptCourse: Course = {
    id: 'typescript',
    title: 'TypeScript Mastery',
    description: 'Level up your JavaScript skills with static typing. Learn interfaces, generics, and how to build type-safe applications.',
    Icon: SiTypescript,
    color: '#3178C6',
    category: 'Frontend',
    difficulty: 'Intermediate',
    popularity: 95,
    releaseDate: '2024-04-15',
    modules: [
        {
            title: 'Module 1: Getting Started',
            lessons: [
                {
                    id: 'ts-1',
                    title: 'Introduction to TypeScript',
                    duration: '15min',
                    content: 'TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. We\'ll learn how to set up a project and run our first TS file.',
                    aids: {
                        tips: ["TypeScript is transpiled into JavaScript, so it runs anywhere JS runs."]
                    }
                },
                {
                    id: 'ts-2',
                    title: 'Basic Types',
                    duration: '20min',
                    content: 'Learn about the core types: `string`, `number`, `boolean`, `array`, `tuple`, and `enum`. Explicitly defining types helps catch errors during development.',
                    codeExample: {
                        html: '',
                        js: `let id: number = 5;
let firstName: string = 'Hasan';
let isReady: boolean = true;
let ids: number[] = [1, 2, 3];
let person: [number, string, boolean] = [1, 'Hasan', true];`
                    }
                },
                {
                    id: 'ts-3',
                    title: 'Basics Quiz',
                    duration: '10min',
                    content: 'Test your understanding of TS basic types.',
                    quiz: {
                        title: "TS Basics Quiz",
                        questions: [
                            { question: "Which command is used to compile TypeScript to JavaScript?", options: ["ts-comp", "tsc", "ts-run", "compile"], correctAnswerIndex: 1, explanation: "`tsc` is the TypeScript Compiler command." },
                            { question: "How do you define an array of strings?", options: ["string[]", "Array(string)", "list<string>", "[string]"], correctAnswerIndex: 0, explanation: "`string[]` or `Array<string>` are valid ways." }
                        ]
                    }
                }
            ]
        },
        {
            title: 'Module 2: Interfaces & Types',
            lessons: [
                {
                    id: 'ts-4',
                    title: 'Interfaces',
                    duration: '25min',
                    content: 'Interfaces define the "shape" of an object. They are crucial for creating contracts within your code.',
                    codeExample: {
                        html: '',
                        js: `interface User {
  id: number;
  name: string;
  email?: string; // Optional property
}

const user: User = { id: 1, name: 'John' };`
                    }
                },
                {
                    id: 'ts-5',
                    title: 'Type Aliases',
                    duration: '20min',
                    content: 'Type aliases allow you to create a new name for a type. We\'ll compare them with interfaces.',
                }
            ]
        },
        {
            title: 'Module 3: Generics',
            lessons: [
                {
                    id: 'ts-6',
                    title: 'Understanding Generics',
                    duration: '35min',
                    content: 'Generics allow you to create reusable components that work with a variety of types rather than a single one.',
                    codeExample: {
                        html: '',
                        js: `function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArr = getArray<number>([1, 2, 3]);
let strArr = getArray<string>(['a', 'b', 'c']);`
                    }
                }
            ]
        },
        deploymentModule,
    ]
};
