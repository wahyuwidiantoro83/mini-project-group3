import React from "react";
import { useState } from "react";
import COVER_IMAGE from "../../assets/COVER_IMAGE.png";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../../redux/slice/accountSlice";
import axios from "axios";



// -------------------------------------------- Create Event Profile By=Audra ------------------------------------------------------
const CreateEventProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [countryCode, setCountryCode] = useState();
  // const [name, setName] = useState();
  // const [phone, setPhone] = useState();
  // const [birth_date, setBirth_Date] = useState();
  // const [addres, setAddress] = useState();
  // const [document, setDocument] = useState();
  // const [bank_acc, setBank_Acc] = useState();
  // const [values, setValues] = useState({
  //   countryCode: "",
  //   name: "",
  //   phone: "",
  //   birth_date: "",
  //   address: "",
  //   document: null,
  //   bank_acc: "",
  // });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  // const handleFileChange = (e) => {
  //   const files = e.target.files;
  //   const formData = new FormData();

  //   for (let i = 0; i < files.length; i++) {
  //     formData.append("document", files[i]);
  //   }

  //   setValues({
  //     ...values,
  //     document: formData,
  //   });
  // };

  const countryCodes = [
    { code: "+1", name: "United States" },
    { code: "+44", name: "United Kingdom" },
    { code: "+62", name: "Indonesia" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      Object.entries(values).forEach(([key, value]) => {
        console.log([key, value]);
        formData.append(key, value);
      });
      console.log("TEST", formData);
      const response = await axios.post(
        "http://localhost:2023/accountDetail/registrasi",
        {

        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 201) {
        dispatch(register({ ...values, role: "EVENT ORGANIZER" }));
        localStorage.setItem(
          "promotor",
          JSON.stringify({ ...values, role: "EVENT ORGANIZER" })
        );
        console.log("Submitted Values (CreateEventProfile):", values);
        navigate("/");
      } else {
        console.log("Submission failed:", response.data.message);
      }
    } catch (error) {
      console.log("Error submitting data:", error);
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
                Company Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Company Name"
                value={values.name}
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
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Legal Document (PDF)
              </label>
              <input
                type="file"
                name="document"
                accept=".pdf"
                onChange={handleFileChange}
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
                value={values.bank_acc}
                onChange={handleChange}
                className="block w-full py-2 px-3 border border-gray-300 rounded-md bg-white text-sm focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <button
              type="submit"
              onClick={navigate("/")}
              className="w-full text-[#060606] my-2 font-semibold bg-white border-2 border-black rounded-md p-4 text-center flex items-center justify-center cursor-pointer"
            >
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

export default CreateEventProfile;
