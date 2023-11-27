import "./App.css";
import Landing from "./pages/Landing";
import PromotorLandingPage from "./pages/PromotorLandingPage";
import { Route, Routes } from "react-router-dom";
import CreateEvent from "./pages/createEventPage";
import CreateEventDetails from "./pages/createEventDetailsPage";
import ManageEvent from "./pages/ManageEventPage";
import DetailEvent from "./pages/DetailEvent";
import FindEvent from "./pages/FindEvent";
import PublishPage from "./pages/PublishEvent";
import ManageTicket from "./pages/manageTicketPage";
import LoginDummy from "./pages/LoginDummy";
function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<LoginDummy />} />
      {/* PROMOTOR ROUTER */}
        <Route path="/promotor" element={<PromotorLandingPage />} />
        <Route path="/promotor/manage-event" element={<ManageEvent />} />
        <Route path="/promotor/manage-ticket" element={<ManageTicket />} />
        <Route path="/promotor/create-event" element={<CreateEvent />} />
        <Route path="/promotor/create-event-details" element={<CreateEventDetails />} />
        <Route path="/promotor/publish" element={<PublishPage />} />
              
        
        <Route path="/explore" />
        {/* <Route path="/event/detail/:id" /> */}
        {/* <Route path="/" element={<Landing />} /> */}
        <Route path="/find-event" element={<FindEvent />} />
        <Route path="/event/detail/:id" element={<DetailEvent />} />
      </Routes>
    </>
  );
}

export default App;
