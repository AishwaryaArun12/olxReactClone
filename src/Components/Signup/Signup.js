import React, { useContext, useState } from 'react';
import Logo from '../../olx-logo.png';
import './Signup.css';
import { firebaseContext } from '../../store/Context';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { addDoc, collection } from "firebase/firestore"; 
import {useNavigate} from "react-router-dom"

export default function Signup() {

  const { auth,db } = useContext(firebaseContext);
  const navigate = useNavigate();

  const [userName, setUserName] = useState('');
  const [email,setEmail] = useState('');
  const [phone,setPhone] = useState('');
  const [password,setPassword] = useState('');
  
  const handleClick = (e)=>{
    
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(auth.currentUser,'ssssssssssssss', user);
        updateProfile(auth.currentUser, {
          displayName: userName, photoURL: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fuxwing.com%2Fwp-content%2Fthemes%2Fuxwing%2Fdownload%2Fpeoples-avatars%2Fdefault-profile-picture-grey-male-icon.svg&tbnid=fZ4g1q-dTPG_JM&vet=12ahUKEwid54jr2a6CAxV9imMGHWRyDkEQMygMegQIARBk..i&imgrefurl=https%3A%2F%2Fuxwing.com%2Fdefault-profile-picture-grey-male-icon%2F&docid=uFlPNcpUWVVlbM&w=800&h=800&q=default%20image%20profile&ved=2ahUKEwid54jr2a6CAxV9imMGHWRyDkEQMygMegQIARBk"
        }).then(async() => {
          console.log('profileUpdated');
          const docRef = await addDoc(collection(db, "users"), {
            id : user.uid,
            phone : phone
          });
          console.log(docRef , 'dsd');
          navigate('/login');
        }).catch((error) => {
         console.log('sorry , error occured in update profile');
        });
        
      })
      .catch((error) => {
        console.log(error, 'Error signing up');
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }
  return (
    <div >
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form style={{width : '250px'}} >
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="name"
            value={userName}
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
            value={email}
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
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="password"
            value={password}
            name="password"
            onChange={(e)=>setPassword(e.target.value)}
          />
          <br />
          <br />
          <button onClick={handleClick}>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}
