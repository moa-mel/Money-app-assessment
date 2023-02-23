import  {useState, useEffect} from "react"
import logo2 from "../images/CN.png"
import long from "../images/Rectangle 3221.png"
import medium from "../images/Rectangle 3222.png"
import notify from "../images/📫 Notifications.png"
import hurray from "../images/Group 8493.png"
import bomb from "../images/Group 8493 (1).png"
import star from "../images/Group 8493 (2).png"
import soon from "../images/Frame 9394.png"
import Logo from "../images/MoneeyAppIcon.png"
import styles from "./Dashboard.module.css"
import CompanyInfo from "../graphql"
import { useQuery } from '@apollo/client';
import { GET_COMPANY_INFO } from "../graphql/queries"

export function Dashboard () {
   const data = useQuery(GET_COMPANY_INFO);
   /* const [data, setData] = useState([]) */
  /*   const loadCompanyInfo = async () => {
    const companyInfo = await CompanyInfo.exampleQuery(1);
    setData(companyInfo);
   }

   useEffect(() => {
    loadCompanyInfo();
   }, [])
   console.log("data", data);
*/
  return (
    <div className={styles.dashwrapper}>
      
      <div className={styles.dashcontainer}>
      <div className={styles.imglogo}>
      <img className={styles.logo} src={Logo} alt=""/>
      </div>
      <br/>
      <div className={styles.dashsides}>
      { data && data.company.map(item => (
      <>
        <div  className={styles.dashleft}>
          <div className={styles.dashleftimg}>
        <img src={logo2} alt=""/>
        <p>{item.name}</p>
        </div>
        <div className={styles.leftceo}>
         <h3>CEO</h3>
         <p>{item.ceo}</p>
        </div>
        <div className={styles.leftcto}>
         <h3>CTO</h3>
         <p>{item.cto}</p>
         </div>    
        </div>
        </>
       ))} 
        <div className={styles.dashright}>
        <div className={styles.dashrightimg}>
        <img src={soon} alt=""/>
        </div>
        <br/>
        <br/>
        
        <div className={styles.dashrightmiddle}>
         <div className={styles.dashrightfirst}>
          <img src={hurray} alt=""/>
          <div>
           <img src={long} alt=""/>
           <img src={medium} alt=""/>
          </div>
         </div>
         <div className={styles.dashrightsecond}>
          <img src={bomb} alt=""/>
          <div>
           <img src={long} alt=""/>
           <img src={medium} alt=""/>
          </div>
         </div>
         <div className={styles.dashrightthird}>
         <img src={star} alt=""/>
         <div>
           <img src={long} alt=""/>
           <img src={medium} alt=""/>
          </div>
         </div>
        </div>
        <br/>
        <div className={styles.dashrightdown}>
        <img src={notify} alt="" />
        <p>Receive notifcations about your rider performance, efficiency reviews and a lot more</p>
        </div>
        </div>
      </div>
      </div>
      
    </div>
  )
}

