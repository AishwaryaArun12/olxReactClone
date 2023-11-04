import React, { useState } from 'react';
import Logo from '../../olx-logo.png';
import './Signup.css';

export default function Signup() {
  const [userName, setUserName] = useState('');
  const [email,setEmail] = useState('');
  const [phone,setPhone] = useState('');
  const [password,setPassword] = useState('');
  const handleClick = (e)=>{
    e.preventDefault();
    console.log(userName)
  }
  return (
    <div >
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form style={{width : '250px'}} onClick={handleClick}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="name"
            onChange={(e)=>setUserName(e.target.value)}
          />
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="email"
            name="email"
            onChange={(e)=>setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="phone">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="phone"
            name="phone"
            onChange={(e)=>setPhone(e.target.value)}
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="password"
            name="password"
            onChange={(e)=>setPassword(e.target.value)}
          />
          <br />
          <br />
          <button type='submit'>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}
