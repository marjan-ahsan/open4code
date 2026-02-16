import { Course } from '../../types';
import { FaShieldAlt } from 'react-icons/fa';

export const safetyCourse: Course = {
  id: 'internet-safety',
  title: 'Staying Safe Online',
  description: 'Learn to navigate the internet confidently. This non-technical guide teaches you to spot scams, protect your information, and browse safely.',
  Icon: FaShieldAlt,
  color: '#3B82F6',
  category: 'Digital Literacy',
  difficulty: 'Beginner',
  popularity: 70,
  releaseDate: '2024-07-18',
  modules: [
    {
      title: 'Module 1: Your Digital World',
      lessons: [
        {
          id: 'safety-m1-l1',
          title: 'What is the Internet?',
          duration: '10min',
          content: "Think of the internet as a giant, bustling city. Websites are the buildings—shops, libraries, and offices. Your computer or phone is your car that you use to travel on roads, which are like links. Just like in a real city, most places are safe and fun, but some neighborhoods are sketchy. This course will teach you how to be a smart and safe traveler in this digital city.",
          aids: {
            memoryAids: [
              "Internet = A giant city.",
              "Websites = Buildings.",
              "Your Device = Your car.",
              "Links = Roads."
            ]
          }
        },
        {
          id: 'safety-m1-l2',
          title: 'Your Digital Footprint',
          duration: '15min',
          content: "Every time you visit a website, post on social media, or send an email, you leave behind a 'digital footprint,' like footprints in the sand. This data includes your browsing history, what you've 'liked,' and comments you've made. It's important to remember that these footprints can be very difficult to erase completely. Being mindful of what you share is the first step to staying safe.",
          aids: {
            tips: [
              "The 'Golden Rule' of the internet: Don't post anything online that you wouldn't want the whole world to see.",
              "Regularly review the privacy settings on your social media accounts.",
              "Think twice before sharing personal information like your full address or phone number."
            ]
          }
        },
        {
          id: 'safety-m1-l3',
          title: 'Passwords: Keys to Your Home',
          duration: '20min',
          content: "Your password is the key to your digital home (your email, bank account, etc.). Using a simple password like 'password123' is like leaving your key under the doormat. A strong password should be long and unique. The best way to create one is to make a 'passphrase'—a short, memorable sentence, like 'MyCatEats!BlueSocks24'. It's easy for you to remember but very hard for a computer to guess.",
          aids: {
            mistakes: [
              "Using the same password for multiple websites. If one site gets hacked, all your accounts are at risk!",
              "Using personal information like your birthday or pet's name.",
              "Using short, simple words. Hackers have programs that can guess these in seconds."
            ],
            tips: [
              "A long passphrase is much stronger than a short, complex password.",
              "Use a password manager. It's like a secure vault that creates and remembers all your unique passwords for you. You only have to remember one master password.",
              "Turn on Two-Factor Authentication (2FA) whenever it's offered. This adds a second layer of security, like needing a key and a fingerprint to get in."
            ]
          }
        },
         {
          id: 'safety-m1-l4',
          title: 'Module 1 Quiz',
          duration: '10min',
          content: "Let's check what you've learned about the basics of online safety.",
          quiz: {
            title: "Digital World Basics",
            questions: [
              {
                question: "Which of these is the STRONGEST password?",
                options: ["p@ssW0rd!", "MyDogFluffy", "PurpleMonkeyDishwasher!", "12345678"],
                correctAnswerIndex: 2,
                explanation: "A long passphrase like 'PurpleMonkeyDishwasher!' is much harder for computers to guess than short passwords with substitutions or simple words."
              },
              {
                question: "What is a 'digital footprint'?",
                options: ["The brand of your computer", "A file you download", "The trail of data you leave online", "Your internet speed"],
                correctAnswerIndex: 2,
                explanation: "Your digital footprint is all the data you create and leave behind as you use the internet, including websites you visit, posts you make, and more."
              },
              {
                question: "What is the primary danger of using the same password for multiple websites?",
                options: ["It's hard to remember.", "The websites might crash.", "If one site is hacked, all your accounts are vulnerable.", "It slows down your computer."],
                correctAnswerIndex: 2,
                explanation: "If a hacker steals the password from one website, they will try it on many other popular sites (like your email and bank), giving them access to everything."
              },
              {
                question: "Two-Factor Authentication (2FA) adds a second layer of security by requiring...",
                options: ["Two different passwords.", "A password and something you have, like a code from your phone.", "A security question.", "A longer password."],
                correctAnswerIndex: 1,
                explanation: "2FA combines something you know (your password) with something you have (your phone), making it much harder for a hacker to get in, even if they steal your password."
              },
              {
                question: "What is the best way to manage many unique, strong passwords?",
                options: ["Write them on a sticky note.", "Use a password manager application.", "Use the same password everywhere.", "Email them to yourself."],
                correctAnswerIndex: 1,
                explanation: "A password manager securely stores all your unique passwords in an encrypted vault, so you only have to remember the one master password to access them."
              }
            ]
          }
        }
      ]
    },
    {
      title: 'Module 2: Spotting Scams & Tricks',
      lessons: [
        {
          id: 'safety-m2-l1',
          title: 'What is Phishing?',
          duration: '20min',
          content: "Phishing is a type of scam where criminals try to trick you into giving them sensitive information, like your passwords or credit card numbers. Think of it like a scammer showing up at your door wearing a delivery driver's uniform that looks *almost* perfect. They want you to trust them and let them in. Phishing emails and websites are the same—they look like they're from a real company (like your bank, Netflix, or Amazon) but they're fakes designed to steal your info.",
          aids: {
            notes: [
              "**Red Flag 1: A Sense of Urgency.** Scammers often say 'Your account will be suspended!' or 'Suspicious activity detected!' to make you panic and act without thinking.",
              "**Red Flag 2: Bad Grammar & Spelling.** Real companies usually have professional editors. Obvious mistakes are a big warning sign.",
              "**Red Flag 3: Generic Greetings.** An email that says 'Dear Customer' instead of your actual name might be a scam.",
              "**Red Flag 4: Suspicious Links.** Always hover your mouse over a link before you click it. The preview (usually in the bottom corner of your browser) will show you the real destination. If it looks weird, don't click!"
            ]
          }
        },
        {
          id: 'safety-m2-l2',
          title: 'Anatomy of a Phishing Email',
          duration: '15min',
          content: "Let's break down a typical fake email to see the warning signs in action.",
          codeExample: {
            html: `<div style="font-family: sans-serif; border: 1px solid #ccc; padding: 20px;">
  <p><strong>From:</strong> Netfl1x Support &lt;support@login-user123.com&gt; <span style="color:red;">&lt;-- RED FLAG 1</span></p>
  <p><strong>Subject:</strong> URGENT: Your Account is On Hold <span style="color:red;">&lt;-- RED FLAG 2</span></p>
  <hr>
  <h2 style="color: #E50914;">NETFLIX</h2>
  <h3>Dear Valued Customer, <span style="color:red;">&lt;-- RED FLAG 3</span></h3>
  <p>We have detected unusual activity on your account. For your safety, we have suspended your membership.</p>
  <p>To restore your account, please click the link below and verify your payment details immediately.</p>
  <a href="http://totally-not-a-scam-site.biz/netflix" style="background-color: #E50914; color: white; padding: 10px 20px; text-decoration: none;">Verify My Account Now</a> <span style="color:red;">&lt;-- RED FLAG 4</span>
  <p>If this is not resolved in 24 hours your account will be deleted permanent. <span style="color:red;">&lt;-- RED FLAG 5</span></p>
  <p>Thank you,<br>The Netflix Team</p>
</div>`,
            css: `/* Red Flags Explained:
1. The sender's email address is not from @netflix.com. It's a random, suspicious domain.
2. The subject line creates a sense of urgency to make you panic.
3. It uses a generic greeting, not your real name.
4. If you hovered over this link, it would show a fake web address, not netflix.com.
5. There's a grammar mistake ('deleted permanent'). Professional companies wouldn't make this error. */`
          }
        },
        {
          id: 'safety-m2-l3',
          title: 'Common Online Scams',
          duration: '15min',
          content: "Besides phishing, be on the lookout for other common tricks:",
          aids: {
            notes: [
              "**'You've Won a Prize!' Scam:** If you get an email saying you've won a lottery or a free iPhone, it's almost always a scam. If it sounds too good to be true, it is.",
              "**Fake Tech Support Scam:** A pop-up appears saying your computer has a virus and you need to call a number. This is a trick to get you to pay for fake services or give them remote access to your computer.",
              "**Impersonation Scam:** An email or text, supposedly from a friend, family member, or your boss, asking for money or gift cards urgently. Always verify by calling them on their known phone number before doing anything."
            ],
            tips: [
              "The best thing to do with a suspicious email or text is to delete it. Don't click any links and don't reply.",
              "If you're worried about an account, don't use the link in the email. Go to the company's official website by typing its address into your browser yourself."
            ]
          }
        }
      ]
    },
    {
      title: 'Module 3: Everyday Safe Habits',
      lessons: [
        {
          id: 'safety-m3-l1',
          title: 'Public Wi-Fi: The Crowded Cafe',
          duration: '15min',
          content: "Using free Wi-Fi at a cafe, airport, or hotel is like having a private conversation in a crowded room. You don't know who might be listening. It's fine for general browsing, but you should avoid doing anything sensitive, like logging into your bank account or shopping online with a credit card. Criminals can set up fake Wi-Fi networks or 'eavesdrop' on insecure ones to steal your information.",
          aids: {
            tips: [
              "Assume any public Wi-Fi is not secure.",
              "If you must do something sensitive, it's much safer to use your phone's cellular data (4G/5G).",
              "A VPN (Virtual Private Network) is a tool that creates a secure, private tunnel for your internet traffic, even on public Wi-Fi. It's a great investment for frequent travelers."
            ]
          }
        },
        {
          id: 'safety-m3-l2',
          title: "The Lock Icon (HTTPS)",
          duration: '10min',
          content: "Have you ever noticed the little lock icon next to the website address in your browser? This is very important! It means your connection to that website is secure and encrypted. Think of it as a secret, scrambled language between your 'car' (device) and the 'building' (website). Without the lock, your conversation is out in the open. Always look for the lock before entering any personal information, like a password or credit card number.",
          aids: {
            notes: ["The address for a secure site will start with `https://`. The 'S' stands for 'Secure'!", "If a site does not have the lock and asks for a password, do not enter it."]
          }
        },
        {
          id: 'safety-m3-l3',
          title: 'Keeping Your Software Updated',
          duration: '10min',
          content: "You know those annoying 'Update Available' notifications on your phone or computer? Don't ignore them! Think of software like a house. Over time, people find broken windows or weak locks (security vulnerabilities). Updates are like a handyman coming to fix them. Hackers actively look for devices with old, unfixed software because it's an easy way to break in. Keeping your apps, browser, and operating system updated is one of the easiest and most important things you can do to stay safe.",
           aids: {
            tips: ["Turn on 'Automatic Updates' whenever possible. That way, your devices protect themselves without you having to think about it."]
          }
        },
        {
          id: 'safety-m3-l4',
          title: 'Final Challenge: A Safety Checkup',
          duration: '15min',
          content: "Time to put your knowledge into practice! Your final task is to do a quick safety checkup. 1) Think of one password you use often and make a stronger 'passphrase' version of it. 2) Go to one of your social media accounts (like Facebook or Instagram) and find the privacy settings. Review who can see your posts. 3) The next time you get a marketing email, look for the 'red flags' of phishing, even if you know it's a real company. Practice makes perfect!"
        }
      ]
    }
  ]
};