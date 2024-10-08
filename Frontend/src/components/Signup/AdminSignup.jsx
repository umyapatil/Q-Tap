import React, { useState } from 'react';
import logo from '../../assets/Qtap.png'; // Replace with your actual logo path

function AdminSignup() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    type: 'admin', // default value for type
  });

  // Handle input change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Dummy handle signup function
  const handleSignup = (e) => {
    e.preventDefault();
    console.log('Signing up with:', formData);
    // Add signup logic here
  };

  // Dummy Microsoft login function
  const handleMicrosoftLogin = () => {
    console.log('Logging in with Microsoft');
    // Add Microsoft login logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f7f8fe]">
      <div className="bg-white shadow-md rounded-lg p-8 w-96">
        <img src={logo} alt="Logo" className="w-32 mx-auto mb-6" />
        <h2 className="text-center text-2xl font-semibold text-[#ff244d] mb-6">Admin Signup</h2>

        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <input
              type="text"
              id="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-6">
            <input
              type="password"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <button
            type="submit"
            className="bg-[#ff244d] text-white font-bold py-2 px-4 rounded w-full hover:bg-[#e62c55] transition duration-200"
          >
            Signup
          </button>
        </form>

        <div className="flex items-center justify-between mt-4">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-4 text-gray-500">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <div className="mt-4">
          <button
            onClick={handleMicrosoftLogin}
            className="bg-[#464646] text-white font-bold py-2 px-4 rounded w-full hover:bg-[#005ea6] transition duration-200 flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              className="h-5 w-5 mr-2"
              fill="currentColor"
            >
              <path fill="#F25022" d="M23 2H2v21h21z" />
              <path fill="#00A4EF" d="M46 2H25v21h21z" />
              <path fill="#7FBA00" d="M23 25H2v21h21z" />
              <path fill="#FFB900" d="M46 25H25v21h21z" />
            </svg>
            Signup with Microsoft
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminSignup;
