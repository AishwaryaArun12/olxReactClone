import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { ref,uploadBytes,getDownloadURL } from "firebase/storage";
import { firebaseContext,authContext } from '../../store/Context';
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';


const Create = () => {
  const  navigate = useNavigate();
  const {storage,db} = useContext(firebaseContext)
  const [name,setName] = useState('');
  const [category,setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [image,setImage] = useState('');
  const {user} = useContext(authContext);
  const handleClick = ()=>{
    const imageRef = ref(storage, image.name);
    const pathImagesRef = ref(storage, `images/${image.name}`);
    
    uploadBytes(pathImagesRef, image).then((snapshot) => {
      console.log('Uploaded a blob or file!',snapshot);
      getDownloadURL(ref(storage, pathImagesRef))
  .then(async(url) => {
    const date = new Date();
    const docRef = await addDoc(collection(db, "products"), {
      name,
      category,
      price,
      url,
      userid : user.uid,
      createdAt : date.toDateString()
    });
    navigate('/');
  })
    });
  }

  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              onChange={(e)=>{setName(e.target.value)}}
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="category"
              onChange={(e)=>{setCategory(e.target.value)}}
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number" id="fname" name="Price" onChange={(e)=>{setPrice(e.target.value)}} />
            <br />
          
          <br />
          {image && <img alt="Posts" width="200px" height="200px" src={URL.createObjectURL(image)}></img>}
         
            <br />
            <input type="file" onChange={(e)=>{setImage(e.target.files[0]);console.log(image.name,'sdsdcsxdfcdxs');}}/>
            <br />
            <button className="uploadBtn" onClick={handleClick}>upload and Submit</button>
         
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
