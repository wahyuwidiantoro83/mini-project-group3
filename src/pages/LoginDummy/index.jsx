import axios from "axios";
import React, { useState } from "react";
import {  API_URL_PROMOTOR } from "../../helper";
import { useNavigate } from "react-router-dom";

const LoginDummy = () => {
    const navigate = useNavigate()
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        type="button"
        onClick={async() => {
            try {
                const response = await API_URL_PROMOTOR.post("/", { email: email, password: password })
                console.log("FE response", response);
                if(response.data.success===true){
                    localStorage.setItem("token",response.data.result)
                    const savedToken = localStorage.getItem("token")
                    console.log("ini savedtoken",savedToken);
                    navigate("/promotor")
                }
            } catch (error) {
                console.log("error login", error);
            }           
        }}
      >
        Login
      </button>
    </div>
  );
};

export default LoginDummy;
