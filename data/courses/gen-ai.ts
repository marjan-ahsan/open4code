import { Course } from '../../types';
import { FaBrain } from 'react-icons/fa';

export const genAiCourse: Course = {
  id: 'gen-ai',
  title: 'Intro to Generative AI',
  description: 'Unlock the power of AI. Learn prompt engineering, explore leading models, and understand the future of this transformative technology.',
  Icon: FaBrain,
  color: '#8A54E1',
  category: 'AI',
  tags: ['New'],
  difficulty: 'Beginner',
  popularity: 95,
  releaseDate: '2024-07-20',
  modules: [
    {
      title: 'Module 1: The Art of the Prompt',
      lessons: [
        {
          id: 'gen-ai-m1-l1',
          title: 'What is Generative AI?',
          duration: '15min',
          content: "Generative AI refers to a type of artificial intelligence that can create new and original content, such as text, images, music, and code. Unlike traditional AI that analyzes or acts on existing data, generative AI generates novel data. The technology is powered by complex models, often called Large Language Models (LLMs) for text, which are trained on vast amounts of information from the internet. This training allows them to understand patterns, context, grammar, and even reasoning to a certain degree.",
          aids: {
            notes: [
              "Generative AI creates, while traditional AI analyzes.",
              "LLMs are the foundation for text-based tools like ChatGPT.",
              "The core technology is often a 'transformer architecture', which is exceptionally good at handling sequential data like text."
            ],
            memoryAids: [
              "Think of it as an incredibly advanced autocomplete that can predict not just the next word, but entire paragraphs, essays, or code blocks."
            ]
          }
        },
        {
          id: 'gen-ai-m1-l2',
          title: 'Prompt Engineering 101',
          duration: '20min',
          content: "A prompt is the instruction you give to an AI model. The quality of your prompt directly determines the quality of the output. This is called 'prompt engineering'. The key is to be clear, specific, and provide sufficient context. Don't assume the AI knows what you're thinking. Guide it. A great way to start is by assigning it a role or persona.",
          codeExample: {
            html: `<!-- Bad Prompt -->
<p>Write about dogs.</p>

<!-- Good Prompt -->
<p>
  Act as a veterinarian with 20 years of experience. Write a short, encouraging blog post for new puppy owners. Cover the three most important things they need to do in the first week, including socialization and initial vet visits. The tone should be warm and reassuring.
</p>`
          },
            aids: {
            tips: [
              "**Be Specific:** Instead of 'write a poem', try 'write a 3-stanza haiku about a rainy day in Tokyo'.",
              "**Provide Context:** Give the AI background information it needs to complete the task.",
              "**Use Personas:** 'Act as a...' is one of the most powerful phrases in prompting."
            ]
          }
        },
        {
          id: 'gen-ai-m1-l3',
          title: 'Advanced Prompting Techniques',
          duration: '25min',
          content: "Beyond basic instructions, you can use more structured techniques. 'Few-shot prompting' involves giving the AI a few examples of what you want before asking for the final output. 'Chain-of-thought' prompting encourages the AI to 'think step by step' to solve complex logical problems, resulting in more accurate answers. You can also command the output format, for example, by asking for a response in JSON, a Markdown table, or a numbered list.",
          aids: {
            notes: [
              "**Zero-shot:** Direct instruction with no examples.",
              "**One-shot/Few-shot:** Providing 1 to N examples to guide the output.",
              "**Chain-of-Thought (CoT):** Add 'Let's think step by step' to your prompt for reasoning tasks."
            ],
            mistakes: [
              "Asking a complex question without examples. Give the AI a pattern to follow.",
              "Accepting the first answer. Always be ready to refine your prompt and try again."
            ]
          }
        },
        {
          id: 'gen-ai-m1-l4',
          title: 'Module 1 Challenge',
          duration: '15min',
          content: "Your task is to craft a detailed prompt to generate a business plan outline. The business is a subscription box service for eco-friendly house plants. Your prompt should ask the AI to act as a seasoned entrepreneur and generate an outline that includes sections for Mission Statement, Target Audience, Marketing Strategy, and a 3-tier Pricing Model. The AI should present the final output in Markdown format."
        }
      ]
    },
    {
      title: 'Module 2: A Tour of Major AI Models',
      lessons: [
        {
          id: 'gen-ai-m2-l1',
          title: 'The GPT Family (OpenAI)',
          duration: '20min',
          content: "The GPT (Generative Pre-trained Transformer) series from OpenAI is arguably the most famous family of LLMs. GPT-3 was a breakthrough, demonstrating powerful text generation capabilities but was prone to errors. GPT-4 and subsequent models like GPT-4o represent significant leaps in reasoning, accuracy, and multi-modality (understanding text, images, and audio). They are known for their strong general knowledge and creative capabilities, powering services like ChatGPT. We are still awaiting GPT-5 which promises even more advancements.",
          aids: {
            notes: [
              "**GPT-3:** The model that brought generative AI into the mainstream.",
              "**GPT-4/4o:** More powerful, more accurate, and can interpret images and other media.",
              "**DALL-E:** OpenAI's model for generating images from text prompts."
            ]
          }
        },
        {
          id: 'gen-ai-m2-l2',
          title: 'Claude (Anthropic)',
          duration: '15min',
          content: "Developed by Anthropic, the Claude family of models is a major competitor to GPT. Claude is known for its focus on safety and ethics, built using a technique called 'Constitutional AI' to align its responses with a set of principles. Its key strengths often lie in handling very large amounts of text (a large 'context window'), making it excellent for tasks like summarizing long documents or analyzing entire codebases. Users often find it has a more creative and conversational writing style.",
            aids: {
            tips: [
              "Use Claude when you need to process and discuss large documents or books.",
              "It's a strong choice for creative writing tasks like poetry or dialogue."
            ]
          }
        },
        {
          id: 'gen-ai-m2-l3',
          title: 'Grok (xAI) & DeepSeek',
          duration: '15min',
          content: "The AI landscape is diverse. Grok, from xAI, differentiates itself with real-time access to data from the X (formerly Twitter) platform, giving it up-to-the-minute information. It's also designed with a bit more 'personality'. DeepSeek is a model specifically trained on a massive dataset of code, making it exceptionally good at programming-related tasks, code completion, and debugging. This highlights a trend of specialized models for specific tasks.",
            aids: {
            notes: [
              "**Grok:** Best for questions about current events and trends.",
              "**DeepSeek:** A top choice for developers and coding assistance."
            ]
          }
        },
        {
          id: 'gen-ai-m2-l4',
          title: 'Module 2 Quiz',
          duration: '10min',
          content: "Time to test your knowledge on the different AI models and their unique strengths.",
          quiz: {
            title: "AI Model Strengths",
            questions: [
              { question: "Which model is known for its focus on 'Constitutional AI' and a large context window?", options: ["GPT-4", "Claude", "Grok", "DeepSeek"], correctAnswerIndex: 1, explanation: "Claude, developed by Anthropic, is known for its safety-first approach and ability to handle large documents." },
              { question: "If you needed an AI to help you write and debug complex code, which specialized model would be a great choice?", options: ["Grok", "Claude", "DeepSeek", "GPT-3"], correctAnswerIndex: 2, explanation: "DeepSeek is specifically trained on a vast amount of code, making it excellent for programming tasks." },
              { question: "Which model's key feature is real-time access to information from the X social media platform?", options: ["Grok", "Claude", "GPT-4", "DALL-E"], correctAnswerIndex: 0, explanation: "Grok is designed by xAI to leverage real-time data from X, making it unique for current events." },
              { question: "OpenAI's image generation model is called:", options: ["GPT-4o", "ChatGPT", "DALL-E", "Claude"], correctAnswerIndex: 2, explanation: "DALL-E is OpenAI's well-known model for creating images from text descriptions." },
              { question: "The ability of a model to understand different types of input like text, images, and audio is called:", options: ["Multi-tasking", "Multi-modality", "Deep Learning", "Transformer"], correctAnswerIndex: 1, explanation: "Multi-modality refers to the capability of a model to process and understand information from multiple modalities (e.g., text, image, audio)." }
            ]
          }
        }
      ]
    },
    {
      title: 'Module 3: The Responsible AI User',
      lessons: [
        {
          id: 'gen-ai-m3-l1',
          title: 'Dangers: Hallucinations & Bias',
          duration: '20min',
          content: "While powerful, AI models are not perfect. One of the biggest dangers is 'hallucination,' where the AI confidently states incorrect information as fact. Because it's trained on the internet, it also inherits human biases present in the data, which can lead to prejudiced or stereotypical outputs. It's crucial to treat AI as a creative partner or a knowledgeable assistant, not an infallible oracle. Always fact-check critical information.",
          aids: {
            mistakes: [
              "Trusting AI-generated statistics, dates, or names without verification.",
              "Using AI for medical, legal, or financial advice without consulting a human expert."
            ],
            tips: [
              "Ask the AI for its sources, but be aware that it might hallucinate sources too!",
              "If a response seems too good to be true, it probably is. Question everything."
            ]
          }
        },
        {
          id: 'gen-ai-m3-l2',
          title: 'Ethics: Privacy and Misinformation',
          duration: '15min',
          content: "Using generative AI comes with ethical responsibilities. Never input sensitive personal, financial, or proprietary company data into a public AI tool, as your conversations can be used for training. Furthermore, the ability to generate realistic text and images can be used to create misinformation or 'deepfakes' at an unprecedented scale. Being a responsible user means being aware of these issues and using the technology to build, not to deceive.",
          aids: {
            notes: [
              "**Privacy:** Treat AI chats like public forums.",
              "**Misinformation:** Be critical of AI-generated content you see online.",
              "**Copyright:** The legal landscape around AI-generated content and copyright is still evolving and complex."
            ]
          }
        },
        {
          id: 'gen-ai-m3-l3',
          title: 'Capstone: Your AI Usage Guide',
          duration: '20min',
          content: "For your final project, you will act as a consultant. Your task is to craft a prompt that generates a 'Responsible AI Usage Guide' for a small startup. This guide should be a one-page document for new employees. It must include sections on: 1) What is Generative AI?, 2) Dos and Don'ts (covering privacy and fact-checking), and 3) Examples of good use cases for the company (e.g., marketing copy, code assistance). This will test both your prompting skills and your understanding of responsible AI use."
        }
      ]
    }
  ]
};