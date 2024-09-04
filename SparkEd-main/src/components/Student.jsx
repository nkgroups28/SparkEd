import {useState} from "react";
import CompDetails from "./CompDetails";

const Student = () => {
    const scholarships = {
        CompanyA: {
          company: "Company A",
          totalAmount: "20,000",
          chunks: "4",
          eligibility: {
            minGPA: "3.5",
            fieldOfStudy: "Computer Science",
            yearOfStudy: "2nd year",
            extracurricularActivities: "Sports, Debate Club",
            financialNeed: "High",
            residencyStatus: "Local",
          },
        },
        CompanyB: {
          company: "Company B",
          totalAmount: "15,000",
          chunks: "5",
          eligibility: {
            minGPA: "3.0",
            fieldOfStudy: "Engineering",
            yearOfStudy: "3rd year",
            extracurricularActivities: "Music, Volunteer Work",
            financialNeed: "Medium",
            residencyStatus: "International",
          },
        },
        CompanyC: {
          company: "Company C",
          totalAmount: "25,000",
          chunks: "3",
          eligibility: {
            minGPA: "3.7",
            fieldOfStudy: "Business Administration",
            yearOfStudy: "4th year",
            extracurricularActivities: "Art, Leadership",
            financialNeed: "Low",
            residencyStatus: "Local",
          },
        },
        CompanyD: {
          company: "Company D",
          totalAmount: "18,000",
          chunks: "4",
          eligibility: {
            minGPA: "3.2",
            fieldOfStudy: "Marketing",
            yearOfStudy: "3rd year",
            extracurricularActivities: "Drama Club, Volunteer Work",
            financialNeed: "Medium",
            residencyStatus: "International",
          },
        },
        CompanyE: {
          company: "Company E",
          totalAmount: "22,500",
          chunks: "5",
          eligibility: {
            minGPA: "3.8",
            fieldOfStudy: "Psychology",
            yearOfStudy: "2nd year",
            extracurricularActivities: "Debate Team, Community Service",
            financialNeed: "High",
            residencyStatus: "Local",
          },
        },
        CompanyF: {
          company: "Company F",
          totalAmount: "17,500",
          chunks: "3",
          eligibility: {
            minGPA: "3.4",
            fieldOfStudy: "Education",
            yearOfStudy: "4th year",
            extracurricularActivities: "Music Club, Leadership",
            financialNeed: "Low",
            residencyStatus: "Local",
          },
        },
        CompanyG: {
          company: "Company G",
          totalAmount: "19,800",
          chunks: "4",
          eligibility: {
            minGPA: "3.6",
            fieldOfStudy: "Environmental Science",
            yearOfStudy: "3rd year",
            extracurricularActivities: "Environmental Club, Research Work",
            financialNeed: "Medium",
            residencyStatus: "International",
          },
        },
        CompanyH: {
          company: "Company H",
          totalAmount: "24,000",
          chunks: "3",
          eligibility: {
            minGPA: "3.9",
            fieldOfStudy: "Finance",
            yearOfStudy: "2nd year",
            extracurricularActivities: "Investment Club, Internships",
            financialNeed: "High",
            residencyStatus: "Local",
          },
        },
        CompanyI: {
          company: "Company I",
          totalAmount: "16,500",
          chunks: "4",
          eligibility: {
            minGPA: "3.1",
            fieldOfStudy: "Sociology",
            yearOfStudy: "4th year",
            extracurricularActivities: "Social Justice Club, Volunteering",
            financialNeed: "Low",
            residencyStatus: "Local",
          },
        },
        CompanyJ: {
          company: "Company J",
          totalAmount: "21,000",
          chunks: "5",
          eligibility: {
            minGPA: "3.3",
            fieldOfStudy: "Health Sciences",
            yearOfStudy: "3rd year",
            extracurricularActivities: "Healthcare Internship, Sports",
            financialNeed: "Medium",
            residencyStatus: "International",
          },
        },
      };
      
      

  const [selectedCompany, setSelectedCompany] = useState(null);

  const handleLearnMore = (companyName) => {
    setSelectedCompany(scholarships[companyName]);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Micro Scholarships</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.keys(scholarships).map((companyName, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-2">{scholarships[companyName].company}</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-2">{scholarships[companyName].totalAmount}</p>
            
            <button
              onClick={() => handleLearnMore(companyName)}
              className="mt-4 font-bold inline-block bg-blue-500 text-white px-6 py-2 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
            >
              Learn more
            </button>
          </div>
        ))}
      </div>

      {selectedCompany && <CompDetails companyDetails={selectedCompany} setSelectedCompany={setSelectedCompany} />}
    </div>
  );
};

export default Student;
