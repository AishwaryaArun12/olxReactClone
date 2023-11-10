import React, { useContext, useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import { authContext } from './store/Context';
import Post from './store/Post';
/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import SignupPage from './Pages/Signup';
import  Login from './Pages/Login';
import View from './Pages/ViewPost'
import { onAuthStateChanged } from "firebase/auth";
import {auth} from './firebase/config';
import Create from './Pages/Create'
import { PostContext } from './store/Post';

function App() {
  const {setUser} = useContext(authContext);
  
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
        console.log(user);
      } else {
        // User is signed out
        // ...
      }
    });
  })
  return (
    <div>
      <Post>

      <Router>
        <Routes>
          <Route exact path = '/' element={<Home />} />
        </Routes>
        <Routes>
          <Route exact path = '/signup' element={<SignupPage />} />
        </Routes> 
        <Routes>
          <Route exact path = '/login' element={<Login />} />
        </Routes>
        <Routes>
          <Route exact path = '/sell' element={<Create />} />
        </Routes>
        <Routes>
          <Route exact path = '/view' element={<View />} />
        </Routes>
        
      </Router>
      </Post>
    </div>
  );
}

export default App;
