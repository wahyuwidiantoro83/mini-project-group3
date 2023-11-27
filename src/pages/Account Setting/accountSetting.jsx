import React from 'react';
import { useState } from "react";
import axios from "axios";
import COVER_IMAGE from "../../assets/COVER_IMAGE.png";
import Navbar from '../../components/Navbar';
import FormPut from '../../components/Form/FormPut';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// --------------------- Account settings by=audra ----------------------------------

const AccountSettings = () => {
  const navigate = useNavigate();
  const accountGlobal = useSelector((state) => state.accountSliceReducer);
  

  return (
    <div>
      <Navbar/>
      <div className="flex flex-row bg-gradient-to-r from-black to-white">
        <div className="flex flex-col bg-clip-border rounded-xl bg-blue-400 text-gray-700 w-full h-scren max-w-[20rem] p-4 shadow-blue-gray-800">
          <nav className="flex flex-col gap-1 min-w-[240px] bg-gradient-to-r from-white to-black p-2 font-sans text-base font-normal text-gray-700">
          <button
          type="button"
          tabIndex="0" 
          className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
            <div className="grid place-itms-center mr-4 bg-gradient-to-r from-green-500 to-blue-500">
                <svg 
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="h-5 w-5"
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
          className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
            <div className="grid place-items-center mr-4 bg-gradient-to-r from-green-500 to-blue-500">
                <svg 
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 24 24"
                 fill="currentColor"
                 aria-hidden="true"
                 className="h-5 w-5"
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
          className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
          >
            <div className="grid place-items-center mr-4 bg-gradient-to-r from-green-500 to-blue-500">
              <svg 
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="h-5 w-5 bg-green-500"
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
        <div className="flex w-full h-screen max-w-[20rem] p-4"></div>
        <div className="px-4">
          <div className="flex flex-row-reverse py-3 w-full mx-auto">
            <p className="text-sm">
              eventbright
            </p>
          </div>
          <div>
            <div className="flex justify-between">
              <h1 className="text-xl font-bold">Profile Photo</h1>
            </div>
            <div>
              <div className="w-full h-[1px] my-4 bg-gradient-to-r from-white to-black mx-auto"></div>
            </div>
            <div className="w-48">
              <div className="flex justify-center content-center items-center h-48 w-48 border-2 border-gradient-to-r from-white to-black">
                 <form>
                  <label 
                  htmlFor="picUpload"
                  className="focus:outline-1"

                  >
                    {/* {profilePicGlobal && !profilePicGlobal.includes("null") ? ( */}
                    <div className='w-44 h-44 cursor-pointer'>
                      <img src="" className='w-full h-full object-contain' />
                      <input 
                      id="picUpload"
                      type="file" 
                      name="picUpload"
                      // onChange={}
                      accept='image/*'
                      className="opacity-0 -z-10 absolute"
                      />
                    </div>
                    {/* ):(  */}
                      <div className='flex flex-col items-center h-44 w-44 border border-dashed border-slate-300 cursor-pointer'>
                        {/* <BsPersonFill size={"100px"} /> */}
                        <p>
                          ADD A PROFILE
                          <span className=" flex justify-center">IMAGE</span>
                        </p>
                        <p className=" text-xs">click to upload photo</p>
                        <input
                          id="picUpload"
                          name="picUpload"
                          // onChange={(e) => profilePhotoSave(e)}
                          type="file"
                          accept="image/*"
                          className=" opacity-0 -z-10 absolute"
                        />
                      </div>
                    {/* )} */}
                  </label>
                 </form>
              </div>
              <div className='flex gap-x-3 justify-between my-1'>
                <p className="text-xs">Click picture to change</p>
                <a 
                className="text-ts flex text-blue-600 hover:cursor-pointer hover:underline"
                // onClick={}
                >
                  Remove
                </a>
              </div>
            </div>
          </div>
          <div className='flex justify-between'>
            <h1 className='text-xl font-bold'>Account Information</h1>
          </div>
          <div>
            <div className='w-full h-[1px] my-4 bg-gradient-to-r from-white to-black mx-auto'></div>
          </div>
          <form
          className='bg-white rounded-md max-h-fit w-10/12 px-8 pt-6 pb-8 mb-4 '
          >
            <div className='flex gap-x-8'>
              <div className='mb-6'>
              <div className="w-full flex flex-col mt-4">
          <form action="">
            <div className="mb-4 flex">
              <div className="w-1/5">
                <label className="block text-sm font-medium text-gray-700">
                  Country
                </label>
                <select
                  name="countryCode"
                  // value={values.countryCode}
                  // onChange={handleChange}
                  className="block w-full py-2 px-3 border border-gray-300 rounded-md bg-white text-sm focus:outline-none focus:ring focus:border-blue-300"
                >
                  {/* {countryCodes.map((country) => (
                    <option key={country.code} value={country.code}>
                      {`${country.name} (${country.code})`}
                    </option>
                  ))} */}
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
                  // value={values.phone}
                  // onChange={handleChange}
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
                // value={values.name}
                // onChange={handleChange}
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
                // value={values.address}
                // onChange={handleChange}
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
                // value={values.birth_date}
                // onChange={handleChange}
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
                accept=".pdf"
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
                // value={values.bank_acc}
                // onChange={handleChange}
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
          </form>
        </div>
      </div>
    </div>
  )
};

export default AccountSettings;