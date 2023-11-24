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
function App() {
  return (
    <>

      <Routes>
        
        <Route path="/" element={<PromotorLandingPage />} />


      {/* PROMOTOR ROUTER */}
        <Route path="/promotor" element={<PromotorLandingPage />} />
        <Route path="/manage/event" element={<ManageEvent />} />
        <Route path="/manage/ticket" element={<ManageTicket />} />
        <Route path="/create/event" element={<CreateEvent />} />
        <Route path="/create/event/details" element={<CreateEventDetails />} />
        <Route path="/publish" element={<PublishPage />} />
              
        
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
