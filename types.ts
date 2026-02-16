import { IconType } from 'react-icons';

export interface LearningAids {
  notes?: string[];
  tips?: string[];
  mistakes?: string[];
  memoryAids?: string[];
}

export interface CodeExample {
  html: string;
  css?: string;
  js?: string;
}

export interface Question {
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface Quiz {
  title: string;
  questions: Question[];
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  content: string;
  codeExample?: CodeExample;
  visualDemo?: 'box-model' | 'flexbox' | 'grid';
  aids?: LearningAids;
  quiz?: Quiz;
}

export interface Module {
  title: string;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  Icon: IconType;
  color: string;
  modules: Module[];
  category: string;
  tags?: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  popularity: number; // A score from 0 to 100
  releaseDate: string; // YYYY-MM-DD
}

export interface Review {
  name: string;
  location: string;
  avatar: string;
  review: string;
  stars: number;
}

export interface Feature {
  Icon: IconType;
  title: string;
  description: string;
}

export interface ComparisonFeature {
  feature: string;
  open4code: boolean;
  others: boolean;
  description: string;
}

export interface TechStackItem {
  name: string;
  Icon: IconType;
  color: string;
}

export interface Change {
  type: 'Feature' | 'Improvement' | 'Fix';
  description: string;
}

export interface ChangelogEntry {
  version: string;
  date: string;
  changes: Change[];
}