import { Module } from '../../../types';

export const deploymentModule: Module = {
  title: 'Bonus Module: Deploying Your Website',
  lessons: [
    {
      id: 'deploy-1',
      title: 'Going Live! Intro to Deployment',
      duration: '10min',
      content: "You've built a project, but right now it only exists on your computer. Deployment is the process of making your website live on the internet so anyone can visit it. We'll be focusing on 'static hosting', which is perfect for HTML, CSS, and JavaScript projects. These services take your files and serve them from a global network, making your site fast and reliable.",
      aids: {
        notes: [
          "Deployment means moving your code from your local machine to a live server.",
          "A static site consists of files like HTML, CSS, JS, and images that don't change.",
          "Having live projects is the most important part of building a portfolio to show to potential employers."
        ],
        tips: [
          "Before deploying, make sure your main HTML file is named `index.html`. Most hosting services look for this file as the default starting page."
        ]
      }
    },
    {
      id: 'deploy-2',
      title: 'Method 1: GitHub Pages',
      duration: '20min',
      content: "GitHub offers a free and simple way to host static sites directly from your repository called GitHub Pages. It's a fantastic way to quickly get your projects online. The process is straightforward: create a repository, push your code, and enable GitHub Pages in the repository settings. It will then give you a live URL like `your-username.github.io/your-repo-name`.",
      codeExample: {
        html: `<!-- A typical project structure ready for deployment -->
/my-awesome-project
|-- index.html
|-- styles.css
|-- script.js
|-- /images
    |-- hero.jpg

<!-- Steps: -->
1. Create a new public repository on GitHub.
2. Use git to push your project files to the repository.
3. In your repo settings, go to the "Pages" section.
4. Select the branch to deploy from (usually 'main').
5. Save. Your site will be live in a few minutes!`
      },
      aids: {
        notes: [
          "GitHub Pages is ideal for project showcases, documentation, and personal portfolio sites.",
          "Changes you push to your selected branch will automatically be deployed to your live site."
        ]
      }
    },
    {
      id: 'deploy-3',
      title: 'Method 2: Netlify & Vercel',
      duration: '20min',
      content: "For more powerful features, platforms like Netlify and Vercel are the industry standard for deploying frontend applications. They connect directly to your GitHub account and offer a 'one-click' deployment experience. Every time you push a `git` commit, they automatically rebuild and deploy your site. They also offer features like custom domains, HTTPS, and preview deployments for pull requests, which are invaluable for professional development.",
      aids: {
        tips: [
          "Sign up for Netlify or Vercel with your GitHub account.",
          "Select 'New Project' and choose the repository you want to deploy.",
          "The platform will usually detect the project type (e.g., a React app) and configure the build settings automatically.",
          "These platforms are extremely powerful and are used by major companies worldwide. Getting familiar with them is a great career move."
        ]
      }
    },
    {
      id: 'deploy-4',
      title: 'Your Live Portfolio Awaits',
      duration: '5min',
      content: "Congratulations! You now have the skills to not only build websites but also to launch them for the world to see. This is a crucial step in becoming a developer. Take the projects you've built in this course, push them to GitHub, and deploy them using one of the methods you've learned. Share the live URL with friends, family, and on your resume. You've earned it!"
    }
  ]
};
