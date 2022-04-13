import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'

const Resister = () => {

    const handleFormSubmit= event=>{
        event.preventDefault()
    }
    return (
        <div className='register-container'>
            <h2>Resister</h2>
            <form onSubmit={handleFormSubmit}>
                <input type="text" name="name" id="" placeholder='Name' required/>
                <input type="email" name="email" id="" placeholder='Email' required/>
                <input type="password" name="password" id="" placeholder='Password' required />
                <input type="submit" value="Submit" />
            </form>
            <p>Have already account? <Link to="/login"><span className="text-danger">Please LogIn</span></Link></p>
        </div>
    );
};

export default Resister;