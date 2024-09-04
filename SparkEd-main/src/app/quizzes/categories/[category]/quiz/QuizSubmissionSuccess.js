'use client'

// src/app/quizzes/categories/[category]/quiz/QuizSubmissionSuccess.js

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const QuizSubmissionSuccess = ({ totalQuestions, attemptedQuestions }) => {
  const percentageAttempted = (attemptedQuestions / totalQuestions) * 100;
  const { category } = useParams();

  const handleDoneClick = () => {
    // Redirect to a new page or route using Next.js Link
    // Replace '/quizzes' with your desired route
    window.location.href = `/quizzes`;
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Quiz Submitted Successfully</h1>
      <div className="mt-4">
        <p className="text-lg">Questions Attempted: {attemptedQuestions} / {totalQuestions}</p>
        <div className="w-full bg-gray-200 rounded-lg mt-4">
          <div
            className="bg-blue-500 text-white py-2 px-4 rounded-lg"
            style={{ width: `${percentageAttempted}%`, transition: 'width 1s' }}
          >
            {percentageAttempted.toFixed(2)}%
          </div>
        </div>
      </div>
      <div className="mt-6">
        <button
          onClick={handleDoneClick}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600 transition duration-300 mr-4"
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default QuizSubmissionSuccess;
