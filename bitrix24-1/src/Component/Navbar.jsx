  import {Link} from "react-router-dom"
  import { FaUser } from "react-icons/fa";
  import { BiWorld } from "react-icons/bi";
 import styles from "../Css/Navabar.module.css"
 import { IoIosSearch } from "react-icons/io";
 import { FiAlignJustify } from "react-icons/fi";
import { useState } from "react";
  
  export default function Navbar(){
    const [show,setShow]=useState(false)
    return <>
     <nav className={styles.nav}>
    <div className={styles.logo} >
    <div className={styles.mobileHam}><FiAlignJustify /></div>
    <div>
    <Link to="/"> <img src="https://logowik.com/content/uploads/images/bitrix241512.jpg" alt="" /></Link>
    </div>
    
   
        

    </div>
    <div  className={styles.menu}>
     
      
    <div><Link className={styles.link}   to="/Product">PRODUCT</Link></div>
    <div><Link className={styles.link}  to="/Pricing">PRICING</Link></div>
    <div><Link className={styles.link}  to="/solution">SOLUTIONS</Link></div>
    <div><Link className={styles.link}  to="/Partner">PARTNER</Link></div>
    <div><Link className={styles.link}  to="/App">APP</Link></div>
    <div><Link className={styles.link}  to="/Blogs">BLOGS</Link></div>
    <div><Link className={styles.link}  to="/Support">SUPPORT</Link></div>
    

    </div>
   
    <div className={styles.button} >
    <div className={styles.search}><Link to="Search"><IoIosSearch/></Link></div>
    <button className={styles.btnsld}><Link to="/Signup"> START FOR FREE</Link></button>
      <div className={styles.unstyled}>  <Link to="/Login"><FaUser />
        LOG IN </Link>
      </div>
      <div className={styles.unstyled} ><BiWorld />
        EN
      </div>
    </div>
   </nav>
    
    
    </>
}
