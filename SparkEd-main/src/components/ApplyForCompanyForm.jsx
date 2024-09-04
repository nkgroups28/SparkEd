const ApplyForCompanyForm = () => {
    const handleSubmit = () => {
        console.log("form submitted")
    }
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-[#ffffff1d] backdrop-blur-xl ">
            <div className="bg-[#ffffff87] backdrop-blur-3xl text-black rounded-xl shadow-md p-6">
                <a href="/micro-scholarship">
                <button className="absolute top-4 right-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
                </svg>
                </button>
                </a>
          <h3 className="text-xl font-semibold m-6">Application form</h3>


          <div>
        <form className="px-20">
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-0">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="John Doe"
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-0">
              Age:
            </label>
            <input
                type="number"
                id="Age"
                name="Age"
                placeholder="Max 21 Years"
                max={21} 
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="10th marks" className="block text-sm font-medium text-gray-700 mb-0">
              10th marks
            </label>
            <input
              type="text"
              id="10thmarks"
              name="10thmarks"
              placeholder="82%"
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="Diploma/12th Marks" className="block text-sm font-medium text-gray-700 mb-0">
              Diploma/12th Marks
            </label>
            <input
              type="Diploma/12th Marks"
              id="Diploma/12thMarks"
              name="Diploma/12thMarks"
              placeholder="93%"
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="Father's Income" className="block text-sm font-medium text-gray-700 mb-0">
              Fathe's Income
            </label>
            <input
              type="password"
              id="Father's Income"
              name="Father's Income"
              placeholder="4,00,000"
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />
          </div>

          <input
            type="file"
            id="fileInput"
            name="fileInput"
            className="hidden text-black"
            />

            <label htmlFor="fileInput" className=" text-black bg-slate-300 inline-block rounded-fll py-2 px-4 rounded-full cursor-pointer">
                Browse Files
            </label>

        </form>
      </div>

        
            <button
              className="mt-4 font-bold inline-block bg-blue-500 text-white px-6 py-2 rounded-full shadow-2xl hover:bg-blue-600 transition duration-300"
            >
              Apply
            </button>
        
          
        </div>
      </div>

    );
  };
  
  export default ApplyForCompanyForm;
  