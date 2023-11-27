import "./App.css";
import Landing from "./pages/Landing";
import DetailEvent from "./pages/DetailEvent";
import { Route, Routes } from "react-router-dom";
import FindEvent from "./pages/FindEvent";
import ScrollToTop from "./helper/ScrollToTop";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/find-event/:loc" element={<FindEvent />} />
        <Route path="/find-event/:loc/:search" element={<FindEvent />} />
        <Route path="/event/detail/:id" element={<DetailEvent />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
