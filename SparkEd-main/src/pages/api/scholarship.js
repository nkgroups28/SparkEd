
import connectToDatabase from '../../config/db';
import Scholarship from '../../model/scholarship';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ msg: 'Method not allowed' });
  }

  try {
    await connectToDatabase();

    const {
      cumulativeScholarshipAmount,
      individualScholarshipAmount,
      minPercentageRequired,
      yearOfStudy,
      extracurricularActivities,
      financialNeed,
      residencyStatus,
    } = req.body;

    const newScholarship = await Scholarship.create({
      cumulativeScholarshipAmount,
      individualScholarshipAmount,
      minPercentageRequired,
      yearOfStudy,
      extracurricularActivities,
      financialNeed,
      residencyStatus,
    });

    res.status(201).json(newScholarship);
  } catch (error) {
    console.error('Error saving scholarship data', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
}
