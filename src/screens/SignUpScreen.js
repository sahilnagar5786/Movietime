import React, { useRef } from 'react'
// import { auth } from '../firebase';
import "./SignUpScreen.css";

function SignUpScreen() {

   const emailref= useRef(null);
   const passwordref= useRef(null);


  const register = (e)=>{
    e.preventDefault();
    // auth.createUserWithEmailAndPassword(
    // emailref.current.value,
    // passwordref.current.value
    // ).then((authUser)=>{
    //  console.log(authUser);
    // }).catch(error =>{
    //   alert(error.message)
    // });
  };
  const signin=(e)=>{
    e.preventDefault();
  //   auth.signInWithEmailAndPassword(
  //     emailref.current.value,
  //     passwordref.current.value
  //   ).then((authUser)=>{
  //     console.log(authUser);
  // }).catch(error=>alert(error.message));
};
  return (
    <div className="SignUpScreen">
        <form>
            <h1>Sign In</h1>
            <input ref={emailref} type="email" placeholder="Email" />
            <input ref={passwordref} type="password" placeholder="Password"/>
            <button type="submit" onClick={signin}>Sign In</button>
            <h4><span className="signup_grey">New to Netflix? </span> <span className="signup_link" onClick={register}>Sign Up now.</span></h4>
        </form>
    </div>
  )
}

export default SignUpScreen