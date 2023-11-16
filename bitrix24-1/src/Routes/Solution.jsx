import React from 'react'
import { Box } from "@chakra-ui/react"
import style from "../Css/Solution.module.css"
import HomeFooter from "../Component/HomeFooter.jsx"
import Navbar from '../Component/Navbar.jsx'
const Solution = () => {
  return (
  
    <div>
      <Navbar/>
      <div style={{marginTop:"15rem"}}>
      <Box h={100}  w='100%' p={4} color='black' align="center"  mt={10} fontSize={30}>
       Bitrix24 solutions
       </Box>
      </div>

      <div  className={style.carder}>
        <div  className={style.section1}>
          <div>
            <h2>By Role</h2>
            <div>
              <button>Marketing</button>
              <button>HR</button>
            </div>
              <button>Project_Mangement</button>
              <br />
              <button> Customer_Service</button>

          </div>

          <div>
          <img src="https://www.bitrix24.in/upload/optimizer/converted/images/content_en/solutions/main_background-img-1.png.webp?1696059499000" alt="" />
          </div>

        </div>
        <div className={style.section2}>
        
        <div>
            <h2>By Role</h2>
            <div>
              <button>Marketing</button>
              <button>HR</button>
            </div>
              <button>Project_Mangement</button>
              <br />
              <button> Customer_Service</button>

          </div>

         <div></div>

        </div>


      </div>
       
      <div  className={style.carder}>
      <div className={style.section2}>
        
        <div>
            <h2>By industry</h2>
            <div>
              <button>Legal</button>
              <button>Retail</button>
              <button>Travel</button>
            </div>
              <button>Transportation</button>
              <br />
              <button> Restaurant</button>
              <button>Remote Work</button>

          </div>

         <div></div>

        </div>




        <div  className={style.section1}>
          <div>
            <h2>By tool</h2>
            <div>
              <button>Telephony</button>
              <button>CRM</button>
            </div>
              <button>Calender</button>
              
              <button> contact Center</button>
              <br />
              <button>website builder</button>

          </div>

          <div>
          <img src="https://www.bitrix24.in/upload/optimizer/converted/images/content_en/solutions/main_background-img-2.png.webp?1696059499000" alt="" />
          </div>

        </div>
      


      </div>
      
      <div  className={style.carder}>
      <div className={style.section21}>
        
        <div>
            <h2>By business size</h2>
            <div>
              <button>solo enterprenuer</button>
              <button>small bussiness</button>
            
            </div>
              <button>Enterprise</button>
              <br />
             

          </div>

         <div></div>

        </div>




        <div  className={style.section12}>
         
          <div  >
          <img className={style.imgge} src="https://talentmap.com/wp-content/uploads/2019/07/screenshot-docs.google.com-2019.07.02-08-59-09.png" alt="" />
          </div>

        </div>
      


      </div>
      <div>
        <HomeFooter/>
      </div>




    </div>
  )
}

export default Solution
