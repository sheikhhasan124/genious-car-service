import React, { useRef } from "react";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import SocialLogin from "./SocialLogin/SocialLogin";

const Login = () => {
     const emailRef= useRef('')
     const passwordRef= useRef('')
      const location = useLocation()
     let from = location.state?.from?.pathname || "/";
     const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);

     const handleSubmit=(event)=>{
         event.preventDefault();
         const email = emailRef.current.value;
         const password = passwordRef.current.value;
         console.log(email, password)
         signInWithEmailAndPassword(email, password)
 
        }
       
        const navigate= useNavigate()
        if(user){
          navigate(from, { replace: true });
        }
        const navigateRegister =()=>{
            navigate(`/register`)
        }
     
  return (
    <div className="container w-50 mx-auto">
      <h2 className="text-center m-3">LogIn</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
         
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
         
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          
          <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button className="w-50 d-block mx-auto" variant="primary" type="submit">
          Login
        </Button>
      </Form>
      {/* <p>Haven't you register? <Link to="/register"><span className="text-danger">Please register</span></Link></p> */}
      <p>Haven't you register? <span onClick={navigateRegister} className="text-danger">Please register</span></p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
