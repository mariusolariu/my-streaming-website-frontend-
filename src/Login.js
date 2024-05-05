import React from 'react';
import './Login.css'; // Make sure to create this CSS file
 
const Login = () => {
  return (
    <div className="login-container">
      <div className="login-form">
        <h2>anime.world</h2>
        <form>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          
          <button  className="input-group" classNamentype="submit">Login</button>
        </form>
      </div>
    </div>
  );
};
 
export default Login;