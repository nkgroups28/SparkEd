// pages/info.js

export default function Info() {
    const steps = [
        {
            heading: "Micro Scholarships",
            description: " This program awards eligible students with funds from the company's CSR budget.",
        },
        {
            heading: "Micro Loans",
            description: " In cases where educational expenses exceed scholarship amounts, students can apply for loans. Loans are disbursed following thorough verification of educational background and academic achievements.",
        },
        {
            heading: "Quizzes",
            description: "Quizzes serve as a secondary metric for assessing students' technical knowledge. Students can participate in multiple quiz competitions to earn points, influencing their rankings visible to companies. Quizzes are conducted under secure conditions with surveillance to maintain integrity."
        },
        
    ];

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-8">Micro Scholarship Information Flow</h1>
            <div className="relative">
                <div className="border-l-4 border-blue-500 absolute h-full left-4"></div>
                {steps.map((step, index) => (
                    <div key={index} className="mb-10 ml-12">
                        <div className="flex items-center mb-4">
                            <div className="bg-blue-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold">
                                
                            </div>
                            <h2 className="ml-4 text-2xl font-semibold">{step.heading}</h2>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 ml-12">{step.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
