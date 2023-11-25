import React from "react";
import axios from "axios";



const VerifikasiAccount = () => {
    const currentLocation = window.location;
    const params = new URLSearchParams(currentLocation.search);
    // dapatkan nilai paramater "token"
    const paramsToken = params.get("token")
    const verifikasi = async () => {
        try {
            const response = await axios.post("http://localhost:2023/auth/verify", 
            {}, 
            { headers: { Authorization: `Bearer ${paramsToken}` } }
            );
            if (response.data.message.includes("verification")) {
                alert("Your account has been verification");
            } else {
                alert("An error occurred while verification your account");
            }
        } catch (error) {
            return res.status(500).send({
                success: false,
                message: "Error verification account"
        })
    }
    }
    return (
        <div className="flex flex-col justify-center items-center text-center h-100">
            <h1 className="text-xl">Verifikasi Account</h1>
            <button 
            type="button"
            // onClick={}
            className="bg-blue-500 hover:bg-blue-500 text-black w-full font-bold rounded focus:outline-none"
            >
                Verifikasi Account
            </button>
        </div>
    )
};

export default VerifikasiAccount;