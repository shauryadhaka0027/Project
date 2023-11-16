import React from 'react'
import HomeFooter from '../Component/HomeFooter.jsx'
import HomeNavbar1 from '../Component/HomeNavabar1.jsx'
import Boxer from "../Component/Box.jsx"
import CardDetail  from "../Component/card.jsx"
import HomeNavbarMiddle from "../Component/HomeNavbarMiddle.jsx"
import Navbar from '../Component/Navbar.jsx'


const Home = () => {
  return (
    <div   >
     <Navbar/>
     <HomeNavbar1/>
     <Boxer/>
     <HomeNavbarMiddle/>
     <CardDetail/>
     <HomeFooter/>   


    </div>
  )
}
export default Home
