import React, { useState } from 'react';

const OptForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="text-center max-w-[950px] mx-auto px-4">
      <h3 className="text-xl sm:text-2xl text-white mb-4">
        Ready to watch? Enter your email to create or restart your membership.
      </h3>
      
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center items-center gap-2">
        <div className="w-full sm:w-[450px]">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-4 text-black outline-none"
            required
          />
        </div>
        <button 
          type="submit"
          className="bg-red-600 text-white px-8 py-4 text-2xl flex items-center hover:bg-red-700 transition"
        >
          TRY IT NOW
          <svg 
            className="w-6 h-6 ml-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default OptForm;
