import React from 'react';
import styles from "../Css/Signup.module.css";
import { useState } from 'react';
import { useContext } from 'react';
import { AppContext } from '../Context/AppContextProvider';
import Navbar from '../Component/Navbar';

const Signup = () => {
  const [state,setState]=useState({email:"",password:""})

  const {setUserDetail, userDetail}=useContext(AppContext)
  const handleChange = (el) => {
   
    setState({...state,[el.target.name]:el.target.value})
  };
  const handleSubmit=(e)=>{
    e.preventDefault()
    setUserDetail(state)
    console.log(userDetail)
    reset();
    

  }


  return (
   <div>
    <Navbar/>
    <div className={styles.container}>
      <div className={styles.sec1}>

      </div>
      <div className={styles.sec2}>
        <div>
          <h1>Bitrix24 registration</h1>
          <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type="text" name="email" placeholder="Email" />
            <br />
            <input  onChange={handleChange}  type="password" name="password" placeholder="Password" />
            <br />
          <input type="Submit" />
          </form>
        </div>
        
      </div>
    </div>
    </div>
  );
};

export default Signup;
