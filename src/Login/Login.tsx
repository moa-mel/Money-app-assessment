import React, { useContext, useState } from "react";
import Logo from "../images/MoneeyAppIcon.png"
import Frame1 from "../images/Frame 8758.png"
import Frame2 from "../images/Frame 8756.png"
import Frame3 from "../images/Frame 8755.png"
import styles from "./Login.module.css"
import Vector1 from "../images/Vector1.png"
import {Icon} from "react-icons-kit"
import {eye} from "react-icons-kit/feather/eye"
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/user.context";
import { UserContextT } from "../types";
import { initialUser } from "../context/user.context";

export function Login() {

  const [user, setUser] = useState(initialUser);
  const { LoginUser } = useContext<UserContextT>(UserContext);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    LoginUser(user);
    navigate("/dashboard");
  };

  return (
       <div className={styles.wrapper}>
    <div className={styles.container}>
    <div className={styles.left}>
    <div className={styles.logoimg}>
      <img className={styles.logo} src={Logo} alt=""/>
      </div>
      <div className={styles.leftparagh}>
       <h2 className={styles.create}>Hi there, see what’s new </h2>
       <br/>
       <p className={styles.reg}>Here’s how Foodcourt helps you manage your daily operations and ensure your riders are efficient</p>
       </div>
       <div className={styles.iconparagh1}>
         <img className={styles.frame1} src={Frame1} alt=""/>
        <div className={styles.paragh1}>
        <h3>Monitor your Earnings</h3>
        <p>Easily see how much your busineses are earning  on each transaction and watch your earnings rise. </p>
        </div>
       </div>
       <div className={styles.iconparagh2}>
        <img className={styles.frame2} src={Frame2} alt=""/>
        <div className={styles.paragh2}>
        <h3>Manage your Businesses</h3>
        <p>Easily see how much your businesses are earning  on each transaction and watch your earnings rise. </p>
        </div>
       </div>
       <div className={styles.iconparagh3}>
        <img className={styles.frame3} src={Frame3} alt=""/>
        <div className={styles.paragh3}>
        <h3>Delegate to Staff</h3>
        <p>Easily see how much your businesses are earning  on each transaction and watch your earnings rise. </p>
        </div>
        <img className={styles.vector1} src={Vector1} alt=""/>
       </div>
    </div>
    <div className={styles.right}>
    <div className={styles.rightform}>
        <div className={styles.rightparagh}>
           <h3>Login to your dashboard</h3>
           <p>Provide details to login to your account </p>
        </div>
        <br/>
      <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
        <input className={styles.inputtext}
         placeholder='Cokitchen222@gmail.co' 
         name="email"
          id="email"
          onChange={(e: any) => setUser({ ...user, email: e.target.value})}
         type='email'/>
          <label htmlFor="password">Password</label>
          <div className={styles.separatepass}>
        <input className={styles.inputtext}
         placeholder='' 
         name="password"
          id="password"
          onChange={(e: any) => setUser({ ...user, password: e.target.value})}
         type='password'/>
         <span ><Icon icon={eye} size={15}/></span>
         </div>
          <br/>
        <button type='submit'>Login</button>
        <br/>
        <br/>
        <br/>
        </form>
        </div>
    </div>
 </div>
  </div>
  )
}

