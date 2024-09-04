'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';
import * as faceapi from 'face-api.js';
import QuizSubmissionSuccess from './QuizSubmissionSuccess'; // Import the success component

const QuizPage = () => {
  const { category } = useParams();
  const [quizzes, setQuizzes] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [totalMarks, setTotalMarks] = useState(0);
  const [attemptedQuestions, setAttemptedQuestions] = useState(0);

  // Webcam state and refs
  const [webcamStream, setWebcamStream] = useState(null);
  const videoRef = useRef(null);

  useEffect(() => {
    if (category) {
      const fetchData = async () => {
        try {
          const response = await axios.get(`https://quizapi.io/api/v1/questions?category=${category}`, {
            headers: {
              'X-Api-Key': 'WbLdoyTsmLxP51A1UIUCfKYyQqf5ldVt0FiYA7KO', // Replace with your actual API key
            },
          });

          setQuizzes(response.data);
        } catch (error) {
          console.error('Error fetching quizzes:', error);
          // Handle error state if needed
        }
      };

      fetchData();
    }
  }, [category]);

  useEffect(() => {
    const startWebcam = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        setWebcamStream(stream);
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }

        await faceapi.nets.tinyFaceDetector.loadFromUri('/models');
        await faceapi.nets.faceLandmark68Net.loadFromUri('/models');
        await faceapi.nets.faceRecognitionNet.loadFromUri('/models');

        setInterval(async () => {
          if (videoRef.current) {
            const detections = await faceapi.detectAllFaces(
              videoRef.current,
              new faceapi.TinyFaceDetectorOptions()
            ).withFaceLandmarks().withFaceDescriptors();

            console.log('Face detections:', detections);
            // Implement logic to handle multiple faces or no face detected
          }
        }, 1000);
      } catch (error) {
        console.error('Error accessing webcam:', error);
        // Handle webcam access error
      }
    };

    startWebcam();

    // Clean up webcam stream on component unmount
    return () => {
      if (webcamStream) {
        webcamStream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const handleAnswerChange = (quizId, answerKey) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [quizId]: answerKey,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let marks = 0;
    let attempted = 0;
    quizzes.forEach(quiz => {
      if (selectedAnswers[quiz.id] !== undefined) {
        attempted++;
        if (selectedAnswers[quiz.id] === quiz.correct_answer) {
          marks += 2;
        }
      }
    });
    setTotalMarks(marks);
    setAttemptedQuestions(attempted);
    setQuizSubmitted(true);

    // Turn off the webcam when the quiz is submitted
    if (webcamStream) {
      webcamStream.getTracks().forEach(track => track.stop());
    }

    const quizResultsData = {
      category,
      totalMarks,
      answers: selectedAnswers,
    };

    try {
      const response = await axios.post('/api/submit-quiz', quizResultsData);
      console.log('Quiz results saved:', response.data);
    } catch (error) {
      console.error('Error saving quiz results:', error);
      // Handle error state if needed
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Quizzes for {category}</h1>
      {!quizSubmitted ? (
        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div className="fixed bottom-4 right-4 bg-gray-100 rounded-xl overflow-hidden w-1/4 z-50">
              <video ref={videoRef} autoPlay muted className="object-cover w-full h-full" />
            </div>
            {quizzes.map(quiz => (
              <div
                key={quiz.id}
                className="flex flex-col justify-between bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 ease-in-out w-full"
              >
                <h2 className="text-xl font-bold mb-4 text-gray-950 no-copy">{quiz.question}</h2>
                <div className="mt-2">
                  {Object.entries(quiz.answers).map(([key, value]) =>
                    value && (
                      <div key={key} className="flex items-center mb-2 no-copy">
                        <input
                          type="radio"
                          name={`quiz-${quiz.id}`}
                          id={`quiz-${quiz.id}-${key}`}
                          className="mr-2"
                          value={key}
                          onChange={() => handleAnswerChange(quiz.id, key)}
                          checked={selectedAnswers[quiz.id] === key}
                        />
                        <label htmlFor={`quiz-${quiz.id}-${key}`} className="text-gray-700">
                          {value}
                        </label>
                      </div>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
          <button
            type="submit"
            className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600 transition duration-300"
          >
            Submit Answers
          </button>
        </form>
      ) : (
        <QuizSubmissionSuccess
          totalQuestions={quizzes.length}
          attemptedQuestions={attemptedQuestions}
        />
      )}
    </div>
  );
};

export default QuizPage;
