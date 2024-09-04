'use client'

import Loader from '@/components/Loader';
import axios from 'axios';
import Link from 'next/link';
import {useEffect,useState} from 'react';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true); // State to manage loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://quizapi.io/api/v1/categories', {
          headers: {
            'X-Api-Key': 'WbLdoyTsmLxP51A1UIUCfKYyQqf5ldVt0FiYA7KO', // Replace with your actual API key
          },
        });

        setCategories(response.data);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error('Error fetching categories:', error);
        setLoading(false); // Set loading to false on error as well
        // Handle error state if needed
      }
    };

    fetchData();
  }, []);

  // Function to enter full-screen mode
  const enterFullscreen = () => {
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    }
  };

  return (
    <>
      {loading ? ( // Check if loading is true
        <Loader />
      ) : (
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-4">Categories</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <div
                key={category.id}
                onClick={enterFullscreen} // Enter full-screen mode on category click
                className="flex flex-col justify-between bg-gradient-to-r from-blue-500 to-teal-500 p-6 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer w-full h-56 text-white"
              >
                <Link href={`/quizzes/categories/${category.name}/quiz`} passHref>
                  <div className="flex flex-col h-full justify-between">
                    <h2 className="text-2xl font-bold">{category.name}</h2>
                    <p className="mt-2 text-lg opacity-75">{category.name}</p>
                    <div className="mt-4 text-right">
                      <button className="bg-white text-blue-500 py-2 px-4 rounded-lg shadow hover:bg-gray-200 transition duration-300">
                        Explore
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Categories;
