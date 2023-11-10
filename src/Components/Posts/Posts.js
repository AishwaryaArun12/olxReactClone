import React, { useContext, useEffect, useState } from 'react';
import {firebaseContext} from '../../store/Context'
import Heart from '../../assets/Heart';
import { getDocs, collection } from "firebase/firestore";
import './Post.css';
import { useNavigate } from 'react-router-dom';
import { postContext } from '../../store/Post';

function Posts() {
  const [post,setPost]  = useState();
  const {db} = useContext(firebaseContext);
  const {postDetail,setPostDetail} = useContext(postContext);
  const navigate = useNavigate();
  useEffect(()=>{
    
    const querySnapshot =  getDocs(collection(db, "products")).then(result=>{
     const products = result.docs.map(i=> {return {...i.data(),id: i.id}});
     setPost(products);
    })
  },[])

  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
          {post && post.map(i=>{
            return (
              <div
            className="card"
          onClick={()=>{

            setPostDetail(i);
            navigate('/view')}} >
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src={i.url} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; {i.price}</p>
              <span className="kilometer">{i.category}</span>
              <p className="name"> {i.name}</p>
            </div>
            <div className="date">
              <span>{i.createdAt}</span>
            </div>
          </div>
            )
          })}
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
