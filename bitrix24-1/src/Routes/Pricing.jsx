import React, { useContext } from 'react'
import "../Css/Pricing.css"
import { AppContext } from '../Context/AppContextProvider'
import { Navigate } from 'react-router-dom'

const Pricing = () => {
  const {isAuth}=useContext(AppContext)
  if(!isAuth){
    return <Navigate to="/signup" />
  }
  return (
    <div>
      <div className='second'>
        <p>Pricing</p>
      </div>
      <div >

      </div>
    </div>
  )

}

export default Pricing
