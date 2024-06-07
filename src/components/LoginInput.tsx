'use client';

import React, { useState } from 'react';

function LoginInput() {
  const [selectedPet, setSelectedPet] = useState('racoon');

  const handleLogin = () => {
    // STORE PET IN LOCAL STORAGE
    localStorage.setItem('selectedPet', selectedPet);
    // CONSOLE LOG
    console.log('User logged in and selected pet:', selectedPet);
  };

  return (
    <>
      <label className="input input-bordered flex items-center gap-2 mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70" aria-hidden="true">
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
        </svg>
        <input type="text" className="grow focus:outline-none text-black" placeholder="Name" aria-label="Name" />
      </label>
      <label className="input input-bordered flex items-center gap-2 mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70" aria-hidden="true">
          <path fillRule="evenodd" d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" clipRule="evenodd" />
        </svg>
        <input type="text" className="grow focus:outline-none text-black" placeholder="Username" aria-label="Username" />
      </label>
      <label className="input input-bordered flex items-center gap-2 mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70" aria-hidden="true">
          <path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" />
        </svg>
        <input type="password" className="grow focus:outline-none text-black" placeholder="Password" aria-label="Password" />
      </label>
      <label className="input input-bordered flex items-center gap-2 mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70" aria-hidden="true">
          <path d="M5.5 3a2.5 2.5 0 0 1 5 0v1h1.5A1.5 1.5 0 0 1 13.5 5v6A1.5 1.5 0 0 1 12 12.5H4A1.5 1.5 0 0 1 2.5 11V5A1.5 1.5 0 0 1 4 3.5H5.5V3Zm1.415 0a1.5 1.5 0 1 0-2.83 0H6.915ZM4 5v6h8V5H4Z" />
        </svg>
        <select className="grow bg-transparent border-none outline-none focus:outline-none text-black" aria-label="Role">
          <option value="" disabled selected>Select Role</option>
          <option value="frontend" className="text-black">Frontend Developer</option>
          <option value="backend" className="text-black">Backend Developer</option>
          <option value="fullstack" className="text-black">Fullstack Developer</option>
          <option value="devops" className="text-black">DevOps Engineer</option>
          <option value="qa" className="text-black">QA Engineer</option>
          <option value="pm" className="text-black">Product Manager</option>
        </select>
      </label>
      <div className="mt-6">
        <label htmlFor="pet-select" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          Select your pet:
        </label>
        <select
          id="pet-select"
          value={selectedPet}
          onChange={(e) => setSelectedPet(e.target.value)}
          className="select select-bordered w-full max-w-xs text-black"
        >
          <option value="racoon">Racoon</option>
          <option value="horse">Horse</option>
          <option value="cat">Cat</option>
          <option value="penguin">Penguin</option>
        </select>
      </div>
      <button
        onClick={handleLogin}
        className="btn btn-primary mt-6"
      >
        Login
      </button>
    </>
  );
}

export default LoginInput;
