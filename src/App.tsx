import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Help from './pages/Help';
import ForgotPassword from './pages/ForgotPassword';
import Register from './pages/Register';
import ScoreQuery from './pages/ScoreQuery';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/help" element={<Help />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/score-query" element={<ScoreQuery />} />
      </Routes>
    </Router>
  );
}
