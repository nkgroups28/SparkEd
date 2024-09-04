'use client'

// pages/micro-scholarship/company/page.js
import {useState} from 'react';

const initialFormState = {
  totalAmount: '',
  chunks: '',
  eligibility: {
    minGPA: '',
    fieldOfStudy: '',
    yearOfStudy: '',
    extracurricularActivities: '',
    financialNeed: '',
    residencyStatus: '',
  },
};

const initialStudents = [
  { name: "Student A", rank: 1 },
  { name: "Student B", rank: 2 },
  { name: "Student C", rank: 3 },
  { name: "Student D", rank: 4 },
  { name: "Student E", rank: 5 }
];

export default function Company() {
  const [form, setForm] = useState(initialFormState);
  const [submittedData, setSubmittedData] = useState(null);
  const [students] = useState(initialStudents);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name in form.eligibility) {
      setForm({
        ...form,
        eligibility: {
          ...form.eligibility,
          [name]: value,
        }
      });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const validateForm = () => {
    let newErrors = {};
    if (!form.totalAmount) newErrors.totalAmount = "Total amount is required";
    if (!form.quota) newErrors.quota = "Quota is required";
    if (!form.chunks) newErrors.chunks = "Chunks are required";
    if (!form.eligibility.minGPA) newErrors.minGPA = "Minimum GPA is required";
    if (!form.eligibility.fieldOfStudy) newErrors.fieldOfStudy = "Field of Study is required";
    if (!form.eligibility.yearOfStudy) newErrors.yearOfStudy = "Year of Study is required";
    if (!form.eligibility.extracurricularActivities) newErrors.extracurricularActivities = "Extracurricular Activities are required";
    if (!form.eligibility.financialNeed) newErrors.financialNeed = "Financial Need is required";
    if (!form.eligibility.communityService) newErrors.communityService = "Community Service is required";
    if (!form.eligibility.residencyStatus) newErrors.residencyStatus = "Residency Status is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmittedData(form);
      setForm(initialFormState);
      setErrors({});
    }
  };

  const allFieldsFilled = Object.values(form).every(value => value) &&
    Object.values(form.eligibility).every(value => value);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Company Admin Panel</h1>
      <div className="flex">
        {/* First Section: Form */}
        <div className="w-full md:w-3/5 p-4 px-10 bg-slate-900 rounded-xl">
          {!submittedData ? (
            <>
              <h2 className="text-2xl font-semibold mb-4 text-slate-300">Scholarship Details Form</h2>
              <p className='text-[12px] mb-4 text-slate-400'>Company has to fill this form so that the total amount that the company afford to offer will be divided into chunks for students and other data for basic student eligibility</p>
          <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 mb-2"><strong>Cumulative Scholarship Amount</strong> that company can provide</label>
              <input
                type="number"
                name="totalAmount"
                value={form.totalAmount}
                onChange={handleChange}
                className="w-full p-2 rounded-lg bg-slate-500"
              />
              {errors.totalAmount && <p className="text-red-500 text-sm mt-1">{errors.totalAmount}</p>}
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 mb-2">Scholarship amount for one individual</label>
              <input
                type="number"
                name="chunks"
                value={form.chunks}
                onChange={handleChange}
                className="w-full p-2 rounded-lg bg-slate-500"
              />
              {errors.chunks && <p className="text-red-500 text-sm mt-1">{errors.chunks}</p>}
            </div>
            {/* Eligibility Criteria Inputs */}
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 mb-2">Minimum % required in recent education</label>
              <input
                type="number"
                name="minGPA"
                value={form.eligibility.minGPA}
                onChange={handleChange}
                className="w-full p-2 rounded-lg bg-slate-500"
              />
              {errors.minGPA && <p className="text-red-500 text-sm mt-1">{errors.minGPA}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 mb-2">Field of Study</label>
              <input
                type="text"
                name="fieldOfStudy"
                value={form.eligibility.fieldOfStudy}
                onChange={handleChange}
                className="w-full p-2 rounded-lg bg-slate-500"
              />
              {errors.fieldOfStudy && <p className="text-red-500 text-sm mt-1">{errors.fieldOfStudy}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 mb-2">Year of Study</label>
              <input
                type="text"
                name="yearOfStudy"
                value={form.eligibility.yearOfStudy}
                onChange={handleChange}
                className="w-full p-2 rounded-lg bg-slate-500"
              />
              {errors.yearOfStudy && <p className="text-red-500 text-sm mt-1">{errors.yearOfStudy}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 mb-2">Extracurricular Activities</label>
              <input
                type="text"
                name="extracurricularActivities"
                value={form.eligibility.extracurricularActivities}
                onChange={handleChange}
                className="w-full p-2 rounded-lg bg-slate-500"
              />
              {errors.extracurricularActivities && <p className="text-red-500 text-sm mt-1">{errors.extracurricularActivities}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 mb-2">Financial Need</label>
              <input
                type="text"
                name="financialNeed"
                value={form.eligibility.financialNeed}
                onChange={handleChange}
                className="w-full p-2 rounded-lg bg-slate-500"
              />
              {errors.financialNeed && <p className="text-red-500 text-sm mt-1">{errors.financialNeed}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 mb-2">Residency Status</label>
              <input
                type="text"
                name="residencyStatus"
                value={form.eligibility.residencyStatus}
                onChange={handleChange}
                className="w-full p-2 rounded-lg bg-slate-500"
              />
              {errors.residencyStatus && <p className="text-red-500 text-sm mt-1">{errors.residencyStatus}</p>}
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-lg"
            >
              Submit
            </button>
          </form>
            </>
          ) : (
            <div className="mt-6 bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">Submitted Data</h3>
              <p><strong>Total Amount:</strong> {submittedData.totalAmount}</p>
              <p><strong>Quota:</strong> {submittedData.quota}</p>
              <p><strong>Chunks:</strong> {submittedData.chunks}</p>
              <div className="mt-4">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Eligibility Criteria:</h4>
                <p><strong>Minimum GPA:</strong> {submittedData.eligibility.minGPA}</p>
                <p><strong>Field of Study:</strong> {submittedData.eligibility.fieldOfStudy}</p>
                <p><strong>Year of Study:</strong> {submittedData.eligibility.yearOfStudy}</p>
                <p><strong>Extracurricular Activities:</strong> {submittedData.eligibility.extracurricularActivities}</p>
                <p><strong>Financial Need:</strong> {submittedData.eligibility.financialNeed}</p>
                <p><strong>Community Service:</strong> {submittedData.eligibility.communityService}</p>
                <p><strong>Residency Status:</strong> {submittedData.eligibility.residencyStatus}</p>
              </div>
            </div>
          )}
        </div>

        {/* Second Section: Student List */}
        <div className="w-full md:w-2/5 p-4">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Top Students</h2>
          <ul className="bg-white bg-gradient-to-r from-blue-500 to-teal-500 shadow-white shadow-sm hover:shadow-xl transform transition duration-300 ease-in-out p-6 rounded-lg hover:shadow-white">
            {students.map((student, index) => (
              <li key={index} className="flex items-center mb-4">
                <div className={`w-8 h-8 flex items-center justify-center rounded-full mr-4 text-white ${index === 0 ? 'bg-yellow-500' : index === 1 ? 'bg-orange-500' : index === 2 ? ' bg-amber-700' : 'bg-blue-800'}`}>
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{student.name}</h3>
                  <p>Rank: {student.rank}</p>
                </div>
              </li>
            ))}
          </ul>
          </div>
        <div className='pt-5'>
          <h2 className="text-2xl font-semibold mb-4">Students Aplied for your Scholarship</h2>
          <ul className="bg-white bg-gradient-to-r from-blue-500 to-teal-500 shadow-white shadow-sm hover:shadow-xl transform transition duration-300 ease-in-out p-6 rounded-lg hover:shadow-white">
            {students.map((student, index) => (
              <li key={index} className="flex items-center mb-4">
                {/* <div className={`w-8 h-8 flex items-center justify-center rounded-full mr-4 text-white ${index === 0 ? 'bg-yellow-500' : index === 1 ? 'bg-orange-500' : index === 2 ? ' bg-amber-700' : 'bg-blue-800'}`}>
                  {index + 1}
                </div> */}
                <div>
                  <h3 className="text-lg font-semibold">{student.name}</h3>
                  {/* <p>Rank: {student.rank}</p> */}
                </div>
                  <button className='font-bold inline-block bg-blue-600 text-white rounded-full shadow-2xl hover:bg-blue-700 transition duration-300 px-5 py-2 ml-10'>View Details</button>
              </li>
            ))}
          </ul>
          </div>
        </div>

      </div>
    </div>
  );
}
