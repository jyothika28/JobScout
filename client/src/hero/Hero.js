import React from 'react';
import './Hero.css';
import '../App.css';
import {signInWithPopup } from 'firebase/auth';
import { auth,googleProvider,microsoftProvider } from '../config/firebase';


function Hero() {

 
  const handleGoogleSignIn = async() => {
    try {
      await signInWithPopup(auth, googleProvider).then((result) => {
        console.log("google")
        console.log("Logged in user name:", result.user.displayName); // Log the user's name  
      });
    } catch (error) {
      console.log("redirect error");
      console.log(error);
    }
  };
  const handleMicrosoftSignIn = async() => {
    try {
      await signInWithPopup(auth, microsoftProvider).then((result) => {
        console.log("microsoft")
        console.log("Logged in user name:", result.user.displayName); // Log the user's name  
      });
    } catch (error) {
      console.log("redirect error");
      console.log(error);
    }
  };

  return (
    <div className="hero">
    
      <p className='oneline alegreya-700'>Job hunting, reimagined.</p>
      
      <p className='twoline alegreya-400'>
      Stay on top of your applications, streamline the process, and track your progress effortlessly <br/>—every step of the way.
      </p>
      <div className='loginButton'>
      <button type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  <span class="button_top"> Login </span>
</button>
      </div>
      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      Log in to track your job applications, sync emails, and stay organized—all in one place.<br/>
     <button type="button" class="btn btn-danger"
      onClick={handleGoogleSignIn}

     >Log in with Google</button><br/>
    <button type="button" class="btn btn-primary"
      onClick={handleMicrosoftSignIn}
    >Log in with Outlook</button>
     
      </div>
      <div class="modal-footer">
      We Value Your Privacy!<br/>
✅ We only fetch job-related emails—your inbox stays private.<br/>
✅ No spam, no unnecessary data collection—just a smarter job search.<br/>
      </div>
    </div>
  </div>
</div>

    </div>
  );
}

export default Hero;