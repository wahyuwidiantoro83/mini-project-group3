import React from "react";
import { useState, useEffect, useRef } from "react";
import { FaCheckCircle, FaTimesCircle, FaInfoCircle } from "react-icons/fa";
import COVER_IMAGE from "../../../assets/COVER_IMAGE.png";
import GOOGLE_ICON from "../../../assets/GOOGLE_ICON.svg";
import axios from "axios";
import FormInput from "../../../components/Form/FormInput";
import { useNavigate } from "react-router-dom";
import { register, closeModal } from "../../../redux/slice/accountSlice";
import { useDispatch, useSelector } from "react-redux";

// --------------------------------- Register by=Audra ---------------------------------------------------------
const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });
  console.log(values);

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-30 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,30}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
    {
      id: 5,
      name: "role",
      type: "select", 
      placeholder: "Select Role",
      label: "Role",
      options: ["USER", "PROMOTOR"], 
      required: true,
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
 console.log(values);
    try {
      
      const response = await axios.post(API_URL + `/auth/regis`, values);
  
      console.log("INI RESPONSE", response);
      console.log("Form input values", values);
      
      if (response.status === 201) {
        response.data.token
        dispatch(register(response.data.token));
        localStorage.setItem("user", JSON.stringify(response.data.token));
 
        if(values.role === "USER") {
          navigate("/landing");
        } else if (values.role === "PROMOTOR") {
          navigate("/landing");
        }
      } else {
        console.log("Registration failed:", response.data.message);
      }
    } catch (error) {
      console.log("Error", error.response.data.message);
    }

  };



  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value});
  };

  return (
    <div className="w-full h-screen flex flex-col sm:flex-row items-start">
      <div className="relative w-full sm:w-1/2 sm:h-full flex flex-col">
        <div className="absolute top-[5%] right-[5%] flex flex-col">
          <h1 className="text-4xl text-white font-bold my-1 hidden sm:block">
            A HEAD FULL OF DREAMS
          </h1>
          <p className="text-xl text-white font-normal hidden sm:block">
            Look at the stars look how they shine for you
          </p>
        </div>
        <img
          src={COVER_IMAGE}
          alt="concert event"
          className="w-full h-full object-cover hidden sm:block"
        />
      </div>

      <div className="w-full sm:w-1/2 h-1/2 sm:h-full bg-[#f5f5f5] flex flex-col p-4 sm:p-20">
        <h1 className="text-2xl text-[#060606] font-semibold">eventbright</h1>
        <div className="w-full flex flex-col mb-2 max-w-[500px]">
          <h2 className="text-2xl font-semibold mb-2">Register</h2>
          <p className="text-base mb-2">Welcome! Please enter your details.</p>
        </div>
        <div className="w-full flex flex-col">
          <form onSubmit={handleSubmit}>
            {inputs.map((input) => (
              input.type === "select" ? (
                <div key={input.id} className="w-full mb-2">
                  <label className="text-sm text-[#060606] mb-1">{input.label}</label>
                  <select
                    name={input.name}
                    value={values[input.name]}
                    onChange={onChange}
                    className="w-full py-2 my-2 bg-transparent outline-none focus:outline-none rounded-md"
                    style={{ border: '1px solid #000' }}
                    required={input.required}
                  >
                    <option value="" disabled hidden className="text-[#a0aec0]">{input.placeholder}</option>
                    {input.options.map((option) => (
                      <option key={option} value={option} className="text-black">
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              ) : (
                <FormInput
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  onChange={onChange}
                  className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
                />
              )
            ))}
            <div className="w-full flex items-center justify-between">
              <div className="w-full flex items-center">
                <input type="checkbox" className="w-4 h-4 mr-2" />
                <p>
                  I accept the{" "}
                  <a href="#" className="text-blue-500 font-semibold">
                    Terms of Use
                  </a>{" "}
                  &{" "}
                  <a href="#" className="text-blue-500 font-semibold">
                    Privacy Policy
                  </a>
                </p>
              </div>
            </div>
            <div className="w-full flex flex-col my-4">
              <button
                onClick={handleSubmit}
                className="w-full text-[#060606] my-2 font-semibold bg-white border-2 border-black rounded-md p-4 text-center flex items-center justify-center cursor-pointer"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Register;
