import { Course } from '../../types';
import { SiJavascript } from 'react-icons/si';
import { deploymentModule } from './shared/deployment';

export const jsCourse: Course = {
  id: 'js',
  title: 'JavaScript Deep Dive',
  description: 'Master the language of the web. From fundamentals and DOM manipulation to asynchronous programming and modern ES6+ features.',
  Icon: SiJavascript,
  color: '#F4D35E',
  category: 'Frontend',
  difficulty: 'Intermediate',
  popularity: 98,
  releaseDate: '2024-02-01',
  modules: [
    {
      title: 'Module 1: JavaScript Fundamentals',
      lessons: [
        {
          id: 'js-1',
          title: 'Variables & Data Types',
          duration: '20min',
          content: 'JavaScript uses variables to store data. We use `let` for variables that can change, `const` for variables that should not change, and `var` (the old way). JS has several data types: `String` (text), `Number` (for both integers and decimals), `Boolean` (true/false), `null` (intentionally empty), `undefined` (unassigned), `Symbol`, and `BigInt`.',
          codeExample: {
            html: `<p>Check the browser console for output!</p>`,
            js: `// Use 'let' for values that might change.
let userAge = 25;
userAge = 26; // This is fine.

// Use 'const' for constant values.
const birthYear = 1998;
// birthYear = 1999; // This would cause an error!

// Data Types
const greeting = "Hello, world!"; // String
const score = 9.5;                 // Number
const isLoggedIn = true;           // Boolean

console.log(greeting, score, isLoggedIn);`
          }
        },
        {
          id: 'js-2',
          title: 'Operators & Control Flow',
          duration: '25min',
          content: 'Operators perform actions on values (e.g., `+` for addition, `===` for strict equality). Control flow directs the path your code takes. `if`/`else` statements make decisions based on conditions. `for` and `while` loops repeat actions multiple times.',
          codeExample: {
            html: `<p>Check the browser console for output!</p>`,
            js: `const userPoints = 100;

// 'if/else' for decisions
if (userPoints > 50) {
  console.log("You have enough points!");
} else {
  console.log("You need more points.");
}

// 'for' loop to repeat a task
for (let i = 0; i < 3; i++) {
  console.log("Looping... " + i);
}`
          }
        },
        {
          id: 'js-3',
          title: 'Functions',
          duration: '20min',
          content: 'Functions are reusable blocks of code. You can "call" a function to execute its code. Functions can take inputs (parameters) and return an output. Arrow functions (`=>`) are a modern, concise way to write functions.',
          aids: {
            tips: ["Functions help you follow the DRY principle: Don't Repeat Yourself."]
          }
        },
        {
          id: 'js-4',
          title: 'Fundamentals Quiz',
          duration: '10min',
          content: 'Test your grasp of the core concepts of JavaScript.',
          quiz: {
            title: "JS Fundamentals Quiz",
            questions: [
              { question: "Which keyword is used for a variable that cannot be reassigned?", options: ["var", "let", "const", "static"], correctAnswerIndex: 2, explanation: "`const` is used to declare a constant variable, which means its value cannot be changed after it's assigned." },
              { question: "What is the result of `\"5\" == 5`?", options: ["true", "false", "undefined", "Error"], correctAnswerIndex: 0, explanation: "The `==` operator performs type coercion, converting the string '5' to a number before comparing. `===` (strict equality) would be false because it checks type as well." },
              { question: "Which is the modern, concise syntax for writing a function?", options: ["Function Expression", "Function Declaration", "Arrow Function", "Method Function"], correctAnswerIndex: 2, explanation: "Arrow functions (`=>`) were introduced in ES6 and provide a shorter syntax compared to traditional function expressions." }
            ]
          }
        }
      ]
    },
    {
      title: 'Module 2: Working with Data',
      lessons: [
        {
          id: 'js-5',
          title: 'Objects in Detail',
          duration: '20min',
          content: 'Objects are collections of key-value pairs, perfect for representing real-world things. You can access properties using dot notation (`.`) or bracket notation (`[]`), which is useful for dynamic property names.',
        },
        {
          id: 'js-6',
          title: 'Arrays & Their Methods',
          duration: '25min',
          content: 'Arrays are ordered lists of values. JavaScript provides many powerful built-in methods to work with them, like `push` (add to end), `pop` (remove from end), `shift` (remove from start), and `unshift` (add to start).',
        },
        {
          id: 'js-7',
          title: 'Advanced Array Methods',
          duration: '30min',
          content: 'The real power of arrays comes from iterative methods. `map()` creates a new array by transforming every element. `filter()` creates a new array with only the elements that pass a test. `reduce()` executes a reducer function on each element, resulting in a single output value.',
          codeExample: {
            html: `<p>Check the browser console for output!</p>`,
            js: `const numbers = [1, 2, 3, 4, 5];

// .map() - double each number
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// .filter() - get only even numbers
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]

// .reduce() - sum all numbers
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // 15`
          }
        },
        {
          id: 'js-8',
          title: 'JSON: The Language of APIs',
          duration: '15min',
          content: 'JSON (JavaScript Object Notation) is a lightweight format for storing and transporting data. It\'s the standard format used by most web APIs. `JSON.stringify()` converts a JavaScript object to a JSON string, and `JSON.parse()` converts a JSON string back into a JavaScript object.'
        },
         {
          id: 'js-9',
          title: 'Data Structures Quiz',
          duration: '10min',
          content: 'Test your knowledge of JavaScript objects and arrays.',
           quiz: {
            title: "Data Structures Quiz",
            questions: [
              { question: "Which method adds one or more elements to the end of an array and returns the new length?", options: ["shift()", "unshift()", "pop()", "push()"], correctAnswerIndex: 3, explanation: "`push()` adds elements to the end of an array." },
              { question: "Which array method would be best for creating a new array containing only the elements from an original array that are greater than 10?", options: ["map()", "filter()", "reduce()", "forEach()"], correctAnswerIndex: 1, explanation: "`filter()` is designed to create a new array containing only the elements that pass a specific condition." },
              { question: "How would you access the `name` property of an object stored in the variable `user`?", options: ["user[name]", "user('name')", "user.name", "getName(user)"], correctAnswerIndex: 2, explanation: "Dot notation (`user.name`) is the most common and direct way to access an object's property." }
            ]
          }
        }
      ]
    },
    {
      title: 'Module 3: The Document Object Model (DOM)',
      lessons: [
        {
          id: 'js-10',
          title: 'Selecting & Manipulating Elements',
          duration: '25min',
          content: 'The DOM is the browser\'s representation of your HTML. JavaScript can interact with it to make webpages dynamic. Use `document.querySelector()` to find an element, then change its properties like `.textContent`, `.innerHTML`, or its style with `.style`.',
        },
        {
          id: 'js-11',
          title: 'Event Handling',
          duration: '25min',
          content: 'Make your page interactive by listening for user actions. Use `element.addEventListener()` to run a function when an event like a `click`, `mouseover`, or `submit` occurs. The function receives an `event` object with information about the interaction.',
        },
        {
          id: 'js-12',
          title: 'Creating & Removing Elements',
          duration: '20min',
          content: 'You can create new HTML elements from scratch in JavaScript using `document.createElement()`, set their properties, and then add them to the page with `parentElement.appendChild()`. You can also remove elements with `element.remove()`.',
        },
        {
          id: 'js-13',
          title: 'Project: Interactive To-Do List',
          duration: '45min',
          content: 'Apply your DOM manipulation skills. Build a to-do list application where a user can type in a task, click a button to add it to a list, and click on a task to mark it as complete or remove it. This project will solidify your understanding of DOM interaction.'
        }
      ]
    },
     {
      title: 'Module 4: Asynchronous JavaScript',
      lessons: [
        {
          id: 'js-14',
          title: 'The Event Loop & Callbacks',
          duration: '20min',
          content: 'JavaScript is single-threaded, but it handles long-running tasks (like fetching data) without freezing the page using an asynchronous model. We\'ll explore the event loop, call stack, and how older async code used callback functions, which sometimes led to "callback hell".'
        },
        {
          id: 'js-15',
          title: 'Promises',
          duration: '25min',
          content: 'A Promise is an object representing the eventual completion (or failure) of an asynchronous operation. It allows you to chain actions using `.then()` for success and `.catch()` for errors, providing a much cleaner way to handle async code than callbacks.',
        },
        {
          id: 'js-16',
          title: 'Async/Await',
          duration: '25min',
          content: '`async/await` is modern syntax built on top of Promises that makes asynchronous code look and behave more like synchronous code, making it much easier to read and write. An `async` function can use the `await` keyword to pause execution until a Promise settles.',
        },
        {
          id: 'js-17',
          title: 'Fetching API Data with `fetch`',
          duration: '30min',
          content: 'The `fetch()` API is the modern way to make network requests. It returns a Promise, making it perfect to use with `async/await`. We will learn how to make a GET request to a public API, handle the response, and parse the JSON data.',
          codeExample: {
            html: `<h2>Random User Data</h2>
<pre id="output"></pre>`,
            js: `const apiUrl = 'https://jsonplaceholder.typicode.com/users/1';
const outputElement = document.getElementById('output');

async function fetchUserData() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    outputElement.textContent = JSON.stringify(data, null, 2);
  } catch (error) {
    outputElement.textContent = 'Failed to fetch user: ' + error.message;
  }
}

fetchUserData();`
          }
        },
        {
          id: 'js-18',
          title: 'Async JS Quiz',
          duration: '10min',
          content: 'Test your understanding of asynchronous JavaScript concepts.',
          quiz: {
            title: "Async JS Quiz",
            questions: [
              { question: "What does the `fetch()` function return?", options: ["A JSON object", "A Callback function", "A Promise", "An HTML element"], correctAnswerIndex: 2, explanation: "`fetch()` initiates a network request and returns a Promise that resolves to the Response object." },
              { question: "The `await` keyword can only be used inside...", options: ["A `.then()` block", "An `async` function", "A `for` loop", "Any function"], correctAnswerIndex: 1, explanation: "The `await` keyword is a special syntax available exclusively inside functions declared with the `async` keyword." },
              { question: "In a Promise chain, which method is used to handle errors?", options: [".then()", ".error()", ".catch()", ".finally()"], correctAnswerIndex: 2, explanation: "The `.catch()` method is used to handle any errors that occur in the preceding `.then()` blocks of a Promise chain." }
            ]
          }
        }
      ]
    },
    {
      title: 'Module 5: JavaScript in the Modern Era (ES6+)',
      lessons: [
        {
          id: 'js-19',
          title: 'Arrow Functions & `this`',
          duration: '20min',
          content: 'A deeper look at arrow functions. A key difference from traditional functions is how they handle the `this` keyword. Arrow functions do not have their own `this`; they inherit it from the parent scope, which solves many common bugs.'
        },
        {
          id: 'js-20',
          title: 'Destructuring & Spread/Rest',
          duration: '25min',
          content: 'ES6 introduced powerful syntax for working with objects and arrays. Destructuring allows you to unpack values into distinct variables. The spread (`...`) operator allows you to expand iterables into individual elements, perfect for making copies of arrays or objects.',
        },
        {
          id: 'js-21',
          title: 'Template Literals',
          duration: '10min',
          content: 'Template literals (using backticks ``) are a game-changer for working with strings. They allow you to embed expressions directly inside a string (`${myVariable}`) and create multi-line strings without messy concatenation.',
        },
        {
          id: 'js-22',
          title: 'ES Modules: Import/Export',
          duration: '20min',
          content: 'Modern JavaScript applications are built with modules. The `export` keyword makes functions or variables available to other files, and the `import` keyword brings them into the current file. This is fundamental for building organized, scalable applications.'
        }
      ]
    },
     {
        title: 'Module 6: Capstone Project',
        lessons: [
            {
                id: 'js-capstone',
                title: 'Project: Build a Weather App',
                duration: '120min',
                content: "Time to build a complete application. Your capstone project is to create a weather app. It will have an input field for a city name. When the user submits the form, your app will use the `fetch` API to get weather data from a free public API (like OpenWeatherMap). You will then use your DOM manipulation skills to display the current temperature, weather conditions, and humidity on the page. This project combines everything: fundamentals, DOM interaction, and asynchronous JavaScript."
            }
        ]
    },
    deploymentModule,
  ]
};