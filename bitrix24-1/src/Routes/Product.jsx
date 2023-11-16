import React from 'react'
import    styles from "../Css/product.module.css"
import Collaboration from '../tasks/Collaboration.jsx'
import Task from '../tasks/Task.jsx'
import Crm from '../tasks/Crm.jsx'
import Bar from '../tasks/Bar.jsx'
import Bar2 from '../tasks/Bar2.jsx'
import HomeFooter from '../Component/HomeFooter.jsx'
import Navbar from '../Component/Navbar.jsx'

const Product = () => {
  return (
    <div>
    <Navbar/>
     
    <div className={styles.mainfirst}>
    <div className={styles.main}>
     <div className={styles.first}>
      <div className={styles.twodiv}>
      <span className={styles.span1}>The Only Business Software You'll Need</span>
       <div className={styles.twodiv}> <span  className={styles.span2}> Replace a multitude of services and apps with a single ecosystem for your business to work in. Explore the tools of Bitrix24</span></div>
     
      </div>
  
     
     
     <div className={styles.picture}>
     <img src="https://www.bitrix24.in/images/content_en/animations/tools/index/tools_main.svg?1692203498246" alt="" />
     </div>
     </div>
      <div className={styles.bottom}>
        
        <div>Collaboration</div>
        <div> Task and Project</div>
        <div>CRM</div>
        <div>Contact center</div>
        <div>Website</div>
        <div>HR Automation</div>  
        
      </div>
    </div>
      <div>
      <Collaboration/>
      </div>
      <div>
      <Task/>
      </div> 
      <div>
        <Crm/>
       
      </div>
      <div >
        <div style={{marginTop:"7rem"}}>
        <Bar/>
        <br />
        <Bar2/>
        </div>
        <div>
          <HomeFooter/>
        </div>
          
        </div>
      
    </div>
    </div>
  )
}

export default Product
