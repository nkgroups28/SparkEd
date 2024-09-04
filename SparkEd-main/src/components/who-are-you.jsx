
export default function MicroScholarship() {
   

    return (
        <div >
        <h1 className="text-4xl font-bold mb-1 ml-10 mt-10 text-slate-400">Micro Scholarships</h1>
        <p className='ml-10 text-slate-500 font-semibold'>Let us know that you want to give microloans or take Micro Scholarship</p>
        <div className='flex justify-center items-center'>
            <div className='bg-gradient-to-r from-blue-500 to-teal-500 shadow-xl hover:shadow-2xl transform transition duration-300 ease-in-out p-10 m-10 rounded-xl'>
                <h1 className="text-3xl font-bold text-slate-900 text-center mb-5">You are ?</h1>
                <div className="flex ">
                    <a href="/micro-scholarship/company"><h1 className="bg-white text-blue-500 py-2 px-4 rounded-lg shadow hover:bg-gray-200 hover:text-gray-900 transition duration-300 font-bold mb-0 mr-2" >Company</h1></a>
                    <a href="/micro-scholarship/student"><h1 className="bg-white text-blue-500 py-2 px-4 rounded-lg shadow hover:bg-gray-200 hover:text-gray-900 transition duration-300 font-bold mb-0 mr-2">Student</h1></a>
                </div>

            </div>

        </div>
        </div>
    );
}
