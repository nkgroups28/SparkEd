import connectToDatabase from '../../config/db';
import QuizResult from '../../model/QuizResult';

connectToDatabase(); // Ensure MongoDB connection is established

export default async function handler(req, res) {
  console.log('Handler invoked'); // Add this at the start of your handler function

  if (req.method === 'POST') {
    const { category, totalMarks, answers } = req.body;

    try {
      // Saving quiz results to MongoDB using Mongoose
      const quizResult = new QuizResult({
        category,
        totalMarks,
        answers,
      });
      await quizResult.save();

      res.status(201).json({ message: 'Quiz results saved successfully', quizResult });
    } catch (error) {
      console.error('Error saving quiz results:', error);
      res.status(500).json({ error: 'Failed to save quiz results' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
