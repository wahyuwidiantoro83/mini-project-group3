import "./App.css";
import Landing from "./pages/Landing";
import DetailEvent from "./pages/DetailEvent";
import { Route, Routes } from "react-router-dom";
import FindEvent from "./pages/FindEvent";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/find-event" element={<FindEvent />} />
        <Route path="/event/detail/:id" element={<DetailEvent />} />
      </Routes>
    </>
  );
}

export default App;
