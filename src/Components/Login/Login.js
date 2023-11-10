import React, { useContext, useState } from 'react';

import Logo from '../../olx-logo.png';
import './Login.css';
import { signInWithEmailAndPassword } from "firebase/auth";
import {firebaseContext} from '../../store/Context';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email ,setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {auth} =useContext(firebaseContext);
  const navigate = useNavigate()

  const handleClick = (e)=>{
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    navigate('/');
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
  }); 
  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            onChange={(e)=>{setEmail(e.target.value)}}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            onChange={(e)=>{setPassword(e.target.value)}}
          />
          <br />
          <br />
          <button onClick={handleClick}>Login</button>
        </form>
        <a href='/signup'>Signup</a>
      </div>
    </div>
  );
}

export default Login;
