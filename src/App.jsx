import "./App.css";
import Landing from "./pages/Landing";
import PromotorLandingPage from "./pages/PromotorLandingPage";
import { Route, Routes } from "react-router-dom";
import CreateEvent from "./pages/createEventPage";
import CreateTicket from "./pages/CreateTicketPage";
import CreateEventDetails from "./pages/createEventDetailsPage";
import ManageEvent from "./pages/ManageEventPage";
import ManageTicket from "./pages/manageTicketPage";

function App() {
  return (
    <>
      <Routes>
        
        <Route path="/" element={<PromotorLandingPage />} />
        <Route path="/promotor" element={<PromotorLandingPage />} />
        <Route path="/manage/event" element={<ManageEvent />} />
        <Route path="/manage/ticket" element={<ManageTicket />} />
        <Route path="/create/event" element={<CreateEvent />} />
        <Route path="/create/event/details" element={<CreateEventDetails />} />
        <Route path="/create/ticket" element={<CreateTicket />} />
        <Route path="/explore" />
        <Route path="/event/detail/:id" />
      </Routes>
    </>
  );
}

export default App;
