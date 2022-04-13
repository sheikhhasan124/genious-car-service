import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
     const emailRef= useRef('')
     const passwordRef= useRef('')

     const handleSubmit=(event)=>{
         event.preventDefault();
         const email = emailRef.current.value;
         const password = passwordRef.current.value;
         console.log(email, password)
 
        }
        const navigate= useNavigate()
        const navigateRegister =()=>{
            navigate(`/register`)
        }
     
  return (
    <div className="container w-50 mx-auto">
      <h2 className="text-center m-3">LogIn</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      {/* <p>Haven't you register? <Link to="/register"><span className="text-danger">Please register</span></Link></p> */}
      <p>Haven't you register? <span onClick={navigateRegister} className="text-danger">Please register</span></p>
    </div>
  );
};

export default Login;
