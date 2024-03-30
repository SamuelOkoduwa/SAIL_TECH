import React, { useState } from 'react';
import Login from "../components/Login/Login";

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogin = () => {
    // Your login logic here, set isLoggedIn to true if login is successful
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Your logout logic here, set isLoggedIn to false
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h1>Welcome to the Dashboard!</h1>
          <button onClick={handleLogout}>Log In</button>
        </div>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default Home;
