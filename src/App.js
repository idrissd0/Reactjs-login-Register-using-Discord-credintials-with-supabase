import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashborad from "./components/dashboard.js";
import Login from "./components/Login.js";

function App() {
  return (
    <div className="App">
    <Router> {/* Wrap your application with the Router component */}
      <Routes>
        <Route path="/" element={<Dashborad />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
