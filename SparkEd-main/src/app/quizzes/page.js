// src/app/quizzes/index.js

'use client';

import {useRouter} from 'next/navigation';
import {useEffect,useState} from 'react';

const Quizzes = () => {
  const router = useRouter();
  const [quizSummary, setQuizSummary] = useState(null);

  useEffect(() => {
    const fetchQuizSummary = async () => {
      try {
        const response = await fetch('/api/userQuizzes');
        if (response.ok) {
          const data = await response.json();
          setQuizSummary(data);
        } else {
          console.error('Failed to fetch quiz summary');
          // Handle error case
        }
      } catch (error) {
        console.error('Error fetching quiz summary:', error);
        // Handle fetch error
      }
    };

    fetchQuizSummary();
  }, []);

  useEffect(() => {
    // Optional: Redirect logic if no quizzes attempted or any other condition
    if (quizSummary && quizSummary.attempted === 0) {
      router.push('/quizzes/categories');
    }
  }, [quizSummary, router]);

  if (!quizSummary) {
    return (
      <div className="w-full h-screen flex flex-col justify-center items-center -mt-20 space-y-6 bg-gray-900">
  <h1 className="font-bold text-4xl text-slate-200">You haven't given any quizzes yet...</h1>
  <a href="quizzes/categories" className="bg-blue-500 text-white px-6 py-2 rounded-full shadow-lg hover:bg-blue-600 transition duration-300">
    <h1 className="font-semibold">Explore Quizzes</h1>
  </a>
</div>
    ); // Add loading state while fetching quiz summary
  }

  // Render quiz summary based on fetched quizSummary
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Quiz Summary</h1>
      <p>Total Quizzes Attempted: {quizSummary.attempted}</p>
      <p>Total Quizzes Taken: {quizSummary.total}</p>
      <div className="grid grid-cols-2 gap-4">
        {quizSummary.userQuizzes.map((quiz, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 ease-in-out"
          >
            <h2 className="text-xl font-bold mb-4">{quiz.category}</h2>
            <p className="text-lg">Total Marks: {quiz.totalMarks}</p>
            {/* Add more details based on your schema */}
          </div>
        ))}
      </div>
      <div className="mt-6">
        <a
          href="/quizzes/categories"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600 transition duration-300 mr-4"
        >
          Take Quiz
        </a>
      </div>
    </div>
  );
};

export default Quizzes;
