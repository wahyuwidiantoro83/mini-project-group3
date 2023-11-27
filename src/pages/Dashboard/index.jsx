import React, { useState } from 'react';
import Navbar from '../../components/Navbar'; 

const Dashboard = () => {
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    countryCode: '',
    phone: '',
    birth_date: '',
    address: '',
    document: null,
    bank_acc: '',
  });
  const [selectedOption, setSelectedOption] = useState('');

  const countryCodes = [
    { code: "+1", name: "United States" },
    { code: "+44", name: "United Kingdom" },
    { code: "+62", name: "Indonesia" },
  ];

  const handleProfilePhotoChange = (event) => {
    const file = event.target.files[0];
    setProfilePhoto(URL.createObjectURL(file));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = async (e) => {
    e.preventDefault
  }

  return (
    <div>
      <Navbar />
      <div className="flex flex-row h-content bg-gray-100
      ">
        {/* Sidebar */}
        <div className="flex flex-col bg-clip-border bg-white text-gray-700 w-full h-content max-w-[20rem] p-4 shadow-blue-gray-800">
          <nav className="flex flex-col gap-1 min-w-[240px] bg-white p-2 font-sans text-base font-normal text-gray-700">
          <button
          type="button"
          tabIndex="0" 
          className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-200 hover:bg-opacity-80 focus:bg-blue-200 focus:bg-opacity-80 active:bg-blue-200 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
            <div className="grid place-itms-center mr-4 bg-gradient-to-r from-green-500 to-blue-500">
                <svg 
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="h-5 w-5 bg-white"
                >
                  <path 
                  fillRule="evenodd"
                  d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  clipRule="evenodd"
                  >

                  </path>
                </svg>
            </div>
            Profile
          </button>
          <button 
          type="button"
          tabIndex="0"
          className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-200 hover:bg-opacity-80 focus:bg-blue-200 focus:bg-opacity-80 active:bg-blue-200 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
            <div className="grid place-items-center mr-4 bg-gradient-to-r from-green-500 to-blue-500">
                <svg 
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 24 24"
                 fill="currentColor"
                 aria-hidden="true"
                 className="h-5 w-5 bg-white"
                >
                  <path 
                   fillRule="evenodd"
                   d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
                   clipRule="evenodd"
                  >

                  </path>
                </svg>
            </div>
            Settings
          </button>
          <button
          type="button"
          tabIndex="0"
          className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-200 hover:bg-opacity-80 focus:bg-blue-200 focus:bg-opacity-80 active:bg-blue-200 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
          >
            <div className="grid place-items-center mr-4 bg-gradient-to-r from-green-500 to-blue-500">
              <svg 
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="h-5 w-5 bg-white"
              >
                 <path
                 fillRule="evenodd"
                 d="M12 2.25a.75.75 0 01.75.75v9a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM6.166 5.106a.75.75 0 010 1.06 8.25 8.25 0 1011.668 0 .75.75 0 111.06-1.06c3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788a.75.75 0 011.06 0z"
                 clipRule="evenodd"
                 >
                 </path>
              </svg>
            </div>
            Log Out 
          </button>
          </nav>
        </div>
      {/* Main content */}
        <div className="w-3/4 p-4">
          {/* Profile photo preview */}
          <div className="mb-4">
            <img
              src={profilePhoto || 'placeholder.jpg'}
              alt="Profile Photo"
              className="w-32 h-32 rounded-full object-cover"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleProfilePhotoChange}
            />
          </div>

          {/* User input fields */}
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={user.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={user.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={user.password}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              placeholder="Enter your password"
            />
          </div>

          <form action="">
            <div className="mb-4 flex ">
              <div className="w-1/5 ">
                <label className="block text-sm font-medium text-gray-700">
                  Country
                </label>
                <select
                  name="countryCode"
                  value={user.countryCode}
                  onChange={handleInputChange}
                  className="block w-full py-2 px-3 border border-gray-300 rounded-md bg-white text-sm focus:outline-none focus:ring focus:border-blue-300"
                >
                  {countryCodes.map((country) => (
                    <option key={country.code} value={country.code}>
                      {`${country.name} (${country.code})`}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4 ml-2 w-[500px]">
                <label className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={user.phone}
                  onChange={handleInputChange}
                  className="block w-full py-2 px-3 border border-gray-300 rounded-md bg-white text-sm focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Company Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Company Name"
                value={user.name}
                onChange={handleInputChange}
                className="block w-full py-2 px-3 border border-gray-300 rounded-md bg-white text-sm focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={user.address}
                onChange={handleInputChange}
                className="block w-full py-2 px-3 border border-gray-300 rounded-md bg-white text-sm focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Birth Date
              </label>
              <input
                type="date"
                name="birth_date"
                value={user.birth_date}
                onChange={handleInputChange}
                className="block w-full py-2 px-3 border border-gray-300 rounded-md bg-white text-sm focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Legal Document (PDF)
              </label>
              <input
                type="file"
                name="document"
                // accept=".pdf"
                // onChange={handleFileChange}
                className="block w-full py-2 px-3 border border-gray-300 rounded-md bg-white text-sm focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Bank Account
              </label>
              <input
                type="text"
                name="bank_acc"
                placeholder="Bank Account"
                value={user.bank_acc}
                onChange={handleInputChange}
                className="block w-full py-2 px-3 border border-gray-300 rounded-md bg-white text-sm focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <button
              type="submit"
              // onClick={navigate("/")}
              className="w-full text-[#060606] my-2 font-semibold bg-white border-2 border-black rounded-md p-4 text-center flex items-center justify-center cursor-pointer"
            >
              Save
            </button>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;