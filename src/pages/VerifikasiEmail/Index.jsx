import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

const VerifikasiAccount = () => {
  const currentLocation = window.location;
  const params = new URLSearchParams(currentLocation.search);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const verifikasi = async () => {
      try {
        const response = await axios.post(
          "http://localhost:2066/auths/verify",
          {},
          { headers: { Authorization: `Bearer ${searchParams.get("token")}` } }
        );
        if (response.data.message.includes("verification")) {
          alert("Your account has been verified");
          navigate("/login");
        } else {
          alert("An error occurred while verifying your account");
        }
      } catch (error) {
        console.log("Error verifying account:", error.message);
        alert("An error occurred while verifying your account");
      }
    };

    verifikasi();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center text-center h-100">
      <h1 className="text-xl">Verifikasi Account</h1>
      <button
        onClick={navigate("/login")}
        type="button"
        className="bg-blue-500 hover:bg-blue-500 text-black w-full font-bold rounded focus:outline-none"
      >
        Verifikasi Account
      </button>
    </div>
  );
};

export default VerifikasiAccount;
