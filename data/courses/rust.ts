
import { Course } from '../../types';
import { SiRust } from 'react-icons/si';
import { deploymentModule } from './shared/deployment';

export const rustCourse: Course = {
  id: 'rust',
  title: 'Rust Systems Programming',
  description: 'Master the language of modern systems. Safe memory management, zero-cost abstractions, and fearless concurrency for production-grade software.',
  Icon: SiRust,
  color: '#DEA584', 
  category: 'System Programming',
  tags: ['Hot', 'Advanced', 'Production'],
  difficulty: 'Advanced',
  popularity: 96,
  releaseDate: '2024-09-15',
  modules: [
    {
      title: 'Module 1: Getting Started with Cargo',
      lessons: [
        {
          id: 'rust-1',
          title: 'Why Rust?',
          duration: '15min',
          content: "Rust solves a problem that has plagued software for decades: memory safety without the performance cost of a garbage collector. It enforces safe memory access at compile time. If it compiles, it's likely memory-safe. It powers parts of Linux, Windows, and the core of many modern web tools.",
          aids: {
            notes: ["Memory safety: No null pointer dereferences, no dangling pointers, no data races.", "Zero-cost abstractions: Higher-level code compiles down to the same assembly as low-level code."]
          }
        },
        {
          id: 'rust-2',
          title: 'Cargo & Hello World',
          duration: '15min',
          content: "Cargo is Rust's build system and package manager. It handles building your code, downloading libraries (crates), and building those libraries. A basic Rust program uses `fn main() {}` as the entry point. `println!` is a macro (indicated by `!`), not a function.",
          codeExample: {
            html: `<!-- Terminal -->`,
            css: `
cargo new hello_cargo
cd hello_cargo
cargo run
`,
            js: `fn main() {
    println!("Hello, world!");
}`
          }
        },
        {
          id: 'rust-3',
          title: 'Variables & Mutability',
          duration: '20min',
          content: "In Rust, variables are immutable by default. This is a safety feature. To make a variable changeable, you must explicitly use the `mut` keyword. Rust is also statically typed, but it has powerful type inference, so you rarely need to annotate types explicitly unless necessary.",
          codeExample: {
            html: ``,
            css: `
let x = 5;
// x = 6; // Error! Immutable variable.

let mut y = 10;
y = 20; // OK! Mutable variable.

const MAX_POINTS: u32 = 100_000; // Constants always need types.`,
            js: ``
          }
        }
      ]
    },
    {
      title: 'Module 2: Ownership - The Heart of Rust',
      lessons: [
        {
          id: 'rust-4',
          title: 'What is Ownership?',
          duration: '30min',
          content: "Ownership is Rust's most unique feature. 1. Each value in Rust has a variable that's called its 'owner'. 2. There can only be one owner at a time. 3. When the owner goes out of scope, the value will be dropped (freed). This replaces garbage collection and manual memory management (`malloc`/`free`).",
          aids: {
            memoryAids: ["One Owner.", "Scope ends = Drop."]
          }
        },
        {
          id: 'rust-5',
          title: 'Borrowing & References',
          duration: '25min',
          content: "You don't always want to transfer ownership. Sometimes you want to access data without taking responsibility for it. This is 'borrowing'. You create a reference using `&`. You can have many immutable references (`&T`) OR exactly one mutable reference (`&mut T`), but not both at the same time. This prevents data races at compile time.",
          codeExample: {
            html: ``,
            css: `
fn main() {
    let s1 = String::from("hello");
    let len = calculate_length(&s1); // &s1 creates a reference (borrow)
    println!("The length of '{}' is {}.", s1, len);
}

fn calculate_length(s: &String) -> usize {
    s.len()
} // s goes out of scope, but since it doesn't own the string, nothing is dropped.`,
            js: ``
          },
          quiz: {
            title: "Ownership Quiz",
            questions: [
              { question: "Can you have two mutable references to the same data at the same time?", options: ["Yes, always", "No, never", "Only in unsafe blocks", "Only if they are in different threads"], correctAnswerIndex: 1, explanation: "Rust forbids multiple mutable references (aliasing + mutation) to prevent data races." },
              { question: "What happens when a variable owning heap data goes out of scope?", options: ["Nothing", "Garbage collector marks it", "The data is dropped (freed) immediately", "It leaks memory"], correctAnswerIndex: 2, explanation: "Rust automatically calls `drop` to clean up the memory." }
            ]
          }
        }
      ]
    },
    {
      title: 'Module 3: Structures & Enums',
      lessons: [
        {
          id: 'rust-6',
          title: 'Structs',
          duration: '20min',
          content: "Structs let you name and package related data together. Tuple structs give names to tuples. You implement methods on structs using `impl` blocks.",
          codeExample: {
            html: ``,
            css: `
struct User {
    username: String,
    email: String,
    active: bool,
}

impl User {
    fn new(username: String, email: String) -> User {
        User { username, email, active: true }
    }
}`,
            js: ``
          }
        },
        {
          id: 'rust-7',
          title: 'Enums & Pattern Matching',
          duration: '30min',
          content: "Enums in Rust are powerful. Unlike C enums, Rust enums can hold data. `Option<T>` is a standard enum that replaces `null`. The `match` control flow construct allows you to compare a value against a series of patterns and execute code based on which pattern matches. It is exhaustive, meaning you must handle every possible case.",
          codeExample: {
            html: ``,
            css: `
enum Message {
    Quit,
    Move { x: i32, y: i32 },
    Write(String),
}

fn process(msg: Message) {
    match msg {
        Message::Quit => println!("Quitting"),
        Message::Move { x, y } => println!("Move to {}, {}", x, y),
        Message::Write(text) => println!("Message: {}", text),
    }
}`,
            js: ``
          }
        }
      ]
    },
    {
      title: 'Module 4: Error Handling',
      lessons: [
        {
          id: 'rust-8',
          title: 'Result & Option',
          duration: '25min',
          content: "Rust doesn't use exceptions. Instead, it uses the `Result<T, E>` enum for recoverable errors and `Option<T>` for values that might be missing. `Result` has `Ok(T)` and `Err(E)`. `Option` has `Some(T)` and `None`. You handle these explicitly, often with `match` or the `?` operator.",
          codeExample: {
            html: ``,
            css: `
use std::fs::File;
use std::io::Read;

fn read_username() -> Result<String, std::io::Error> {
    let mut s = String::new();
    // The '?' operator returns the error early if File::open fails
    File::open("hello.txt")?.read_to_string(&mut s)?;
    Ok(s)
}`,
            js: ``
          }
        }
      ]
    },
    {
      title: 'Module 5: Advanced Concepts',
      lessons: [
        {
          id: 'rust-9',
          title: 'Traits & Generics',
          duration: '30min',
          content: "Traits are like interfaces in other languages. They define shared behavior. Generics allow you to write flexible code that works with multiple types. Bounding generics with traits (`T: Display`) ensures the types used implement specific behaviors.",
          codeExample: {
             html: ``,
             css: `
pub trait Summary {
    fn summarize(&self) -> String;
}

pub fn notify<T: Summary>(item: &T) {
    println!("Breaking news! {}", item.summarize());
}`,
             js: ``
          }
        },
        {
          id: 'rust-10',
          title: 'Smart Pointers',
          duration: '25min',
          content: "Smart pointers are data structures that act like a pointer but have additional metadata and capabilities. `Box<T>` allocates data on the heap. `Rc<T>` enables multiple ownership via reference counting. `RefCell<T>` enforces borrowing rules at runtime instead of compile time (interior mutability).",
        }
      ]
    },
    {
      title: 'Module 6: Fearless Concurrency',
      lessons: [
        {
          id: 'rust-11',
          title: 'Threads & Move',
          duration: '25min',
          content: "Rust makes concurrency safe. You spawn threads with `thread::spawn`. The type system ensures you don't accidentally share memory unsafely. The `move` closure allows a thread to take ownership of values from the environment.",
        },
        {
          id: 'rust-12',
          title: 'Message Passing & Shared State',
          duration: '30min',
          content: "Rust encourages 'Do not communicate by sharing memory; share memory by communicating.' You use Channels (`mpsc`) to send data between threads. If you must share state, you use `Mutex` (Mutual Exclusion) and `Arc` (Atomic Reference Counting) to do it safely.",
          codeExample: {
            html: ``,
            css: `
use std::sync::{Arc, Mutex};
use std::thread;

fn main() {
    let counter = Arc::new(Mutex::new(0));
    let mut handles = vec![];

    for _ in 0..10 {
        let counter = Arc::clone(&counter);
        let handle = thread::spawn(move || {
            let mut num = counter.lock().unwrap();
            *num += 1;
        });
        handles.push(handle);
    }
    // Wait for all threads
    for handle in handles { handle.join().unwrap(); }
}`,
            js: ``
          }
        }
      ]
    },
    {
      title: 'Module 7: Capstone Project',
      lessons: [
        {
          id: 'rust-capstone',
          title: 'Project: Build a grep Clone',
          duration: '120min',
          content: "Build a real-world command line tool called `minigrep`. You will read command line arguments, read files, search for a string within the file text, and print matching lines. You will handle errors gracefully, use environment variables for case-insensitive search, and write tests. This covers Structs, Vectors, Strings, File I/O, Error Handling, Lifetimes, and Iterators."
        }
      ]
    },
    deploymentModule,
  ]
};
