import React from "react";
import { useState } from "react";
import COVER_IMAGE from "../../assets/COVER_IMAGE.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../redux/slice/accountSlice";
import axios from "axios";


// ---------------------------------------------- User profile --------------------------------------------
const UserProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    countryCode: "",
    phone: "",
    name: "",
    birth_date: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const countryCodes = [
    { code: "+1", name: "United States" },
    { code: "+44", name: "United Kingdom" },
    { code: "+62", name: "Indonesia" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
      const response = await axios.post("http://localhost:2023/accountDetail/registrasi", values)
      
      if (response.status === 201) {
        dispatch(register({ ...values, role: "USER" }));
        localStorage.setItem("user", JSON.stringify({ ...values, role: "USER" }));
        console.log("Submitted Values (UserProfile):", values);
        navigate("/");
      } else {
        console.log("Submission failed:", response.data.message);
      }
    } catch (error) {
      console.log(error);
    }

  };

  return (
    <div className=" w-full h-screen flex flex-col sm:flex-row items-start">
      <div className="w-full sm:w-1/2 h-1/2 sm:h-full bg-[#f5f5f5] flex flex-col p-4 sm:p-20 justify-between ">
        <h1 className=" text-2xl text-[#060606] font-semibold mt-4">
          Complete the form below
        </h1>
        <p className="text-base">Create Event Profile Input.</p>
        <div className="w-full flex flex-col mt-4">
          <form action="">
            <div className="mb-4 flex">
              <div className="w-1/5">
                <label className="block text-sm font-medium text-gray-700">
                  Country
                </label>
                <select
                  name="countryCode"
                  value={values.countryCode}
                  onChange={handleChange}
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
                  value={values.phone}
                  onChange={handleChange}
                  className="block w-full py-2 px-3 border border-gray-300 rounded-md bg-white text-sm focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={values.name}
                onChange={handleChange}
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
                value={values.address}
                onChange={handleChange}
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
                value={values.birth_date}
                onChange={handleChange}
                className="block w-full py-2 px-3 border border-gray-300 rounded-md bg-white text-sm focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <button 
            type="submit"
            onClick={handleSubmit}
            className="w-full text-[#060606] my-2 font-semibold bg-white border-2 border-black rounded-md p-4 text-center flex items-center justify-center cursor-pointer">
              Register
            </button>
          </form>
        </div>
      </div>

      <div className="relative w-full sm:w-1/2 sm:h-full flex flex-col">
        <div className="absolute top-[5%] right-[5%] flex flex-col"></div>
        <img
          src={COVER_IMAGE}
          alt="concert event"
          className="w-[500px] h-full object-cover hidden sm:block absolute top-[0] right-[0]"
        />
      </div>
    </div>
  );
};

export default UserProfile;
