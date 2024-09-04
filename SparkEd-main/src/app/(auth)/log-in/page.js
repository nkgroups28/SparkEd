'use client'
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [userType, setUserType] = useState(''); // State to store userType
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const { username, password } = formData;

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.msg || 'Something went wrong');
      } else {
        const data = await response.json();
        localStorage.setItem('userData', JSON.stringify(data));
        setUserType(data.userType); // Assuming the API response includes userType
        setIsLoggedIn(true); // Set login status to true
        toast.success('Login successful!');
        window.location.href = '/home';
      }
    } catch (error) {
      setError('An error occurred. Please try again later.');
      console.error('Error:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('userData');
    setIsLoggedIn(false);
    setUserType('');
    toast.info('Logged out successfully.');
    window.location.href = '/log-in';
  };

  if (isLoggedIn) {
    // Conditionally render Student or Company component based on userType
    return userType === 'student' ? <Student handleLogout={handleLogout} /> : <Company handleLogout={handleLogout} />;
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-800">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Login to SparkEd</h1>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-3 py-2 text-black rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 text-black py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-950 text-white py-2 rounded-lg shadow hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>

          <p className="mt-4 text-sm text-center text-gray-600">
            Don't have an account? <a href="/sign-up" className="text-blue-500 hover:underline">Sign up here</a>.
          </p>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

const Student = ({ handleLogout }) => (
  <div className="flex justify-center items-center h-screen bg-gray-100">
    <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Welcome Student</h1>
      <button
        onClick={handleLogout}
        className="w-full bg-blue-950 text-white py-2 rounded-lg shadow hover:bg-blue-600 transition duration-300"
      >
        Logout
      </button>
    </div>
  </div>
);

const Company = ({ handleLogout }) => (
  <div className="flex justify-center items-center h-screen bg-gray-100">
    <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Welcome Company</h1>
      <button
        onClick={handleLogout}
        className="w-full bg-blue-950 text-white py-2 rounded-lg shadow hover:bg-blue-600 transition duration-300"
      >
        Logout
      </button>
    </div>
  </div>
);

export default Login;
