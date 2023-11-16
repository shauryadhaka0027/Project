import React from 'react'
import styles from "../Css/Product.module.css"
import styles1 from "../Css/Collo.module.css"
import { GoFileDirectory } from "react-icons/go";

import {LuFileSpreadsheet} from "react-icons/lu"
import { CiShoppingCart } from "react-icons/ci";
import {CiSquareMore} from "react-icons/ci"
import {BiSupport} from "react-icons/bi"

const Crm = () => {
  return (
    <div>
        <div className={styles.middle}> 
        <div className={styles.middle1}>
        <span   className={styles.spt}>CRM</span>
        <br />
        <p>Set tasks, receive work reports, and manage projects online with the ultimate “get things done” tool from Bitrix24.</p>
        </div>
        </div>
        <div  className={styles1.halfSec1}>

        <div>
            <img  className={styles1.biimg} src="https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/tools/index/tools_2_crm.1366w.jpg.webp?1696059470000" alt="" />

        </div>

        <div >
            <span  className={styles1.fonts} >Lead acquisition</span>
            <br />
            <p className={styles1.para}  >Create conferences for up to 48 participants, talk without any time limit, record your calls, and change backgrounds.</p>
            <div className={styles1.divmar} >
              <span className={styles1.fonts} >Lead management</span>
              <br />
              <p  className={styles1.para} >Private and group chats - a quick and easy way to discuss ideas and share files.</p>
            </div>
            <div className={styles1.divmar}> 
            <span className={styles1.fonts} >Sales automation </span>
              <br />
              <p className={styles1.para}  >Your team can start/pause/finish their working day using an online time clock built into Bitrix24.</p>
            </div>
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
              <CiShoppingCart/>
              <br />
              <p>Sale Center</p>
            </div>
            
              <div>
              <LuFileSpreadsheet/>
              <br />
              <p>Cloud Stroage</p>
            </div>
            <div>
              <BiSupport/>
              <br />
              <p>Customer Support</p>
            </div>
            <div>
              <CiSquareMore/>
              <br />
              <p>Cloud Stroage</p>
            </div>


          </div>

          </div>
          <div   className={styles1.btn}> 
          <div>
          <button style={{background:"#bdf300"}}> REGISTER FREE </button>
            <button   style={{color:"white" , background:"#3fc0f0"}}> LEARN MORE </button>
          </div>
           

          </div>
    </div>
  )
}
  export default Crm