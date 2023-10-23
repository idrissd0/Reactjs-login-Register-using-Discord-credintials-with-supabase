import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashborad from "./components/dashboard.js";
import Login_Register from "./components/Login-Register/Login_Register";

function App() {
  return (
    <div className="App">
    <Router> {/* Wrap your application with the Router component */}
      <Routes>
        <Route path="/" element={<Dashborad />} />
        <Route path="/login" element={<Login_Register />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
