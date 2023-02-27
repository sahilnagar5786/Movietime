import React,{useState, useEffect} from 'react'
import "./Nav.css"
import MovieTime1 from "./Assests/Movietime1.png";
import LoginScreen from './screens/LoginScreen';

function Nav() {
  const [show, handleShow]= useState (false);

  const transitionNavbar =()=>{
    if (window.scrollY >100){
        handleShow(true);
    }else{
        handleShow(false);
    }
  }

  useEffect(() => {
  window.addEventListener("scroll", transitionNavbar);
   return()=> window.addEventListener("scroll", transitionNavbar)
  }, [])
  

  return (
    <div className={`nav ${show && "nav_black"}`}>
    <div className="nav_content">
    <img className="nav_logo" src={MovieTime1} alt=""></img> 
    <img className="avtar" onClick={<LoginScreen/>} src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
    </div>
    </div>
  )
}

export default Nav