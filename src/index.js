import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css'; 
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import AdminLogin from "./components/AdminLogin"; 
import App from './App'

function AppWrapper() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    
    setLoggedIn(true);
  };

  return loggedIn ? <App /> : <AdminLogin onLogin={handleLogin} />;
}

ReactDOM.render(<AppWrapper />, document.getElementById('root'));
