
import React, { useState, useEffect, useMemo } from 'react';
import { Quiz, Question } from '../types';
import { FaCheckCircle, FaTimesCircle, FaRedo, FaArrowRight } from 'react-icons/fa';
import ConfirmationModal from './ConfirmationModal';

interface QuizProps {
  quiz: Quiz;
  onComplete: (passed: boolean) => void;
}

function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}


const QuizComponent: React.FC<QuizProps> = ({ quiz, onComplete }) => {
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

  const shuffleQuiz = useMemo(() => () => {
    const newShuffledQuestions = shuffleArray(quiz.questions).map((question: Question) => {
      const correctAnswerText = question.options[question.correctAnswerIndex];
      const newOptions = shuffleArray(question.options);
      const newCorrectAnswerIndex = newOptions.indexOf(correctAnswerText);
      return {
        ...question,
        options: newOptions,
        correctAnswerIndex: newCorrectAnswerIndex,
      };
    });
    setShuffledQuestions(newShuffledQuestions);
  }, [quiz]);

  useEffect(() => {
    shuffleQuiz();
  }, [quiz, shuffleQuiz]);

  if (shuffledQuestions.length === 0) {
    return <div className="text-text-secondary text-sm">Loading quiz...</div>
  }

  const currentQuestion = shuffledQuestions[currentQuestionIndex];
  const isCorrect = selectedAnswerIndex === currentQuestion.correctAnswerIndex;

  const handleAnswerSelect = (index: number) => {
    if (showFeedback) return;
    setSelectedAnswerIndex(index);
    setShowFeedback(true);
    if (index === currentQuestion.correctAnswerIndex) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswerIndex(null);
      setShowFeedback(false);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    shuffleQuiz();
    setCurrentQuestionIndex(0);
    setSelectedAnswerIndex(null);
    setShowFeedback(false);
    setScore(0);
    setIsFinished(false);
  }

  if (isFinished) {
    const percentage = Math.round((score / shuffledQuestions.length) * 100);
    const passed = percentage >= 70;

    return (
      <div className="bg-surface border border-border p-8 rounded-xl text-center animate-fade-in max-w-lg mx-auto">
        <h2 className="font-heading text-2xl font-bold mb-3 text-text-primary">Quiz Results</h2>
        <p className="text-sm text-text-secondary mb-2">Final Score:</p>
        <p className={`text-5xl font-bold mb-4 ${passed ? 'text-emerald-500' : 'text-red-500'}`}>{percentage}%</p>
        <p className="text-sm text-text-secondary mb-8">
          {passed ? "Excellent! You've passed the assessment." : "Not quite there yet. Review the material and try again."}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          {!passed && (
            <button onClick={() => setIsConfirmModalOpen(true)} className="px-6 py-2.5 bg-surface border border-border text-text-primary text-sm font-medium rounded-lg flex items-center justify-center gap-2 hover:border-text-tertiary transition-colors">
              <FaRedo className="text-xs" /> Retake Quiz
            </button>
          )}
          <button onClick={() => onComplete(passed)} className="px-6 py-2.5 bg-primary hover:bg-primary-hover text-white text-sm font-medium rounded-lg flex items-center justify-center gap-2 transition-colors">
            Continue <FaArrowRight className="text-xs" />
          </button>
        </div>
        <ConfirmationModal
          isOpen={isConfirmModalOpen}
          onClose={() => setIsConfirmModalOpen(false)}
          onConfirm={() => {
            handleRestart();
            setIsConfirmModalOpen(false);
          }}
          title="Restart Quiz?"
          message="This will shuffle the questions. Ready?"
          confirmText="Yes, restart"
        />
      </div>
    );
  }

  return (
    <div className="bg-surface border border-border p-6 sm:p-8 rounded-xl animate-fade-in max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-heading text-lg font-bold truncate pr-4 text-text-primary">{quiz.title}</h2>
        <span className="bg-muted text-text-secondary px-2.5 py-1 rounded-md text-[11px] font-medium whitespace-nowrap">{currentQuestionIndex + 1} / {shuffledQuestions.length}</span>
      </div>
      <p className="text-base text-text-primary mb-6 font-medium">{currentQuestion.question}</p>
      <div className="space-y-2.5">
        {currentQuestion.options.map((option, index) => {
          let buttonClass = 'w-full text-left p-4 rounded-lg border text-sm transition-all duration-200 ';
          if (showFeedback) {
            if (index === currentQuestion.correctAnswerIndex) {
              buttonClass += 'bg-emerald-50 dark:bg-emerald-900/15 border-emerald-300 dark:border-emerald-700 text-emerald-700 dark:text-emerald-400';
            } else if (index === selectedAnswerIndex) {
              buttonClass += 'bg-red-50 dark:bg-red-900/15 border-red-300 dark:border-red-700 text-red-700 dark:text-red-400';
            } else {
              buttonClass += 'bg-muted border-border opacity-40 text-text-secondary';
            }
          } else {
            buttonClass += 'bg-surface border-border hover:border-primary/40 text-text-primary cursor-pointer';
          }

          return (
            <button key={index} onClick={() => handleAnswerSelect(index)} disabled={showFeedback} className={buttonClass}>
              {option}
            </button>
          );
        })}
      </div>
      {showFeedback && (
        <div className={`mt-6 p-4 rounded-lg flex items-start gap-3 text-sm ${isCorrect ? 'bg-emerald-50 dark:bg-emerald-900/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/30' : 'bg-red-50 dark:bg-red-900/10 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-800/30'}`}>
          <div className="mt-0.5">
            {isCorrect ? <FaCheckCircle /> : <FaTimesCircle />}
          </div>
          <div>
            <h4 className="font-semibold mb-0.5">{isCorrect ? 'Correct!' : 'Incorrect'}</h4>
            <p className="text-xs leading-relaxed opacity-80">{currentQuestion.explanation}</p>
          </div>
        </div>
      )}
      <div className="mt-6">
        <button onClick={handleNext} disabled={!showFeedback} className="w-full py-2.5 bg-primary hover:bg-primary-hover text-white text-sm font-medium rounded-lg transition-colors disabled:opacity-25 flex items-center justify-center gap-2">
          {currentQuestionIndex < shuffledQuestions.length - 1 ? 'Next Question' : 'Finish Assessment'} <FaArrowRight className="text-xs" />
        </button>
      </div>
    </div>
  );
};

export default QuizComponent;
