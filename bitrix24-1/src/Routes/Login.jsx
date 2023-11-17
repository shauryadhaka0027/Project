import React from 'react'
import styles from "../Css/Signup.module.css";
import { useState } from 'react';
import { useContext } from 'react';
import { AppContext } from '../Context/AppContextProvider';
import { Navigate } from 'react-router-dom';
import Navbar from '../Component/Navbar';

const Login = () => {
    const [state,setState]=useState({email:"",password:""})
    const {userDetail,setIsAuth,isAuth }=useContext(AppContext)
    const value = useContext(AppContext)
    console.log(value)
    const handleChange = (el) => {
     
      setState({...state,[el.target.name]:el.target.value})
    };
    console.log(state)
    const handleSubmit = (e) => {
        e.preventDefault();
        if (state.email === userDetail.email && state.password === userDetail.password) {
          console.log("login");
          setIsAuth(true)
        } else {
          alert("please sign up")
        }
        reset();
      };
      if(isAuth){
        return <Navigate to="/dashboard"/>
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
          <input type="submit" />
          </form>
        </div>
        
      </div>
    </div>
    </div>
  )
}

export default Login
