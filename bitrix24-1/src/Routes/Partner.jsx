import React, { useContext } from 'react'
import Navbar from '../Component/Navbar'
import { AppContext } from '../Context/AppContextProvider'
import { Navigate } from 'react-router-dom'

const Partner = () => {
  const {isAuth}=useContext(AppContext)
  if(!isAuth){
    return <Navigate to="/Blogs"/>
  }
  return (
    <div>
      <Navbar/>
    </div>
  )
}

export default Partner
