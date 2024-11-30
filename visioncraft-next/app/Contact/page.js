// Add this line at the top of your Contact.js file
'use client';

import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to server)
    console.log(formData);
  };

  return (
    <div className="bg-yellow-100 min-h-screen flex items-center justify-center py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row bg-yellow-100 shadow-lg rounded-lg">
          <div className="md:w-1/2 p-8 bg-yellow-100">
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <p className="mb-2"><strong>Email:</strong> Info@email.com</p>
            <p className="mb-2"><strong>Phone:</strong> 1.800.000.000</p>
            <p className="mb-2"><strong>Address:</strong> 123 Acme street</p>
          </div>
          <div className="md:w-1/2 p-8">
            <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
            <form onSubmit={handleSubmit}>
              {['firstName', 'lastName', 'email', 'subject', 'message'].map((field) => (
                <div className="relative mb-6" key={field}>
                  <input
                    type={field === 'email' ? 'email' : field === 'message' ? 'textarea' : 'text'}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className="block px-4 py-2 w-full text-sm text-gray-700 bg-yellow-100 border-b border-black appearance-none focus:outline-none focus:ring-0 hover:border-blue-600 peer"
                    placeholder=" "
                    style={{ boxShadow: 'none' }}
                  />
                  <label
                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 left-3.5 origin-[0] bg-yellow-100 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    {field.charAt(0).toUpperCase() + field.slice(1).replace('Name', ' Name')}
                  </label>
                </div>
              ))}
              <button
                type="submit"
                className="w-full bg-gray-900 text-yellow-100 py-2 rounded-md mt-4 hover:bg-gray-600"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
