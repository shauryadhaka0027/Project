import React from 'react'
import styles from "../Css/Product.module.css"
import styles1 from "../Css/Collo.module.css"
import { GoFileDirectory } from "react-icons/go";
import { AiOutlineCloud} from "react-icons/ai";
import {LuFileSpreadsheet} from "react-icons/lu"
import  {SlCalender } from "react-icons/sl"
import {CiSquareMore} from "react-icons/ci"
import { useNavigate } from 'react-router-dom';
const Collaboration = () => {
  const navigate = useNavigate();
  const handleButton = () => {
    navigate("/signup");
  };

  
  return (
    <div>
        <div className={styles.middle}> 
        <div className={styles.middle1}>
        <span   className={styles.spt}>Collaboration</span>
        <br />
        <p>Virtual office for your company to work, communicate and collaborate - at home or in the office.</p>
        </div>
        </div>
        <div  className={styles1.halfSec}>
           <div >
            <span  className={styles1.fonts} >HD video calls & conferences</span>
            <br />
            <p className={styles1.para}  >Create conferences for up to 48 participants, talk without any time limit, record your calls, and change backgrounds.</p>
            <div className={styles1.divmar} >
              <span className={styles1.fonts} > Chat</span>
              <br />
              <p  className={styles1.para} >Private and group chats - a quick and easy way to discuss ideas and share files.</p>
            </div>
            <div className={styles1.divmar}> 
            <span className={styles1.fonts} >Worktime tracking </span>
              <br />
              <p className={styles1.para}  >Your team can start/pause/finish their working day using an online time clock built into Bitrix24.</p>
            </div>
          </div>
          <div>
            <img  className={styles1.biimg}  src="https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/tools/index/tools_1_collaboration.1366w.jpg.webp?1696059468000" alt="" />

          </div>
          

        </div>
        <div className={styles1.box}>
          <div className={styles1.boxer}>
            <div >
             <GoFileDirectory/>
             <br />
             <p>Online Document</p>
            </div>
            <div>
              <AiOutlineCloud/>
              <br />
              <p>Cloud Stroage</p>
            </div>
            
              <div>
              <LuFileSpreadsheet/>
              <br />
               <p>Work Report</p>
            </div>
            <div>
              <SlCalender/>
              <br />
              <p>Calendar</p>
            </div>
            <div>
              <CiSquareMore/>
              <br />
              <p>Workflow Automation</p>
            </div>


          </div>

          </div>
          <div   className={styles1.btn}> 
          <div>
          <button onClick={handleButton} style={{background:"#bdf300"}}> REGISTER FREE </button>
            <button   style={{color:"white" , background:"#3fc0f0"}}> LEARN MORE </button>
          </div>
           

          </div>

         </div>
  )
}

export default Collaboration
