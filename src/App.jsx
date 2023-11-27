import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Auth/Login/index";
import Register from "./pages/Auth/Register/index";
import CreateEventProfile from "./pages/ProfileDetail/CreateEvent";
import UserProfile from "./pages/ProfileDetail/User";
import AccountSettings from "./pages/Account Setting/accountSetting";
import "./App.css";
import Landing from "./pages/Landing";
import ScrollToTop from "./helper/ScrollToTop";
import VerifikasiAccount from "./pages/VerifikasiEmail/Index";
import Dashboard from "./pages/Dashboard";
import ForgetPassword from "./components/forgotpassword";
import PromotorLandingPage from "./pages/PromotorLandingPage";
import CreateEvent from "./pages/createEventPage";
import CreateEventDetails from "./pages/createEventDetailsPage";
import ManageEvent from "./pages/ManageEventPage";
import DetailEvent from "./pages/DetailEvent";
import FindEvent from "./pages/FindEvent";
import PublishPage from "./pages/PublishEvent";
import ManageTicket from "./pages/manageTicketPage";
import LoginDummy from "./pages/LoginDummy";
import PageNotFound from "./pages/PageNotFound";


function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Landing />} />
        <Route path="/create_event_profile" element={<CreateEventProfile />} />
        <Route path="/user_profile" element={<UserProfile />} />
        <Route path="/accountSettings" element={<AccountSettings />} />
        <Route path="/forget" element={<ForgetPassword />} />
        {/* ------------- punya audra --------------------- */}
        <Route path="/find-event/:loc" element={<FindEvent />} />
        <Route path="/find-event/:loc/:search" element={<FindEvent />} />
        <Route path="/event/detail/:id" element={<DetailEvent />} />
        <Route path="/auth/verify" element={<VerifikasiAccount />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* -------------- mas rama -------------------- */}
        <Route path="/dummy-login" element={<LoginDummy />} />
      {/* PROMOTOR ROUTER */}
        <Route path="/promotor" element={<PromotorLandingPage />} />
        <Route path="/promotor/manage-event" element={<ManageEvent />} />
        <Route path="/promotor/manage-ticket" element={<ManageTicket />} />
        <Route path="/promotor/create-event" element={<CreateEvent />} />
        <Route path="/promotor/create-event-details" element={<CreateEventDetails />} />
        <Route path="/promotor/publish" element={<PublishPage />} />
                {/* <Route path="/explore" /> */}
        <Route path="/*" element={<PageNotFound />} />
        <Route path="/find-event" element={<FindEvent />} />
        {/* <ScrollToTop /> */}
      </Routes>
    </>
  );
}


export default App;
