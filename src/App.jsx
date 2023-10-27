import "./App.css";
import Landing from "./pages/Landing";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/explore" />
        <Route path="/event/detail/:id" />
      </Routes>
    </>
  );
}

export default App;
