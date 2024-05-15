import React, { useState } from "react";
import './Login.css'; 
import MainPage from "./Moviespage/MainPage";
 
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userCredentialsCorrect, setUsernameCredentialsCorrect] = useState(false);
 
  const handleLogin = (event) => {
    event.preventDefault(); // Prevent the form from being submitted to the server
    if (username === 'admin' && password === '12345678') {
        setUsernameCredentialsCorrect(true);
    } else {
      alert('Invalid credentials');
    }
  };

  if (userCredentialsCorrect == true){
    return <MainPage/> 
  }

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>anime.world</h2>
        <form onSubmit = {handleLogin}> 
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input onChange = { (e) => setUsername(e.target.value) } type="text" id="username" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input onChange = { (e) => setPassword(e.target.value) } type="password" id="password" />
          </div>
          
          <button  id="myloginsubmitbutton" className="input-group" classnametype="submit">Login</button>
        </form>
      </div>
    </div>
  );
};
 
export default Login;