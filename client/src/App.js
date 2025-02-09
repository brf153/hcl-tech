import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AuthForm from "./pages/AuthForm";
import Schedule from "./pages/Schedule";
import Report from "./pages/Report";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<AuthForm />} />
        <Route path="/" element={<Home />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/reports" element={<Report />} />
      </Routes>
    </Router>
  );
}

export default App;
