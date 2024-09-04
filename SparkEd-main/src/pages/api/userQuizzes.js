// src/app/api/userQuizzes.js

import express from 'express';
import QuizResult from '../../model/QuizResult';
import authMiddleware from '../../middleware/AuthMiddleware'; // Import your authentication middleware

const router = express.Router();

// GET route to fetch quizzes taken by the logged-in user
router.get('/', authMiddleware, async (req, res) => {
  const { id } = req.user; // Extract user ID from decoded JWT token

  try {
    // Fetch quiz results for the logged-in user
    const userQuizzes = await QuizResult.find({ student: id });

    // Prepare response data
    const quizData = {
      attempted: userQuizzes.length, // Total number of quizzes attempted
      total: await QuizResult.countDocuments(), // Total number of quizzes available
      userQuizzes: userQuizzes.map(quiz => ({
        category: quiz.category,
        totalMarks: quiz.totalMarks,
        answers: quiz.answers
      }))
    };

    res.status(200).json(quizData);
  } catch (error) {
    console.error('Error fetching user quizzes:', error);
    res.status(500).json({ error: 'Failed to fetch user quizzes' });
  }
});

export default router;
