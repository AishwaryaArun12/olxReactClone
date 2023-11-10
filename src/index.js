import React from 'react';
import ReactDOM from 'react-dom/client';
import { firebaseContext } from './store/Context';
import {auth,db,storage} from './firebase/config';
import App from './App';
import Context from './store/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <firebaseContext.Provider value={{auth,db,storage}}>
      <Context> 
        <App />
      </Context>

    </firebaseContext.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

