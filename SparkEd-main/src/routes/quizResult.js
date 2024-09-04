const express = require('express');
const router = express.Router();
const User = require('../model/user'); // Assuming this is your User model
const QuizResult = require('../model/QuizResult');

    
// POST route to handle quiz submission
router.post('/api/submit-quiz', async (req, res) => {
  const { username, category, totalMarks } = req.body;

  try {
    // Find the user by username (assuming username is unique)
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Create a new quiz result record
    const quizResult = new QuizResult({
      student: user._id, // Link to the user record
      category,
      totalMarks,
      // timestamp field will automatically be populated
    });
    await quizResult.save();

    // Send response
    res.status(201).json({ message: 'Quiz submitted successfully', quizResult });
  } catch (err) {
    console.error('Error submitting quiz:', err);
    res.status(500).json({ error: 'Failed to submit quiz' });
  }
});

module.exports = router;
