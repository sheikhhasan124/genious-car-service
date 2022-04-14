import React from "react";
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import google from '../../../imges/social-icon/google.png'
import facebook from '../../../imges/social-icon/facebook.png'
import github from '../../../imges/social-icon/git hub.png'
import auth from "../../../firebase.init";
import { Navigate, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);


  const navigate = useNavigate()
  if(user){
    navigate(`/home`)
  }
  return (
    <div>
      <div className="d-flex justifi-contents-center align-items-center">
        <div style={{ height: "1px" }} className="bg-secondary w-50 "></div>
        <p className="mt-2 px-2">or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50 "></div>
      </div>
      <div>
        <button onClick={()=>signInWithGoogle()} className="btn btn-primary  w-50 d-block mx-auto mb-2">
            <img src={google} alt="" />
             <span> Google sign in</span>
        </button>
        <button className="btn btn-primary  w-50 d-block mx-auto mb-2">
            <img src={facebook} alt="" />
             <span> Facebook sign in</span>
        </button>
        <button onClick={()=>signInWithGithub()} className="btn btn-primary  w-50 d-block mx-auto">
            <img src={github} alt="" />
             <span> GitHub sign in</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
