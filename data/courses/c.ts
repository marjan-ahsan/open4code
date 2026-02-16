
import { Course } from '../../types';
import { SiC } from 'react-icons/si';
import { deploymentModule } from './shared/deployment';

export const cCourse: Course = {
  id: 'c-lang',
  title: 'C Programming Mastery',
  description: 'Master the "Mother of all Languages". Build a rock-solid foundation in logic, memory management, and high-performance computing.',
  Icon: SiC,
  color: '#A8B9CC',
  category: 'System Programming',
  tags: ['Essential', 'Foundational'],
  difficulty: 'Beginner',
  popularity: 94,
  releaseDate: '2024-08-01',
  modules: [
    {
      title: 'Module 1: The Foundation',
      lessons: [
        {
          id: 'c-m1-l1',
          title: 'Why Learn C?',
          duration: '10min',
          content: "C is often called the 'Mother of all Languages' because most modern languages (Java, Python, C++, JavaScript) were either built using C or borrowed its syntax. Learning C gives you an 'under the hood' look at how computers actually work. It's fast, powerful, and the standard for operating systems like Windows and Linux.",
          aids: {
            notes: [
              "C is a procedural language (step-by-step instructions).",
              "It is compiled, meaning a program called a 'compiler' translates your code into machine language before it runs.",
              "Efficiency is C's middle name."
            ]
          }
        },
        {
          id: 'c-m1-l2',
          title: 'Hello World & Structure',
          duration: '15min',
          content: "Every C program follows a specific structure. You start by including a header file like `stdio.h` (Standard Input Output) which contains the tools to print text. The 'Main' function is the entry point—where the computer starts reading your code. Every line of code inside the function must end with a semicolon (`;`).",
          codeExample: {
            html: `<!-- The Basic C Structure -->`,
            css: `
#include <stdio.h> // The Toolbox

int main() {
    // printf is used to output text
    printf("Hello, World!\\n"); 
    
    return 0; // Signals the program finished successfully
}`,
            js: `// Analogy: 
// #include is like bringing a toolkit to a job.
// int main() is like the "Start" button on a machine.`
          },
          aids: {
            mistakes: ["Forgetting the semicolon (`;`) at the end of the line. This is the #1 error for beginners!"]
          }
        },
        {
          id: 'c-m1-l3',
          title: 'Variables & Data Types',
          duration: '20min',
          content: "In C, you must tell the computer exactly what kind of data you are storing. This makes the program more efficient. Common types include `int` for whole numbers, `float` for decimals, and `char` for single characters. We use 'Format Specifiers' like `%d` or `%f` to tell the `printf` function how to display these values.",
          codeExample: {
            html: ``,
            css: `
int age = 25;        // Integer
float price = 19.99; // Floating point (Decimal)
char grade = 'A';    // Single Character

printf("Age: %d\\n", age);
printf("Price: %.2f\\n", price); // .2 means 2 decimal places
printf("Grade: %c\\n", grade);`,
            js: ``
          }
        }
      ]
    },
    {
      title: 'Module 2: Decisions & Logic',
      lessons: [
        {
          id: 'c-m2-l1',
          title: 'If, Else & Logic',
          duration: '15min',
          content: "Programs need to make choices. The `if` statement checks a condition. If it's true, it runs a block of code. If not, the `else` block runs. We use symbols like `==` (equal to), `!=` (not equal), and `&&` (AND) to build our logic.",
          codeExample: {
            html: ``,
            css: `
int score = 85;

if (score >= 90) {
    printf("Expert!\\n");
} else if (score >= 70) {
    printf("Well Done!\\n");
} else {
    printf("Keep practicing.\\n");
}`,
            js: ``
          }
        },
        {
          id: 'c-m2-l2',
          title: 'The Switch Statement',
          duration: '15min',
          content: "When you have many specific options (like a menu), a `switch` statement is cleaner than many `if` statements. It checks a single variable against several 'cases'. Don't forget the `break` command, otherwise, it will 'fall through' to the next case!",
          codeExample: {
            html: ``,
            css: `
int day = 3;

switch(day) {
    case 1: printf("Monday"); break;
    case 2: printf("Tuesday"); break;
    case 3: printf("Wednesday"); break;
    default: printf("Invalid day");
}`,
            js: ``
          },
          quiz: {
            title: "Logic Quiz",
            questions: [
              { question: "Which symbol checks for equality in C?", options: ["=", "==", "===", "is"], correctAnswerIndex: 1, explanation: "In C, '=' is for assignment, and '==' is for comparison." },
              { question: "What happens if you forget 'break' in a switch case?", options: ["Error", "Program stops", "It continues to the next case", "It repeats the current case"], correctAnswerIndex: 2, explanation: "This is called 'fall-through'. The computer will execute the next case's code until it hits a break or the end." }
            ]
          }
        }
      ]
    },
    {
      title: 'Module 3: Loops (Doing it Again)',
      lessons: [
        {
          id: 'c-m3-l1',
          title: 'While Loops',
          duration: '15min',
          content: "A `while` loop repeats a block of code as long as a condition remains true. It's like saying: 'While there is water in the bucket, keep pouring.'",
          codeExample: {
            html: ``,
            css: `
int count = 1;
while (count <= 5) {
    printf("Counting: %d\\n", count);
    count++; // Increment count by 1
}`,
            js: ``
          }
        },
        {
          id: 'c-m3-l2',
          title: 'For Loops',
          duration: '20min',
          content: "The `for` loop is the most common loop. It bundles the initialization, the condition, and the update (increment) into one single line. It's perfect when you know exactly how many times you want to repeat something.",
          codeExample: {
            html: ``,
            css: `
// (Start; Condition; Change)
for (int i = 0; i < 10; i++) {
    printf("%d ", i);
}`,
            js: ``
          }
        }
      ]
    },
    {
      title: 'Module 4: Functions',
      lessons: [
        {
          id: 'c-m4-l1',
          title: 'Creating Reusable Code',
          duration: '20min',
          content: "Functions let you group code into a named package that you can use over and over. You define the 'Return Type' (what data it gives back), the 'Name', and the 'Parameters' (what data it needs to work).",
          codeExample: {
            html: ``,
            css: `
// Definition
int addNumbers(int a, int b) {
    return a + b;
}

int main() {
    int result = addNumbers(5, 10);
    printf("Sum is %d", result);
    return 0;
}`,
            js: ``
          }
        }
      ]
    },
    {
      title: 'Module 5: Arrays & Strings',
      lessons: [
        {
          id: 'c-m5-l1',
          title: 'Working with Lists',
          duration: '20min',
          content: "An array is a collection of items of the same type stored in a row. Think of it like a row of lockers. Each locker has an index (a number), starting at 0.",
          codeExample: {
            html: ``,
            css: `
int grades[5] = {90, 85, 77, 92, 88};
printf("First grade: %d", grades[0]); // Output: 90`,
            js: ``
          }
        },
        {
          id: 'c-m5-l2',
          title: 'Handling Text (Strings)',
          duration: '15min',
          content: "In C, there is no 'String' type. Instead, a string is just an array of characters (`char`). Strings always end with a special hidden character called the 'Null Terminator' (`\\0`), which tells the computer the text is over.",
          codeExample: {
            html: ``,
            css: `
char name[] = "Open4Code";
printf("Hello, %s", name);`,
            js: ``
          }
        }
      ]
    },
    {
      title: 'Module 6: Pointers (The "Scary" Part Made Easy)',
      lessons: [
        {
          id: 'c-m6-l1',
          title: 'Addresses & Pointers',
          duration: '25min',
          content: "Every variable is stored in a 'house' (memory address) in the computer. A **Pointer** is just a variable that stores the 'address' of another house. Analogy: If a variable is the mail, the pointer is the address written on the envelope.",
          codeExample: {
            html: ``,
            css: `
int number = 42;
int *ptr = &number; // ptr now holds the address of 'number'

printf("Value: %d\\n", number);
printf("Address: %p\\n", &number);
printf("Value via Pointer: %d\\n", *ptr); // * is "dereferencing"`,
            js: ``
          },
          aids: {
            tips: [
              "& means 'Address of'.",
              "* means 'Value at address' when used with a pointer variable."
            ],
            memoryAids: ["Pointers 'point' to where the data lives."]
          }
        }
      ]
    },
    {
      title: 'Module 7: Structs & Memory',
      lessons: [
        {
          id: 'c-m7-l1',
          title: 'Defining Your Own Types',
          duration: '20min',
          content: "A `struct` (Structure) allows you to group different types of data together. For example, a 'Student' struct might include an `int` for their ID and a `float` for their GPA.",
          codeExample: {
            html: ``,
            css: `
struct Student {
    int id;
    float gpa;
};

struct Student s1 = {101, 3.8};
printf("Student %d has GPA %.1f", s1.id, s1.gpa);`,
            js: ``
          }
        }
      ]
    },
    {
      title: 'Module 8: Capstone Project',
      lessons: [
        {
          id: 'c-capstone',
          title: 'Project: Simple ATM Simulator',
          duration: '120min',
          content: "For your final project, you'll build a command-line ATM simulator. It should use a `while` loop to show a menu, `switch` to handle choices, and variables to track the user's balance. You will implement features like: Checking Balance, Depositing Money, and Withdrawing Money (with a check to see if they have enough!)."
        }
      ]
    },
    deploymentModule,
  ]
};
