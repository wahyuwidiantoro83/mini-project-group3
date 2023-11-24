import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Auth/Login/index";
import Register from "./pages/Auth/Register/index";
import Modal from "./components/Modal";
import CreateEventProfile from "./pages/ProfileDetail/CreateEvent";
import UserProfile from "./pages/ProfileDetail/User";
import AccountSettings from "./pages/Account Setting/accountSetting";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/modal" element={<Modal />}/>
        <Route path="/create_event_profile" element={<CreateEventProfile />}/>
        <Route path="/user_profile" element={<UserProfile/>}/>
        <Route path="/accountSettings" element={<AccountSettings/>}/>
      </Routes>
    </>
  );
}

export default App;
