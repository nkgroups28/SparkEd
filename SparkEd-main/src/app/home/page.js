// Home.jsx
'use client'

import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      {/* <header className="flex justify-between items-center py-6">
        <h1 className="text-4xl font-bold">EduFinance</h1>
        <nav>
          <Link href="#features" className="px-4 py-2 text-lg text-blue-500 hover:underline">Features</Link>
          <Link href="#contact" className="px-4 py-2 text-lg text-blue-500 hover:underline">Contact</Link>
        </nav>
      </header> */}
      
      <section className="text-center my-16">
        <h2 className="text-3xl font-bold mb-4">Welcome to SparkEd</h2>
        <p className="text-xl mb-8">Empowering students with financial tools and knowledge.</p>
        <Link href="#features" className="bg-blue-500 text-white py-3 px-6 rounded-lg shadow hover:bg-blue-600 transition duration-300">Get Started</Link>
      </section>
      
      <section id="features" className="my-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-2 p-10 gap-8 mx-auto">
          <FeatureBox
            image="https://www.moneytap.com/blog/wp-content/uploads/2023/03/Microfinance-Loans-1024x683.jpg"
            alt="Micro Loans"
            title="Micro Loans"
            description="Quick and easy micro loans to support your educational needs."
            link="/micro-loan"
          />
          <FeatureBox
            image="https://y7b6t9n6.rocketcdn.me/wp-content/uploads/2021/09/DIFFERENT_TYPES_OF_LEARNER%CE%93COS_QUIZZES_YOU_CAN_TAKE_ONLINE.png"
            alt="Quizzes"
            title="Quizzes"
            description="Engaging quizzes to test and improve your financial knowledge."
            link="/quizzes/categories"
          />
          <FeatureBox
            image="https://upload.auroscholar.org/uploads/blog/what-is-micro-scholarship.jpg"
            alt="Micro Scholarships"
            title="Micro Scholarships"
            description="Earn micro scholarships based on your quiz performance and engagement."
            link="/micro-scholarship"
          />
          
        </div>
      </section>
      
      {/* <section id="contact" className="my-16">
        <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
        <form className="max-w-lg mx-auto bg-white p-6 rounded-xl shadow-xl">
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-medium mb-2 text-slate-900">Name</label>
            <input type="text" id="name" className="w-full border border-gray-300 bg-slate-700 p-2 rounded-lg" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium mb-2 text-slate-900">Email</label>
            <input type="email" id="email" className="w-full border border-gray-300 bg-slate-700 p-2 rounded-lg" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-medium mb-2 text-slate-900">Message</label>
            <textarea id="message" className="w-full border border-gray-300 bg-slate-700 p-2 rounded-lg"></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg shadow hover:bg-blue-600 transition duration-300">Send Message</button>
        </form>
      </section> */}
    </div>
  );
}

// FeatureBox component
const FeatureBox = ({ image, alt, title, description, link }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-xl text-center hover:shadow-2xl transition duration-300">
      <img src={image} alt={alt} className="mx-auto mb-4 rounded-lg" style={{ maxWidth: '200px', maxHeight: '200px' }} />
      <h3 className="text-2xl font-bold mb-4 text-black">{title}</h3>
      <p className="mb-4 text-black font-semibold">{description}</p>
      <Link href={link} className="text-blue-500 hover:underline">Learn More</Link>
    </div>
  );
}

export default Home;
