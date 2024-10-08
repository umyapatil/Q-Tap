import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminLogin from './components/Login/AdminLogin'; // Create this component next
import AdminSignup from './components/Signup/AdminSignup'; // Create this component next
import StudentLogin from './components/Login/StudentLogin';
import StudentSignup from './components/Signup/StudentSignup';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />

        {/* admin */}
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-signup" element={<AdminSignup />} />

        {/* student */}
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/student-signup" element={<AdminSignup />} />

      </Routes>
    </Router>
  );
}

export default App;
