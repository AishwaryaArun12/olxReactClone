import React, { useContext, useEffect, useState } from 'react';
import {postContext} from '../../store/Post'
import './View.css';
import { collection, query, where, getDocs } from "firebase/firestore";
import {db,auth} from '../../firebase/config';
import { onAuthStateChanged } from "firebase/auth";

function View() {
  
  const [user,setUser] = useState();
  const {postDetail} = useContext(postContext);
useEffect(()=>{
  const id = postDetail.userid;
  const q = query(collection(db, "users"), where("id", "==", id));

const querySnapshot = getDocs(q).then(result=>{
  
  onAuthStateChanged(auth, (userDetail) => {
    if (userDetail) {
      setUser({...result.docs[0].data(),userDetail})
    } else {
      // User is signed out
      // ...
    }
  });

  
})
},[])

  return (
   user && <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetail.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetail.price} </p>
          <span>{postDetail.name}</span>
          <p>{postDetail.category}</p>
          <span>{postDetail.createdAt}</span>
        </div>
        <div className="contactDetails">
          <p>Seller details</p>
          <p>{user.userDetail.displayName}</p>
          <p>{user.phone}</p>
        </div>
      </div>
    </div>
  );
}
export default View;
