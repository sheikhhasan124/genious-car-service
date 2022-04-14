import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../Login/SocialLogin/SocialLogin';
import './Register.css'

const Resister = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    // const [user, setUser]=useState({name:'', email:'', password:''})
    // const {name,email, password}=user;

    // const handleBlur=(event)=>{
    //     setUser({...user, [event.target.name]: event.target.value})
    // }
    const navigate = useNavigate()
    if(user){
        navigate(`/home`)
    }

    const handleFormSubmit= event=>{
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // console.log(name, email, password)
        createUserWithEmailAndPassword(email, password)
        // console.log(user)
        event.preventDefault()
    }
    return (
        <div className='register-container'>
            <h2 className='text-center'>Resister</h2>
            <form onSubmit={handleFormSubmit}>
                <input  type="text" name="name" id="" placeholder='Name' required/>
                <input  type="email" name="email" id="" placeholder='Email' required/>
                <input  type="password" name="password" id=""  placeholder='Password' required />
                <input className='btn btn-primary w-50 mx-auto' type="submit" value="Register" />
            </form>
            <p>Have already account? <Link to="/login"><span className="text-danger">Please LogIn</span></Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Resister;