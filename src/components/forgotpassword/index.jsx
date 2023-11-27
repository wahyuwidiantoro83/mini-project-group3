import React from 'react';

const ForgetPassword = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPassword = e.target.elements.newPassword.value;
    const confirmPassword = e.target.elements.confirmPassword.value;
    
    // Logic to update the password
    if (newPassword === confirmPassword) {
      // Passwords match, update the password
      console.log('Password updated successfully');
    } else {
      // Passwords do not match, show an error message
      console.log('Passwords do not match');
    }
  };

  const handleRedirect = () => {
    // Logic to redirect to the landing page
    console.log('Redirecting to the landing page');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Forget Password</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          type="password"
          placeholder="New Password"
          name="newPassword"
          className="w-64 px-4 py-2 mb-4 border border-gray-300 rounded-md"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          className="w-64 px-4 py-2 mb-4 border border-gray-300 rounded-md"
        />
        <button
          type="submit"
          className="w-64 px-4 py-2 mb-4 rounded-md bg-gradient-to-r from-purple-500 to-blue-500 text-white"
        >
          Update Password
        </button>
      </form>
      <button
        onClick={handleRedirect}
        className="text-blue-500 underline"
      >
        Go to Landing Page
      </button>
    </div>
  );
};

export default ForgetPassword;