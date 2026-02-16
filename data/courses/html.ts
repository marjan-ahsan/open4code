import { Course } from '../../types';
import { SiHtml5 } from 'react-icons/si';
import { deploymentModule } from './shared/deployment';

export const htmlCourse: Course = {
  id: 'html',
  title: 'HTML5 Mastery',
  description: 'Build the foundation of the web. Learn semantic HTML, forms, accessibility, and more.',
  Icon: SiHtml5,
  color: '#E16A54',
  category: 'Web Foundations',
  difficulty: 'Beginner',
  popularity: 90,
  releaseDate: '2024-01-10',
  modules: [
    {
      title: 'Module 1: Your First Web Page',
      lessons: [
        {
          id: 'html-m1-l1',
          title: 'Welcome to the Web!',
          duration: '10min',
          content: "Ready to build the web? It all starts with HTML, the standard markup language for creating web pages. HTML describes the structure of a web page and consists of a series of elements. These elements tell the browser how to display the content. Think of it as the skeleton that gives every website its fundamental structure. In this module, we'll go from a blank file to a live webpage in minutes!",
          aids: {
            notes: [
              "HTML stands for HyperText Markup Language.",
              "It's not a programming language; it's a markup language used to structure content.",
              "HTML elements are the building blocks of HTML pages and are represented by <> tags."
            ],
            tips: [
              "The basic anatomy of an HTML element is: an opening tag, the content, and a closing tag. For example: `<p>This is a paragraph.</p>`."
            ]
          }
        },
        {
          id: 'html-m1-l2',
          title: 'The "Hello, Universe!" Page',
          duration: '15min',
          content: 'Every webpage has a fundamental structure. Let\'s break it down: `<!DOCTYPE html>` declares that this document is an HTML5 document. The `<html>` element is the root element of the page. The `<head>` element contains meta-information about the page, like its title, character set, and links to stylesheets. The content inside the `<head>` is not displayed on the page itself. Finally, the `<body>` element contains all the visible content of the page, such as headings, paragraphs, images, and links. Let\'s build it!',
          codeExample: {
            html: `<!-- The DOCTYPE declaration defines this as an HTML5 document -->
<!DOCTYPE html>

<!-- The root element of the HTML page -->
<html lang="en">

  <!-- The head contains metadata about the page -->
  <head>
    <meta charset="UTF-8">
    <title>My Awesome Page</title>
  </head>

  <!-- The body contains the visible content -->
  <body>
    <h1>Hello, Universe!</h1>
    <p>This is my very first webpage!</p>
  </body>

</html>`,
            css: `body {
  background-color: #2d3748;
  color: white;
  font-family: sans-serif;
  text-align: center;
  padding-top: 50px;
}
h1 {
  font-size: 3rem;
  color: #F39E60;
}`,
            js: ''
          },
          quiz: {
            title: "Basic Structure Quiz",
            questions: [
              { question: "Which tag contains the visible content of a webpage?", options: ["<head>", "<body>", "<title>", "<!DOCTYPE>"], correctAnswerIndex: 1, explanation: "The <body> tag holds all the content that users see in their browser window, such as text, images, and links." },
              { question: "What is the purpose of the <!DOCTYPE html> declaration?", options: ["It creates the page title.", "It's a comment.", "It tells the browser that the page is written in HTML5.", "It links to a CSS file."], correctAnswerIndex: 2, explanation: "The <!DOCTYPE html> declaration is an instruction to the web browser about what version of HTML the page is written in. It ensures the page behaves correctly." },
              { question: "Where should the `<title>` tag for the webpage be placed?", options: ["Inside the `<body>` tag", "Inside the `<h1>` tag", "Inside the `<head>` tag", "At the very top, before `<!DOCTYPE html>`"], correctAnswerIndex: 2, explanation: "The `<title>` tag, which sets the text in the browser tab, is considered metadata and belongs inside the `<head>` section." },
              { question: "What is the root element of any HTML page?", options: ["`<body>`", "`<main>`", "`<html>`", "`<head>`"], correctAnswerIndex: 2, explanation: "The `<html>` tag is the highest-level element and wraps everything else on the page (except for the <!DOCTYPE> declaration)." },
              { question: "Which tag is used to define the main heading of a page?", options: ["`<h6>`", "`<heading>`", "`<head>`", "`<h1>`"], correctAnswerIndex: 3, explanation: "The `<h1>` tag is used for the most important, top-level heading on a page. It's crucial for both SEO and accessibility." }
            ]
          }
        },
        {
          id: 'html-m1-l3',
          title: 'Telling a Story with Text',
          duration: '20min',
          content: "Text is the backbone of most webpages. HTML provides several tags to structure and give meaning to your text. Headings (`<h1>` to `<h6>`) define a hierarchy of importance, with `<h1>` being the most important. Paragraphs (`<p>`) are used for blocks of text. To emphasize text, you can use `<strong>` for strong importance or `<em>` for stressed emphasis. While `<b>` (bold) and `<i>` (italic) might look similar, `<strong>` and `<em>` carry semantic meaning, which is better for accessibility and SEO. Some elements, like `<br>` for a line break, are 'empty' or 'void' elements because they don't have a closing tag.",
          codeExample: {
            html: `<h1>This is the Main Title</h1>
<h2>This is a Subheading</h2>
<p>This is a standard paragraph. It can contain a lot of text.</p>
<p>You can make text <strong>very important</strong> or you can add <em>emphasis</em>.</p>
<p>This is a line.<br>This is a new line, forced by a line break tag.</p>`
          },
          aids: {
            tips: ["Use only one `<h1>` per page for the main title. It's crucial for search engines and screen readers!", "Semantic tags like `<strong>` and `<em>` tell search engines and screen readers about the structure and importance of your content, not just its appearance."]
          }
        },
        {
          id: 'html-m1-l4',
          title: 'Module 1 Challenge',
          duration: '10min',
          content: "Let's put it all together! Create a simple bio page about yourself. It should have a main heading (`<h1>`) with your name, a subheading (`<h2>`) for your profession, and a paragraph (`<p>`) with a short description of what you do or what you're learning."
        }
      ]
    },
    {
      title: 'Module 2: Structuring Your World',
      lessons: [
        {
          id: 'html-m2-l1',
          title: 'Lists for Everything!',
          duration: '15min',
          content: "Organize content with lists. Use unordered lists (`<ul>`) for items where the order doesn't matter (like a shopping list) and ordered lists (`<ol>`) for step-by-step instructions. Each item within a list is placed in a `<li>` (list item) tag. You can even nest lists inside other lists for more complex structures.",
          codeExample: {
            html: `<h2>My Favorite Foods</h2>
<ul>
  <li>Pizza</li>
  <li>Sushi
    <ul>
      <li>Salmon Nigiri</li>
      <li>California Roll</li>
    </ul>
  </li>
  <li>Chocolate</li>
</ul>

<h2>How to Make Tea</h2>
<ol>
  <li>Boil water</li>
  <li>Put teabag in cup</li>
  <li>Pour boiling water in cup</li>
</ol>`
          }
        },
        {
          id: 'html-m2-l2',
          title: 'Connecting the Dots with Links',
          duration: '15min',
          content: "The web is all about connections! The anchor tag (`<a>`) lets you create hyperlinks. The most important attribute is `href`, which specifies the link's destination URL. URLs can be 'absolute' (a full web address like `https://www.google.com`) or 'relative' (a file on your own site like `/about.html`). The `target` attribute can be set to `'_blank'` to open the link in a new browser tab, which is great for external sites.",
          aids: {
            tips: ["You can use `mailto:` in an `href` to create a link that opens the user's default email client. Example: `<a href='mailto:someone@example.com'>Email Us</a>`."],
            notes: ["The text between the `<a>` and `</a>` tags is the visible part of the link that users click on."]
          }
        },
        {
          id: 'html-m2-l3',
          title: 'Painting with Pixels: Images',
          duration: '15min',
          content: "Bring your page to life with images using the `<img>` tag. This is an 'empty' tag, meaning it does not have a closing tag. It has two required attributes: `src` (source), which points to the image file, and `alt` (alternative text), which provides a description. Alt text is crucial for accessibility (for screen reader users) and will be displayed if the image fails to load. You should also include `width` and `height` attributes to specify the image's size, preventing the page layout from shifting as the image loads.",
          codeExample: {
            html: `<!-- Image from an external URL -->
<img 
  src="https://picsum.photos/300/200" 
  alt="A random placeholder image from picsum.photos"
  width="300"
  height="200"
>

<!-- Image from a local file in an 'images' folder -->
<img 
  src="/images/my-profile-pic.jpg" 
  alt="A photo of me smiling"
  width="200"
  height="200"
>`
          },
          aids: {
            mistakes: ["Forgetting the 'alt' attribute. It's one of the most common and critical accessibility mistakes! Always provide a descriptive alt text."]
          }
        },
        {
          id: 'html-m2-l4',
          title: 'Block vs. Inline',
          duration: '15min',
          content: "HTML elements have a default display value. Block-level elements always start on a new line and take up the full width available. Think of them as building blocks that stack on top of each other. Inline elements do not start on a new line and only take up as much width as necessary. They flow within the text. You can change this behavior with CSS, but it's important to understand the default.",
          aids: {
            notes: [
              "**Common Block elements:** `<h1>`-`<h6>`, `<p>`, `<ul>`, `<ol>`, `<li>`, `<div>`, `<header>`, `<footer>`.",
              "**Common Inline elements:** `<a>`, `<strong>`, `<em>`, `<img>`, `<span>`."
            ]
          }
        },
        {
          id: 'html-m2-l5',
          title: 'Module 2 Challenge',
          duration: '15min',
          content: "Enhance your bio page! Add a section with an unordered list of your hobbies, a link to your favorite website that opens in a new tab, and a profile picture of yourself with appropriate `alt`, `width`, and `height` attributes."
        }
      ]
    },
    {
      title: 'Module 3: The Blueprint for Modern Sites',
      lessons: [
        {
          id: 'html-m3-l1',
          title: 'HTML with Meaning (Semantics)',
          duration: '20min',
          content: "Good developers build meaningful websites. Instead of using generic `<div>` tags for everything, semantic HTML uses specific tags to describe the content's purpose. This gives better context to browsers, search engines, and screen readers. A typical semantic layout includes: `<header>` for introductory content, `<nav>` for navigation links, `<main>` for the primary content of the page, `<section>` for grouping related content, `<article>` for self-contained content, `<aside>` for secondary content (like a sidebar), and `<footer>` for the bottom of the page.",
          aids: {
            notes: ["Think of your webpage like a document. A screen reader or search engine can understand a document with a clear header, main content, and footer far better than a pile of generic divs."]
          }
        },
        {
          id: 'html-m3-l2',
          title: 'Building a Blog Layout',
          duration: '20min',
          content: "Let's apply semantics to a real-world example. We'll build the structure for a classic blog page, defining a main header for the site, a navigation bar, the main content area with an article, and a footer.",
          codeExample: {
            html: `<header>
  <h1>My Awesome Blog</h1>
  <nav>
    <a href="#">Home</a>
    <a href="#">About</a>
  </nav>
</header>
<main>
  <article>
    <h2>My First Post</h2>
    <p>This is the content of my post...</p>
  </article>
</main>
<footer>
  <p>&copy; 2024 My Blog</p>
</footer>`
          }
        },
        {
          id: 'html-m3-l3',
          title: 'Tables for Tabular Data',
          duration: '20min',
          content: "Tables are for one thing and one thing only: displaying tabular data! The `<table>` element contains the whole table. Inside it, `<tr>` defines a table row, `<th>` defines a table header cell (it's bold and centered by default), and `<td>` defines a table data cell. For better structure and accessibility, you can group header content in `<thead>`, body content in `<tbody>`, and footer content in `<tfoot>`. You can also make cells span multiple columns or rows with the `colspan` and `rowspan` attributes.",
          codeExample: {
            html: `<table border="1">
  <thead>
    <tr>
      <th>Name</th>
      <th>Role</th>
      <th>Years of Experience</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alice</td>
      <td>Developer</td>
      <td>5</td>
    </tr>
    <tr>
      <td>Bob</td>
      <td>Designer</td>
      <td>8</td>
    </tr>
  </tbody>
</table>`
          },
          aids: {
            mistakes: ["Using tables for page layout. This is an old, outdated practice that creates accessibility issues and makes sites non-responsive. Use CSS Flexbox or Grid instead!"]
          }
        },
        {
          id: 'html-m3-l4',
          title: 'Module 3 Challenge',
          duration: '15min',
          content: "Time to refactor! Take your bio page and rebuild its structure using semantic tags. Wrap your main navigation links in a `<nav>`, your main content in a `<main>`, add a `<header>` for the top of the page, and add a `<footer>` with copyright info."
        }
      ]
    },
    {
      title: 'Module 4: Making it Interactive with Forms',
      lessons: [
        {
          id: 'html-m4-l1',
          title: 'Starting the Conversation: Forms',
          duration: '15min',
          content: "Forms are how you collect information from your users. The `<form>` element acts as a container for all your inputs. Key attributes include `action`, which specifies where to send the form data when submitted, and `method`, which defines the HTTP method to use (`GET` appends data to the URL, `POST` sends it in the request body)."
        },
        {
          id: 'html-m4-l2',
          title: 'Text, Passwords, and Buttons',
          duration: '20min',
          content: "The `<input>` element is the workhorse of forms and its behavior is determined by its `type` attribute. Common types include: `text` for single-line input, `password` to obscure text, and `submit` to create a button that sends the form data. For accessibility, always pair your inputs with a `<label>` tag. The `for` attribute of the label should match the `id` of the input, linking them together.",
          aids: {
            tips: ["The `placeholder` attribute provides a hint to the user of what can be entered in the field. The `required` attribute specifies that an input field must be filled out before submitting the form."]
          }
        },
        {
          id: 'html-m4-l3',
          title: 'Choices: Radio Buttons & Checkboxes',
          duration: '15min',
          content: "Need users to pick from a list of options? Use radio buttons (`<input type='radio'>`) for 'select one' from a group, and checkboxes (`<input type='checkbox'>`) for 'select many'. For radio buttons to work as a group, they must share the same `name` attribute. The `value` attribute for both is what gets sent to the server."
        },
        {
          id: 'html-m4-l4',
          title: 'More Input Types, Selects & Textareas',
          duration: '15min',
          content: "HTML5 introduced powerful new input types like `date`, `email`, and `number` that come with built-in browser validation. For a dropdown list, use the `<select>` element with multiple `<option>` elements inside it. For multi-line text input, like a comment or message box, use the `<textarea>` element.",
          codeExample: {
            html: `<label for="fav-color">Choose a color:</label>
<input type="color" id="fav-color" name="fav-color">

<label for="pet-select">Choose a pet:</label>
<select name="pets" id="pet-select">
  <option value="">--Please choose an option--</option>
  <option value="dog">Dog</option>
  <option value="cat">Cat</option>
</select>

<label for="message">Your message:</label>
<textarea id="message" name="message" rows="5"></textarea>`
          }
        },
        {
          id: 'html-m4-l5',
          title: 'Module 4 Challenge',
          duration: '15min',
          content: "Let's get practical. Build a complete 'Contact Me' form for your bio page. It should include labeled fields for a name (text), email (email), a dropdown to select a topic of inquiry, a message (textarea), and a submit button."
        }
      ]
    },
    {
      title: 'Module 5: A Multimedia Experience',
      lessons: [
        {
          id: 'html-m5-l1',
          title: 'Video and Audio',
          duration: '15min',
          content: "Embed media directly into your page with the `<video>` and `<audio>` tags. The `src` attribute points to the media file. The `controls` attribute adds play/pause buttons and volume control. Other useful attributes include `autoplay` (use with `muted` to be user-friendly), `loop`, and for video, `poster` (an image to show before the video plays). You can also use the `<source>` element inside the video/audio tags to provide multiple file formats for better browser compatibility."
        },
        {
          id: 'html-m5-l2',
          title: 'Embedding the World with Iframes',
          duration: '15min',
          content: "An iframe (`<iframe>`) is like a window to another webpage. It's perfect for embedding content from other sites, like a YouTube video or a Google Map. We'll look at the important attributes like `src`, `width`, `height`, and security-related attributes in the `allow` property.",
          codeExample: {
            html: `<h2>My Favorite Music Video</h2>
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen>
</iframe>`
          }
        },
        {
          id: 'html-m5-l3',
          title: 'Module 5 Challenge',
          duration: '10min',
          content: "Liven up your bio page! Add a section with an embedded YouTube video of your favorite song or a cool tutorial you're watching."
        }
      ]
    },
    {
      title: 'Module 6: The "Under the Hood" Essentials',
      lessons: [
        {
          id: 'html-m6-l1',
          title: "The Brain of the Page: The <head>",
          duration: '20min',
          content: "We've used the `<head>` from day one, but now it's time for a deep dive. It's the container for metadata. We've seen `<title>`, but there's also `<link>` to link to external resources like CSS files, and `<meta>` for metadata like character set (`<meta charset='UTF-8'>`), search engine descriptions (`<meta name='description'>`), and the all-important viewport tag for responsive design.",
          aids: {
            notes: ["The line `<meta name='viewport' content='width=device-width, initial-scale=1.0'>` is one of the most important lines of code for modern, responsive websites. It tells the browser how to control the page's dimensions and scaling."]
          }
        },
        {
          id: 'html-m6-l2',
          title: 'Code Comments & Style',
          duration: '10min',
          content: "Good developers write clean, readable code. Comments (`<!-- ... -->`) allow you to leave notes in your code for yourself or other developers. They are ignored by the browser. Following a consistent style guide (e.g., using consistent indentation) also makes your code much more professional and easier to maintain.",
        },
        {
          id: 'html-m6-l3',
          title: 'Special Characters: Entities & Emojis',
          duration: '10min',
          content: "How do you write a less-than sign (<) without it being interpreted as a tag? With HTML entities! An entity starts with an ampersand (&) and ends with a semicolon (;). Common ones include `&lt;` for <, `&gt;` for >, `&copy;` for ©, and `&nbsp;` for a non-breaking space. You can also add emojis directly into your HTML just by typing or pasting them!",
        },
        {
          id: 'html-m6-l4',
          title: 'Capstone Project: Your Portfolio',
          duration: '60min',
          content: "This is it! Time to combine everything you've learned. You will build a complete, multi-page personal portfolio website. It will have a Home page, an About page (your enhanced bio), and a Contact page with your working form. This project will prove you have mastered the fundamentals of HTML!"
        }
      ]
    },
    {
      title: 'Module 7: Advanced HTML & Accessibility',
      lessons: [
        {
          id: 'html-m7-l1',
          title: 'The data-* Attribute',
          duration: '15min',
          content: "The `data-*` attributes allow you to store extra information on standard, semantic HTML elements without other hacks. This information can then be used in JavaScript for a more interactive experience. The stored data can be accessed via the `dataset` property of the element.",
          codeExample: {
            html: `<div id="user" data-id="123" data-role="admin">John Doe</div>`,
            js: `const userDiv = document.getElementById('user');
console.log(userDiv.dataset.id); // "123"
console.log(userDiv.dataset.role); // "admin"

// You can also modify it
userDiv.dataset.role = 'editor';
console.log(userDiv.dataset.role); // "editor"`
          },
          aids: {
            tips: ["`data-*` attributes are a great way to link HTML elements to JavaScript logic without using classes or IDs for everything.", "The attribute name must be at least one character long after the `data-` prefix and must not contain any uppercase letters."]
          }
        },
        {
          id: 'html-m7-l2',
          title: 'ARIA Roles for Accessibility',
          duration: '20min',
          content: "ARIA (Accessible Rich Internet Applications) is a set of attributes that define ways to make web content and applications more accessible to people with disabilities. The `role` attribute can be used to describe the purpose of an element when its semantic meaning is not clear. For example, using `role='navigation'` on a `<div>` that contains your site's navigation.",
          codeExample: {
            html: `<div role="navigation">
  <ul>
    <li><a href="/" aria-current="page">Home</a></li>
    <li><a href="/about">About</a></li>
  </ul>
</div>

<button aria-label="Close" onclick="myDialog.close()">X</button>`
          },
          aids: {
            notes: ["ARIA doesn't change the behavior or appearance of an element. It only provides information to assistive technologies like screen readers.", "Always use native semantic HTML elements (`<nav>`, `<button>`) when possible. Only use ARIA as a fallback."]
          }
        },
        {
          id: 'html-m7-l3',
          title: 'Optimizing Images with <picture>',
          duration: '20min',
          content: "The `<picture>` element gives you more flexibility in specifying image resources. You can provide different images for different viewport sizes (art direction) or for different resolutions. The browser will choose the most appropriate image from the list of `<source>` elements, and fall back to the `<img>` element if none match.",
          codeExample: {
            html: `<picture>
  <source media="(min-width: 650px)" srcset="img_large.jpg">
  <source media="(min-width: 465px)" srcset="img_medium.jpg">
  <img src="img_small.jpg" alt="A beautiful landscape" style="width:auto;">
</picture>`
          },
          aids: {
            mistakes: ["Forgetting the fallback `<img>` element. It's mandatory and ensures your image displays on all browsers."]
          }
        },
        {
          id: 'html-m7-l4',
          title: 'Details & Summary',
          duration: '15min',
          content: "The `<details>` and `<summary>` elements create a disclosure widget in which information is visible only when the widget is toggled into an 'open' state. It's a native HTML way to create accordions or FAQs without needing any JavaScript.",
          codeExample: {
            html: `<details>
  <summary>What is Open4Code?</summary>
  <p>Open4Code is an interactive learning platform designed to make coding education accessible and engaging for everyone.</p>
</details>`
          }
        }
      ]
    },
    {
      title: 'Module 8: HTML APIs',
      lessons: [
        {
          id: 'html-m8-l1',
          title: 'Web Storage (localStorage)',
          duration: '20min',
          content: "The Web Storage API provides mechanisms by which browsers can store key/value pairs, in a much more intuitive way than using cookies. `localStorage` maintains a separate storage area for each given origin that's available for the duration of the browser session and persists even when the browser is closed and reopened.",
          codeExample: {
            html: `<!DOCTYPE html>
<html>
<head>
  <title>localStorage Example</title>
</head>
<body>
  <h1>localStorage Example</h1>
  <p>Check the console to see the localStorage operations.</p>
</body>
</html>`,
            js: `// Save data to localStorage
localStorage.setItem('username', 'JohnDoe');

// Get data from localStorage
const username = localStorage.getItem('username');
console.log(username); // "JohnDoe"

// Remove data from localStorage
localStorage.removeItem('username');

// Clear all data from localStorage
localStorage.clear();`
          },
          aids: {
            tips: ["`localStorage` is great for saving user preferences, like a theme (light/dark mode)!", "Data is stored as strings. If you want to store objects, you'll need to `JSON.stringify()` them before saving and `JSON.parse()` them after retrieving."]
          }
        },
        {
          id: 'html-m8-l2',
          title: 'Geolocation API',
          duration: '15min',
          content: "The Geolocation API allows the user to provide their location to web applications if they so desire. For privacy reasons, the user is asked for permission to report location information.",
          codeExample: {
            html: `<!DOCTYPE html>
<html>
<head>
  <title>Geolocation API Example</title>
</head>
<body>
  <h1>Geolocation API Example</h1>
  <p>This page will request your location. Check the console for coordinates.</p>
  <p>Note: You may need to grant permission in your browser.</p>
</body>
</html>`,
            js: `const findMyCoordinates = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log('Latitude:', position.coords.latitude);
      console.log('Longitude:', position.coords.longitude);
    }, (error) => {
      console.error("Error getting location:", error.message);
    });
  } else {
    console.error("Geolocation is not supported by this browser.");
  }
}

findMyCoordinates();`
          },
          aids: {
            notes: ["The Geolocation API is only available on secure contexts (HTTPS)."]
          }
        },
        {
          id: 'html-m8-l3',
          title: 'Drag and Drop API',
          duration: '25min',
          content: "HTML Drag and Drop interfaces enable applications to use drag-and-drop features in browsers. The user can select draggable elements with a mouse, drag those elements to a droppable element, and release the mouse to drop them.",
          aids: {
            notes: ["This API involves several events, including `dragstart`, `dragover`, `drop`, and `dragend`.", "You need to call `event.preventDefault()` in the `dragover` event to allow a drop."]
          }
        },
        {
          id: 'html-m8-l4',
          title: 'History API',
          duration: '20min',
          content: "The History API allows for manipulation of the browser session history. This is useful for single-page applications (SPAs) that change content without reloading the page, as it allows you to update the URL in the address bar and create meaningful back/forward navigation.",
          codeExample: {
            html: `<!DOCTYPE html>
<html>
<head>
  <title>History API Example</title>
</head>
<body>
  <h1>History API Example</h1>
  <p>The URL will be updated without a page reload. Check the console when using browser back/forward buttons.</p>
</body>
</html>`,
            js: `// Change the URL without reloading the page
const state = { page: 'about' };
const title = 'About Us';
const url = '/about';
history.pushState(state, title, url);

// Listen for back/forward button clicks
window.onpopstate = (event) => {
  console.log('location: ' + document.location + ', state: ' + JSON.stringify(event.state));
};`
          },
          aids: {
            tips: ["`pushState()` and `replaceState()` are the two main methods for manipulating browser history."]
          }
        }
      ]
    },
    deploymentModule,
  ]
};