const CompDetails = ({ companyDetails, setSelectedCompany }) => {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-[#ffffff1d] backdrop-blur-xl">
        <div className="bg-[#ffffff87] backdrop-blur-3xl text-black rounded-xl shadow-md p-6">
        <button onClick={() => setSelectedCompany(null)} className="absolute top-4 right-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
          </svg>
        </button>
          <h2 className="text-2xl font-semibold mb-2">{companyDetails.company}</h2>
          <p className="text-gray-700 font-bold mb-2">Total Amount: {companyDetails.totalAmount}</p>
          {/* <p className="text-gray-700 font-bold mb-2">Chunks: {companyDetails.chunks}</p> */}
          <h3 className="text-xl font-semibold mt-4">Eligibility Criteria</h3>
          <ul className="list-disc ml-6 mt-2">
            <li>Minimum GPA: {companyDetails.eligibility.minGPA}</li>
            <li>Field of Study: {companyDetails.eligibility.fieldOfStudy}</li>
            <li>Year of Study: {companyDetails.eligibility.yearOfStudy}</li>
            <li>Extracurricular Activities: {companyDetails.eligibility.extracurricularActivities}</li>
            <li>Financial Need: {companyDetails.eligibility.financialNeed}</li>
            <li>Residency Status: {companyDetails.eligibility.residencyStatus}</li>
          </ul>
          <a href="/micro-scholarship/application_form">
          <button
              className="mt-4 font-bold inline-block bg-blue-500 text-white px-6 py-2 rounded-full shadow-2xl hover:bg-blue-600 transition duration-300"
            >
              Apply Now
            </button>
            </a>
        </div>
      </div>
    );
  };
  
  export default CompDetails;
  