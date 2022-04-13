import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css'

const Resister = () => {
    const [user, setUser]=useState({name:'', email:'', password:''})
    const {name,email, password}=user;

    const handleBlur=(event)=>{
        setUser({...user, [event.target.name]: event.target.value})
    }

    const handleFormSubmit= event=>{
        // const name = event.target.name.value;
        // const email = event.target.email.value;
        // const password = event.target.password.value;
        // console.log(name, email, password)
       
        console.log(user)
        event.preventDefault()
    }
    return (
        <div className='register-container'>
            <h2>Resister</h2>
            <form onSubmit={handleFormSubmit}>
                <input onChange={handleBlur} type="text" name="name" id="" value={name} placeholder='Name' required/>
                <input onChange={handleBlur} type="email" name="email" id="" value={email} placeholder='Email' required/>
                <input onChange={handleBlur} type="password" name="password" id="" value={password} placeholder='Password' required />
                <input type="submit" value="Submit" />
            </form>
            <p>Have already account? <Link to="/login"><span className="text-danger">Please LogIn</span></Link></p>
        </div>
    );
};

export default Resister;