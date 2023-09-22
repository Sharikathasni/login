import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route index element={<Navigate to="/login" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login/*" element={<Login />} /> {/* Change the route path here */}
    </Routes>
  );
}

export default App;
