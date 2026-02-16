import { Course } from '../../types';
import { SiGit } from 'react-icons/si';

export const gitCourse: Course = {
  id: 'git',
  title: 'Git & GitHub Essentials',
  description: 'Master version control with Git and collaborate effectively using GitHub. From your first commit to your first pull request, this course covers it all.',
  Icon: SiGit,
  color: '#F05033',
  category: 'Developer Essentials',
  tags: ['New', 'Essential'],
  difficulty: 'Beginner',
  popularity: 92,
  releaseDate: '2024-07-29',
  modules: [
    {
      title: 'Module 1: First Steps with Git',
      lessons: [
        {
          id: 'git-m1-l1',
          title: 'What is Version Control?',
          duration: '10min',
          content: "Version Control is like a 'save' button for your entire project, but with superpowers. It tracks every change you make to your files over time. This means you can recall specific versions later, compare changes, and even revert to previous states if you make a mistake. It's essential for any project, big or small, and is the foundation of modern software development collaboration.",
          aids: {
            notes: [
              "It's a time machine for your code.",
              "It prevents data loss and makes it easy to undo errors.",
              "It's the key to working effectively in a team.",
            ],
            memoryAids: [
              "Think of it like saving your progress in a video game at different checkpoints. You can always go back to a previous checkpoint if you mess up."
            ]
          }
        },
        {
          id: 'git-m1-l2',
          title: 'Installing Git',
          duration: '15min',
          content: "To get started, you need to install Git on your computer. It's a command-line tool, but don't worry, we'll walk through the essential commands. The installation process is straightforward for all major operating systems. Visit the official Git website to download the installer for your system. After installation, you can open your terminal (or Command Prompt/Git Bash on Windows) and run `git --version` to confirm it's installed correctly. Then, introduce yourself to Git with two important configuration commands.",
          codeExample: {
            html: `<!-- Open your terminal and run these commands -->`,
            css: `/* Check installation */
git --version

/* Configure your name and email. This is important! */
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"`,
            js: `// Why is this configuration important?
// Every commit you make is stamped with this information.
// It's how collaborators know who made which changes.`
          }
        },
        {
          id: 'git-m1-l3',
          title: 'Your First Repository',
          duration: '15min',
          content: "A 'repository' (or 'repo') is a project that's being tracked by Git. It's essentially a folder with all your project files, plus a hidden subfolder called `.git`. This `.git` folder is the brain of the repository; it's where Git stores all the history and tracking information. To start tracking a project, you navigate to your project's main folder in the terminal and run the `git init` command. This creates the `.git` folder and officially turns your project into a Git repository.",
          codeExample: {
            html: `<!-- In your terminal -->`,
            css: `
# 1. Create a new folder for your project
mkdir my-first-repo

# 2. Navigate into that folder
cd my-first-repo

# 3. Initialize it as a Git repository
git init`
          }
        },
        {
          id: 'git-m1-l4',
          title: 'The Three Stages: Add & Commit',
          duration: '20min',
          content: "Git thinks about your files in three stages. 1) The **Working Directory**: Your actual project folder where you edit files. 2) The **Staging Area**: An intermediate area where you list which changes you want to include in your next 'save point'. 3) The **Repository**: Where Git permanently stores your 'save points' (called commits). The basic workflow is: make changes, add them to the staging area with `git add`, and then commit them to the repository with `git commit`.",
          aids: {
            tips: [
              "`git add .` is a shortcut to stage all modified files in the current directory.",
              "Write clear, concise commit messages. It's a message to your future self and your team explaining *why* you made the change."
            ]
          },
          codeExample: {
            html: `<!-- After running 'git init' -->`,
            css: `
# 1. Create a new file
echo "Hello, Git!" > readme.md

# 2. Check the status. Git sees the new, untracked file.
git status

# 3. Add the file to the staging area
git add readme.md

# 4. Check the status again. The file is now staged.
git status

# 5. Commit the staged changes to the repository with a message
git commit -m "Initial commit: Add readme file"`
          }
        },
        {
          id: 'git-m1-l5',
          title: 'Viewing History',
          duration: '10min',
          content: "Once you've made a few commits, you can view the project's history using the `git log` command. This will show you a list of all the commits, each with its unique ID (a long string of characters called a hash), the author, date, and the commit message you wrote. This log is the core of your version control history, allowing you to see exactly how your project has evolved.",
          quiz: {
            title: "Git Basics Quiz",
            questions: [
              { question: "What command initializes a new Git repository?", options: ["`git start`", "`git new`", "`git init`", "`git create`"], correctAnswerIndex: 2, explanation: "`git init` is the command to create a new, empty Git repository or to reinitialize an existing one." },
              { question: "Which command moves changes from the working directory to the staging area?", options: ["`git commit`", "`git add`", "`git push`", "`git stage`"], correctAnswerIndex: 1, explanation: "`git add` is used to stage changes, preparing them for the next commit." },
              { question: "What is a 'commit' in Git?", options: ["A file that has been changed", "A connection to a remote server", "A 'save point' or snapshot of your project's state", "A list of changes"], correctAnswerIndex: 2, explanation: "A commit is a snapshot of your staged changes at a specific point in time, stored permanently in the repository's history." }
            ]
          }
        }
      ]
    },
    {
      title: 'Module 2: Branching & Merging',
      lessons: [
        {
          id: 'git-m2-l1',
          title: 'Branching for Parallel Work',
          duration: '15min',
          content: "Imagine your project is a tree trunk. The main line of development is called the `main` branch. A 'branch' is essentially a copy of your project at a certain point in time, allowing you to work on a new feature or a bug fix in isolation without affecting the stable `main` branch. This is one of Git's most powerful features, allowing teams to work on multiple things in parallel without getting in each other's way.",
          aids: {
            tips: ["It's a best practice to create a new branch for every new feature, bug fix, or experiment."]
          }
        },
        {
          id: 'git-m2-l2',
          title: 'Creating & Switching Branches',
          duration: '15min',
          content: "You can create a new branch with `git branch <branch-name>`. To start working on that branch, you need to switch to it using `git switch <branch-name>` (the modern command) or `git checkout <branch-name>` (the older, more common command). A handy shortcut, `git switch -c <branch-name>`, creates and switches to the new branch in a single command.",
          codeExample: {
            html: `<!-- Assuming you are on the 'main' branch -->`,
            css: `
# Create a new branch called 'new-feature'
git branch new-feature

# Switch to the new branch to start working on it
git switch new-feature

# --- OR ---

# A shortcut to create and switch in one command
git switch -c another-feature`
          }
        },
        {
          id: 'git-m2-l3',
          title: 'Merging Changes',
          duration: '20min',
          content: "Once you've finished your work on a feature branch and tested it, you'll want to incorporate those changes back into your `main` branch. This process is called 'merging'. First, you switch back to the branch you want to merge *into* (e.g., `main`), and then you run the `git merge <branch-name>` command with the name of the branch you want to merge.",
          codeExample: {
            html: `<!-- You've finished work on 'new-feature' and made commits -->`,
            css: `
# 1. Switch back to the main branch
git switch main

# 2. Merge the 'new-feature' branch into 'main'
git merge new-feature

# 3. (Optional) Delete the feature branch now that it's merged
git branch -d new-feature`
          }
        },
        {
          id: 'git-m2-l4',
          title: 'Handling Merge Conflicts',
          duration: '15min',
          content: "A merge conflict happens when you try to merge two branches that have competing changes—for example, if you and another developer edited the exact same line in a file. Git will pause the merge and mark the file as conflicted. It's not an error! Git is just asking you, the human, to decide which version to keep. You open the file, manually edit it to resolve the conflict, save it, and then `git add` and `git commit` the resolved file to finalize the merge.",
          aids: {
            mistakes: ["Panicking when you see a merge conflict. It's a normal part of working with Git. Just follow the steps to resolve it."]
          }
        },
      ]
    },
    {
      title: 'Module 3: Collaborating with GitHub',
      lessons: [
        {
          id: 'git-m3-l1',
          title: 'Git vs. GitHub',
          duration: '10min',
          content: "This is a crucial distinction. **Git** is the version control tool that runs on your computer. **GitHub** is a web-based service that hosts Git repositories. GitHub provides a central place to store your code, collaborate with others, track issues, and review code changes through 'Pull Requests'. You use Git on your machine to manage history, and GitHub to share that history with others.",
          aids: {
            memoryAids: ["Git is the tool, GitHub is the place. Like Word is the tool, and Google Docs is the place to share and collaborate on documents."]
          }
        },
        {
          id: 'git-m3-l2',
          title: 'Setting Up a Remote Repository',
          duration: '15min',
          content: "First, create a free account on GitHub.com. Then, you can create a new repository directly on the website. This will be your 'remote' repository—the central source of truth for your project. Once created, GitHub will give you a unique URL for your repository (ending in `.git`). This URL is what you'll use to connect your local repository to the one on GitHub.",
          codeExample: {
            html: `<!-- After creating a new repo on GitHub... -->`,
            css: `
# GitHub will give you these commands. Let's break them down.
# This command connects your local repo to the remote one.
# 'origin' is the standard nickname for your remote URL.
git remote add origin https://github.com/your-username/your-repo.git

# This renames your local default branch to 'main', a modern standard.
git branch -m main

# This pushes your local 'main' branch to the remote 'origin'.
# The '-u' flag sets it as the default, so next time you can just 'git push'.
git push -u origin main`
          }
        },
        {
          id: 'git-m3-l3',
          title: 'Pushing & Pulling Changes',
          duration: '20min',
          content: "`git push` is the command you use to send your committed changes from your local repository up to the remote repository on GitHub. `git pull` is the opposite: it fetches changes from the remote repository (that maybe a teammate pushed) and merges them into your local repository. This push/pull workflow is the heartbeat of team collaboration.",
          aids: {
            tips: ["Always `git pull` before you start new work to make sure you have the latest version of the project."]
          }
        },
        {
          id: 'git-m3-l4',
          title: 'The GitHub Flow: Pull Requests',
          duration: '25min',
          content: "A Pull Request (PR) is a formal way to propose changes on GitHub. The standard workflow is: 1) Create a new branch locally. 2) Make your changes and commit them. 3) Push your branch to GitHub. 4) On the GitHub website, open a Pull Request to merge your feature branch into the `main` branch. This gives your teammates a chance to review your code, leave comments, and approve the changes before they are merged. It's the core of professional collaboration.",
        },
        {
          id: 'git-m3-l5',
          title: 'Cloning Existing Repositories',
          duration: '10min',
          content: "If you want to contribute to a project that already exists on GitHub, you don't use `git init`. Instead, you 'clone' it. The `git clone <repository-url>` command downloads a full copy of the remote repository to your computer, including all its history, and automatically sets up the connection to the remote `origin`. This is how you'll start working on most existing projects.",
        }
      ]
    },
    {
      title: 'Module 4: Essential Everyday Commands',
      lessons: [
        {
          id: 'git-m4-l1',
          title: 'Ignoring Files with .gitignore',
          duration: '15min',
          content: "Some files in your project should not be tracked by Git. These include secret keys (like API keys), large dependency folders (like `node_modules`), and system-specific files. You can tell Git to ignore these files by creating a file in your project's root directory named `.gitignore`. Each line in this file is a pattern for a file or folder to ignore.",
          codeExample: {
            html: `<!-- Example .gitignore file -->`,
            css: `
# Ignore the node_modules directory
node_modules/

# Ignore a file with secret credentials
.env

# Ignore system files from macOS and Windows
.DS_Store
Thumbs.db

# Ignore log files
*.log`
          }
        },
        {
          id: 'git-m4-l2',
          title: 'Undoing Things',
          duration: '20min',
          content: "Made a mistake? Git has you covered. `git restore <file>` will discard changes in your working directory. `git reset <commit-hash>` can be used to unstage changes or even move your branch pointer back in time (use with caution!). `git revert <commit-hash>` is a safer way to undo a commit; it creates a *new* commit that is the inverse of the specified commit. This is better for shared history because it doesn't erase the past.",
        },
        {
          id: 'git-m4-l3',
          title: 'Capstone: Your First Contribution',
          duration: '30min',
          content: "Let's put it all together. 1) Create a new repository on GitHub. 2) Clone it to your local machine. 3) Create a new branch called `add-introduction`. 4) In that branch, add a `PROFILE.md` file and write a short bio about yourself. 5) Stage and commit your changes. 6) Push the `add-introduction` branch to GitHub. 7) Open a Pull Request to merge your new branch into `main`. 8) Merge the Pull Request on the GitHub website. Congratulations, you've completed the full developer workflow!"
        }
      ]
    }
  ]
};
