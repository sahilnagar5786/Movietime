import React, {useState} from 'react'
import "./LoginScreen.css";
import MovieTime1 from "../Assests/Movietime1.png";
import SignUpScreen from './SignUpScreen';

function LoginScreen() {
    const [signIn, setSignIn]=useState(false);

  return (
    <div className="loginscreen">
        <div className="login_background">
            <img className="login_logo" src={MovieTime1} alt=".." />
            <button onClick={()=>setSignIn(true)} className="login_button btn btn-danger">Sign In</button>

        <div className="login_gradient"/>
        </div>
        <div className="login_body">
           {signIn ? (
            <SignUpScreen/>
           ): (
            <>
            <h1>Unlimited Films, TV Programmes And More.</h1>
            <h2>Watch Anywhere. Cancel At Any Time.</h2>
            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
            <div className="login_input">
                <form >
                    <input type="email" placeholder="Email Address" />
                    <button onClick={()=>setSignIn(true)} className="input_button ">GET STARTED</button>
                </form>
            </div>
            </>
           )}
          
        </div>
    </div>
  )
}

export default LoginScreen;