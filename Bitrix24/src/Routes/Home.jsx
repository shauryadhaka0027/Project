import Boxer from "../component/Box.jsx"
import CardDetail from "../component/card.jsx"
import HomeFooter from "../component/HomeFooter"
import HomeNavbarMiddle from "../component/HomeNavbarMiddle.jsx"
import HomeNavbar from "../component/HomeNavbar.jsx"
import HomeNavbar1 from "../component/HomeNavabar1.jsx"
import { Link } from "react-router-dom"


export default function Home(){
    return <>
    <Link to="./"> <HomeNavbar/>
     <HomeNavbar1/>
     <Boxer/>
     <HomeNavbarMiddle/>
     <CardDetail/>
     <HomeFooter/></Link>


     
    
    </>
}