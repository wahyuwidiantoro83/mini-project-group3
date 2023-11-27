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
import PageNotFound from "./pages/PageNotFound";
import ScrollToTop from "./hooks/scrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dummy-login" element={<LoginDummy />} />
        {/* PROMOTOR ROUTER */}
        <Route path="/promotor" element={<PromotorLandingPage />} />
        <Route path="/promotor/manage-event" element={<ManageEvent />} />
        <Route path="/promotor/manage-ticket" element={<ManageTicket />} />
        <Route path="/promotor/create-event" element={<CreateEvent />} />
        <Route path="/promotor/create-event-details" element={<CreateEventDetails />} />
        <Route path="/promotor/publish" element={<PublishPage />} />
        <Route path="/find-event/:loc" element={<FindEvent />} />
        <Route path="/find-event/:loc/:search" element={<FindEvent />} />
        <Route path="/event/detail/:id" element={<DetailEvent />} />
        <Route path="/*" element={<PageNotFound />} />
        <Route path="/find-event" element={<FindEvent />} />
      </Routes>
    </>
  );
}

export default App;
