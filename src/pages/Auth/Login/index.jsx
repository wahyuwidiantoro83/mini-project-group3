import React from "react";
import COVER_IMAGE from "../../../assets/COVER_IMAGE.png";
import GOOGLE_ICON from "../../../assets/GOOGLE_ICON.svg";

const Login = () => {
  return (
    <div className=" w-full h-screen flex flex-col sm:flex-row items-start">
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

      <div className="w-full sm:w-1/2 h-1/2 sm:h-full bg-[#f5f5f5] flex flex-col p-4 sm:p-20 justify-between ">
        <h1 className=" text-2xl text-[#060606] font-semibold ">eventbright</h1>
        <div className="w-full flex flex-col">
          <div className="w-full flex flex-col mb-2 max-w-[500px]">
            <h2 className="text-2xl font-semibold mb-2">Login</h2>
            <p className="text-base mb-2">Welcome! Please enter your details.</p>
          </div>
                <div className="w-full flex flex-col">
                <input 
                type="email"
                placeholder="Email"
                className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none "
                />
                <input 
                type="password"
                placeholder="Password"
                className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none "
                />
                </div>
                <div className="w-full flex items-center justify-between">
                    <div className="w-full flex items-center">
                    <input type="checkbox" className="w-4 h-4 mr-2" />
                    <p className="text-sm">Remember Me</p>
                    </div>
                    <p className="text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2">Forget Password ?</p>
                </div>
                <div className="w-full flex flex-col my-4">
                    <button className="w-full text-white my-2 font-semibold bg-[#060606] rounded-md p-4 text-center flex items-center justify-center cursor-pointer">
                        Log in
                    </button>
                    <button className="w-full text-[#060606] my-2 font-semibold bg-white border-2 border-black rounded-md p-4 text-center flex items-center justify-center cursor-pointer">
                        Register
                    </button>
                </div>

                <div className="w-full flex item-center justify-center relative py-2">
                  <div className="w-full h-[1px] bg-black"></div>
                  <p className="text-lg absolute text-black/80 bg-[#f5f5f5] ">or</p>
                </div>
                <div className="w-full text-[#060606] my-2 font-semibold bg-white border-2 border-black rounded-md p-4 text-center flex items-center justify-center">
                  <img src={GOOGLE_ICON}  className="h-6 mr-2" />
                        Sign In With Google
                    </div>

        </div>
        <div className="w-full flex items-center justify-center">
          <p className="text-sm font-normal text-[#060606]">
            Dont have a account?{" "}
            <span className="font-semibold underline underline-offset-2 cursor-pointer ">
              Sign up for free
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Login;