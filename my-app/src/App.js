import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Profile from "./Components/Profile/Profile";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Homepage from "./Components/HomePage/Homepage";
import Claim from "./Components/Claim/Claim";
import InsuranceDetails from "./Components/HomePage/InsuranceDetails";
import TravelInsurance from "./Components/InsuranceProduct/Travel";
import HomeInsurancePage from "./Components/InsuranceProduct/Home";
import MotorInsurance from "./Components/InsuranceProduct/Motor";
import HealthInsurancePage from "./Components/InsuranceProduct/Health";
import PaymentPage from "./Components/InsuranceProduct/PaymentPage";

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const [userstate] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });
  
  const location = useLocation();

  if (!userstate || !userstate._id) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  return children;
};

function App() {
  const [userstate, setUserState] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : {};
  });
  const [paymentStatus, setPaymentStatus] = useState("");

  // Handle user login
  const handleLogin = (userData) => {
    setUserState(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  // Handle user logout
  const handleLogout = () => {
    setUserState({});
    localStorage.removeItem('user');
  };

  // User data to pass to components
  const userData = {
    isLoggedIn: !!userstate._id,
    username: userstate.fname,
    userId: userstate._id
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route 
            path="/" 
            element={
              <Homepage 
                isLoggedIn={userData.isLoggedIn}
                username={userData.username}
                onLogout={handleLogout}
              />
            } 
          />
          <Route 
            path="/login" 
            element={<Login setUserState={handleLogin} />} 
          />
          <Route path="/signup" element={<Register />} />
          <Route 
            path="/home" 
            element={
              <Homepage 
                isLoggedIn={userData.isLoggedIn}
                username={userData.username}
                onLogout={handleLogout}
              />
            } 
          />

          {/* Protected Routes */}
          <Route
            path="/InsuranceDetails"
            element={
              <ProtectedRoute>
                <InsuranceDetails />
              </ProtectedRoute>
            }
          />

          <Route
            path="/Claim"
            element={
              <ProtectedRoute>
                <Claim />
              </ProtectedRoute>
            }
          />

          <Route
            path="/homeI"
            element={
              <ProtectedRoute>
                <HomeInsurancePage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/motorI"
            element={
              <ProtectedRoute>
                <MotorInsurance />
              </ProtectedRoute>
            }
          />

          <Route
            path="/healthI"
            element={
              <ProtectedRoute>
                <HealthInsurancePage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/travelI"
            element={
              <ProtectedRoute>
                <TravelInsurance />
              </ProtectedRoute>
            }
          />

          <Route
            path="/payment"
            element={
              <ProtectedRoute>
                <PaymentPage 
                  amount={100} 
                  onSuccess={(status) => setPaymentStatus(status)} 
                />
              </ProtectedRoute>
            }
          />

          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile 
                  setUserState={handleLogout} 
                  username={userData.username}
                />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;