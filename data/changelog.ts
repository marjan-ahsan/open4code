import { ChangelogEntry } from '../types';

export const CHANGELOG_DATA: ChangelogEntry[] = [
  {
    version: '1.2.0',
    date: '2024-07-28',
    changes: [
      { type: 'Feature', description: 'Added a new "Changelog" page to track platform updates.' },
      { type: 'Improvement', description: 'Restored the full-screen lesson view with a "Back to Learning Path" button for better focus.' },
      { type: 'Fix', description: 'Corrected a syntax issue in the Quiz component that caused parsing errors.' },
    ],
  },
  {
    version: '1.1.0',
    date: '2024-07-26',
    changes: [
      { type: 'Feature', description: 'Implemented robust shuffling for all quiz questions and answers to create a unique experience every time.' },
      { type: 'Improvement', description: 'Significantly expanded the question banks for all existing courses to provide more variety.' },
      { type: 'Fix', description: 'Resolved an issue where the quiz score was not resetting upon restart.' },
    ],
  },
  {
    version: '1.0.0',
    date: '2024-07-24',
    changes: [
      { type: 'Feature', description: 'Initial launch of the Open4Code learning platform.' },
      { type: 'Feature', description: 'Interactive course explorer with Grid and Constellation views.' },
      { type: 'Feature', description: 'Project-based courses for HTML, CSS, JavaScript, and more.' },
      { type: 'Improvement', description: 'Implemented local storage for seamless progress tracking.' },
    ],
  },
];
