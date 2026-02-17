import { Course } from '../../types';
import { SiCss3 } from 'react-icons/si';
import { deploymentModule } from './shared/deployment';

export const cssCourse: Course = {
  id: 'css',
  title: 'CSS University',
  description: 'Go from beginner to pro with a deep dive into modern CSS, from core concepts and advanced layouts to professional architecture.',
  Icon: SiCss3,
  color: '#2A4C7C',
  category: 'Web Foundations',
  difficulty: 'Beginner',
  popularity: 88,
  releaseDate: '2024-01-15',
  tags: ['CSS3', 'Flexbox', 'Grid', 'Animation', 'Responsive'],
  modules: [
    {
      title: 'Module 1: CSS Fundamentals (Deep Dive)',
      lessons: [
        {
          id: 'css-1',
          title: 'Selectors & The Cascade',
          duration: '20min',
          content: 'CSS works by associating rules with HTML elements. Selectors are patterns that select elements. The browser reads CSS rules from top to bottom. This is called the cascade. If multiple rules apply to the same element, the one that comes last in the stylesheet will be used, unless another rule has higher importance.',
          codeExample: {
            html: `<p class="highlight">This paragraph will be blue.</p>`,
            css: `p { color: red; }
/* This rule comes later, so it overrides the previous one. */
p { color: blue; }`
          }
        },
        {
          id: 'css-2',
          title: 'Specificity: The Golden Rule',
          duration: '20min',
          content: 'Specificity is the algorithm browsers use to determine which CSS rule is the most relevant and should be applied. It\'s a weighted system. ID selectors are more specific than class selectors, which are more specific than tag selectors. Understanding specificity is the key to avoiding frustration and writing predictable CSS.',
          aids: {
            notes: [
              "Specificity hierarchy: Inline Styles > IDs > Classes/attributes/pseudo-classes > Elements/pseudo-elements.",
              "Think of it like points: ID = 100 points, Class = 10 points, Element = 1 point.",
              "The `!important` rule overrides all other rules, but should be used very sparingly as it can make debugging difficult."
            ],
            mistakes: ["Using `!important` to fix everything. This is a sign of underlying specificity problems."]
          },
          quiz: {
            title: "Specificity Quiz",
            questions: [
              { question: "Which of the following selectors has the highest specificity?", options: ["`.container p`", "`#main-content`", "`div`", "`p.intro`"], correctAnswerIndex: 1, explanation: "ID selectors (#) have a much higher specificity than class (.) or element selectors." },
              { question: "A rule with `!important` will be overridden by what?", options: ["An ID selector", "An inline style", "Another rule with `!important` that comes later in the CSS", "Nothing can override it"], correctAnswerIndex: 2, explanation: "!important rules can only be overridden by another !important rule that has the same or higher specificity and appears later in the stylesheet." }
            ]
          }
        },
        {
          id: 'css-3',
          title: 'Advanced Selectors',
          duration: '25min',
          content: 'Go beyond simple selectors. Pseudo-classes like `:hover`, `:focus`, and `:nth-child(n)` let you style elements based on their state or position. Pseudo-elements like `::before` and `::after` let you insert and style content that isn\'t in the HTML, perfect for decorative elements.',
          codeExample: {
            html: `<ul>
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
</ul>
<a href="#">Hover over me</a>`,
            css: `/* Style the second list item */
li:nth-child(2) {
  color: #36A18B;
}

/* Add a cool effect on link hover */
a::after {
  content: ' ->';
  opacity: 0;
  transition: opacity 0.3s;
}
a:hover::after {
  opacity: 1;
}`
          }
        },
        {
          id: 'css-4',
          title: 'The Box Model & Sizing',
          duration: '20min',
          content: 'Every element is a rectangular box consisting of: content, padding, border, and margin. By default, an element\'s `width` and `height` only apply to the content area. A modern best practice is to set `box-sizing: border-box;` which includes padding and border in the element\'s total width and height, making layouts much more intuitive.',
          visualDemo: 'box-model',
        },
        {
          id: 'css-5',
          title: 'Colors, Backgrounds & Gradients',
          duration: '15min',
          content: 'Beyond simple `color` and `background-color`, you can add `background-image` (which can also be a `linear-gradient()` or `radial-gradient()`), control its `background-size`, `background-position`, and `background-repeat`.'
        },
        {
          id: 'css-6',
          title: 'Advanced Typography',
          duration: '15min',
          content: 'Control the look of your text with properties like `line-height` (spacing between lines), `letter-spacing` (spacing between characters), and `text-transform` (uppercase, lowercase). You can also use custom web fonts with the `@font-face` rule.'
        },
      ]
    },
    {
      title: 'Module 2: Layout Mastery',
      lessons: [
        {
          id: 'css-7',
          title: 'Positioning Deep Dive',
          duration: '20min',
          content: 'The `position` property is fundamental for layouts. `static` is the default. `relative` allows you to shift an element with `top`/`left` without affecting flow. `absolute` positions an element relative to its nearest *positioned* ancestor. `fixed` positions an element relative to the viewport (the browser window). `sticky` is a hybrid that behaves like `relative` until it hits a specified scroll position, then acts like `fixed`.',
          aids: {
            mistakes: ["Using `absolute` positioning and finding the element flies off to the corner of the page. This is because none of its parent elements have `position: relative` or another non-static value."]
          }
        },
        {
          id: 'css-8',
          title: 'Flexbox Deep Dive',
          duration: '30min',
          content: 'Flexbox is a one-dimensional layout system for arranging items in rows or columns. The parent container (`display: flex`) controls the main layout axis (`flex-direction`), how items are distributed (`justify-content`), and how they are aligned (`align-items`). Flex items themselves can be controlled with properties like `flex-grow`, `flex-shrink`, and `flex-basis`.',
          visualDemo: 'flexbox',
          quiz: {
            title: "Flexbox Quiz",
            questions: [
              { question: "Which property is used on the flex container to align items along the main axis?", options: ["align-items", "justify-content", "flex-direction", "align-content"], correctAnswerIndex: 1, explanation: "`justify-content` distributes space between and around content items along the main-axis of a flex container." },
              { question: "To make flex items wrap onto multiple lines, you would use:", options: ["`flex-direction: column`", "`flex-wrap: wrap`", "`overflow: auto`", "`align-content: stretch`"], correctAnswerIndex: 1, explanation: "`flex-wrap: wrap` allows flex items to wrap onto new lines if there isn't enough space on the current line." }
            ]
          }
        },
        {
          id: 'css-9',
          title: 'CSS Grid Deep Dive',
          duration: '30min',
          content: 'Grid is a two-dimensional layout system. On the parent container (`display: grid`), you define your layout with `grid-template-columns` and `grid-template-rows`. You can use absolute units (px), relative units (fr), or percentages. The `gap` property sets the space between grid items. Items can be placed precisely using grid line numbers or named grid areas.',
          visualDemo: 'grid',
          quiz: {
            title: "CSS Grid Quiz",
            questions: [
              { question: "What does the `fr` unit in CSS Grid represent?", options: ["A fixed unit of 16px", "The French unit for grids", "A fractional unit of the available space", "The first row"], correctAnswerIndex: 2, explanation: "The `fr` unit represents a fraction of the available space in the grid container, making it perfect for creating flexible layouts." },
              { question: "Which property would you use to create space between grid rows and columns?", options: ["`margin`", "`padding`", "`gap`", "`spacing`"], correctAnswerIndex: 2, explanation: "The `gap` property (or `grid-gap`) is the modern and simplest way to define the gutters between rows and columns in a grid layout." }
            ]
          }
        },
        {
          id: 'css-10',
          title: 'Responsive Design & Media Queries',
          duration: '25min',
          content: 'Responsive design makes your site look great on all devices. This is achieved with Media Queries. A media query applies a block of CSS rules only if a certain condition is true, usually the viewport width. A "mobile-first" approach involves writing styles for small screens by default, then using `min-width` media queries to add styles for larger screens.',
          codeExample: {
            html: `<div class="container">I change layout on different screens!</div>`,
            css: `/* Mobile-first styles */
.container {
  background-color: #E16A54;
  padding: 1rem;
}

/* Tablet and larger styles */
@media (min-width: 768px) {
  .container {
    background-color: #36A18B;
  }
}`
          }
        }
      ]
    },
    {
      title: 'Module 3: Visual Effects & Animation',
      lessons: [
        {
          id: 'css-11',
          title: 'Transitions',
          duration: '15min',
          content: 'CSS transitions provide a way to control animation speed when changing CSS properties. Instead of a property change being instantaneous, you can make it happen over a period of time. You can control which property to transition, the duration, the timing function (like `ease-in-out`), and any delay.'
        },
        {
          id: 'css-12',
          title: '2D & 3D Transforms',
          duration: '20min',
          content: 'The `transform` property lets you modify the coordinate space of the CSS visual formatting model. You can rotate (`rotate()`), scale (`scale()`), move (`translate()`), or skew (`skew()`) elements in 2D or 3D space without affecting the document flow.',
          codeExample: {
            html: `<div class="box"></div>`,
            css: `.box {
  width: 100px;
  height: 100px;
  background-color: #F39E60;
  transition: transform 0.5s ease-in-out;
}
.box:hover {
  transform: rotate(45deg) scale(1.2);
}`
          }
        },
        {
          id: 'css-13',
          title: 'Keyframe Animations',
          duration: '25min',
          content: 'For more complex, multi-step animations, you use `@keyframes`. You define the animation\'s steps, from `from` (0%) to `to` (100%), and then apply it to an element using the `animation` property, where you can set duration, iteration count, direction, and more.',
        },
        {
          id: 'css-14',
          title: 'Filters & Blend Modes',
          duration: '15min',
          content: 'The `filter` property provides graphical effects like blurring (`blur()`), color shifting (`grayscale()`, `sepia()`), or brightness/contrast adjustments. The `mix-blend-mode` property defines how an element\'s content should blend with the content of the element\'s parent and background.',
        },
        {
          id: 'css-15',
          title: 'Effects & Animation Quiz',
          duration: '10min',
          content: "Test your knowledge of CSS visual effects.",
          quiz: {
            title: "CSS Effects Quiz",
            questions: [
              { question: "To create a multi-step animation, you should use:", options: ["`transition`", "`transform`", "`@keyframes`", "`filter`"], correctAnswerIndex: 2, explanation: "`@keyframes` allows you to define specific steps in an animation sequence, which you can then apply to an element." },
              { question: "Which `transform` function would you use to increase the size of an element?", options: ["`rotate()`", "`translate()`", "`skew()`", "`scale()`"], correctAnswerIndex: 3, explanation: "The `scale()` function modifies the size of an element. A value greater than 1 increases its size, and a value less than 1 decreases it." }
            ]
          }
        }
      ]
    },
    {
      title: 'Module 4: Modern CSS Architecture',
      lessons: [
        {
          id: 'css-16',
          title: 'CSS Variables',
          duration: '20min',
          content: 'Also known as Custom Properties, CSS variables allow you to store values in one place and reuse them throughout your stylesheet. This is incredibly powerful for theming (e.g., light/dark mode) and maintaining consistency in colors, fonts, and spacing. Variables are defined with a double-hyphen prefix (e.g., `--main-color: #36A18B;`) and used with the `var()` function (e.g., `color: var(--main-color);`).',
          codeExample: {
            html: `<div class="card">This card can be easily themed!</div>`,
            css: `:root {
  --primary-color: #E16A54;
  --card-padding: 1.5rem;
}

.card {
  background-color: var(--primary-color);
  padding: var(--card-padding);
  color: white;
}`
          }
        },
        {
          id: 'css-17',
          title: 'BEM Naming Convention',
          duration: '20min',
          content: 'When projects get large, CSS can become messy. BEM (Block, Element, Modifier) is a popular naming convention that makes your CSS more structured, readable, and scalable. A Block is a standalone component (e.g., `.card`). An Element is a part of that block (e.g., `.card__title`). A Modifier is a variation of the block or element (e.g., `.card--large` or `.card__title--alert`).',
          aids: {
            tips: ["BEM helps avoid specificity conflicts and makes it clear which styles belong to which component just by reading the class name."]
          }
        },
        {
          id: 'css-18',
          title: 'Intro to Preprocessors (Sass)',
          duration: '15min',
          content: 'A CSS preprocessor is a tool that lets you generate CSS from its own unique syntax. Sass is the most popular one. It adds features that don\'t exist in plain CSS, like variables (before CSS had them), nesting (writing child selectors inside parent selectors), and mixins (reusable blocks of styles). While you need a build tool to compile Sass into CSS, understanding the concepts is important for many professional jobs.',
        },
        {
          id: 'css-19',
          title: 'Conceptual: CSS-in-JS',
          duration: '10min',
          content: 'In modern component-based frameworks like React, a popular technique is CSS-in-JS. This involves writing your CSS styles directly in your JavaScript files using libraries like Styled Components or Emotion. This approach co-locates your component\'s logic, template, and styles, making them truly encapsulated and portable. It\'s a different paradigm from traditional stylesheets, but very common in the React ecosystem.'
        },
        {
          id: 'css-20',
          title: 'Container Queries',
          duration: '15min',
          content: 'Container Queries allow you to style an element based on the available space within its *container*, rather than the viewport. This is a game-changer for component-based design. You define a container using `container-type` and then use `@container` rules to apply styles when the container meets certain conditions.',
          codeExample: {
            html: `<div class="card-container">
  <div class="card">Resizes based on container!</div>
</div>`,
            css: `.card-container {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card {
    font-size: 2rem;
  }
}`
          }
        }
      ]
    },
    {
      title: 'Module 5: Capstone Project',
      lessons: [
        {
          id: 'css-capstone',
          title: 'Project: Build a Landing Page',
          duration: '120min',
          content: "Time to put everything together. Your capstone project is to build a beautiful, fully responsive, and animated product landing page from scratch. The page must include: a semantic HTML structure, a modern layout using Flexbox or Grid, responsive design for mobile and desktop, interactive elements with hover effects (transitions/transforms), and use of CSS Variables for the color scheme."
        }
      ]
    },
    deploymentModule,
  ]
};