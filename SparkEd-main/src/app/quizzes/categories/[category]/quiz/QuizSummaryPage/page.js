// src/app/quizzes/QuizSummaryPage.js
'use client'

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const QuizSummaryPage = () => {
  const [userQuizzes, setUserQuizzes] = useState([]);

  useEffect(() => {
    const fetchUserQuizzes = async () => {
      try {
        const response = await axios.get('/api/userQuizzes', {
          withCredentials: true, // Ensure cookies are sent with the request
        });
        setUserQuizzes(response.data);
      } catch (error) {
        console.error('Error fetching user quizzes:', error);
        // Handle error state if needed
      }
    };

    fetchUserQuizzes();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Quiz Summary</h1>
      <div className="grid grid-cols-2 gap-4">
        {userQuizzes.map((quiz, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 ease-in-out"
          >
            <h2 className="text-xl font-bold mb-4">{quiz.category}</h2>
            <p className="text-lg">Questions Attempted: {quiz.attempted} / {quiz.total}</p>
            <div className="w-full bg-gray-200 rounded-lg mt-4">
              <div
                className="bg-blue-500 text-white py-2 px-4 rounded-lg"
                style={{ width: `${(quiz.attempted / quiz.total) * 100}%`, transition: 'width 1s' }}
              >
                {(quiz.attempted / quiz.total) * 100}%
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <a href="/quizzes/categories" className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600 transition duration-300 mr-4">
          Take Quiz
        </a>
      </div>
    </div>
  );
};

export default QuizSummaryPage;
