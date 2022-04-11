import React from 'react';
import './Service.css'


const Service = ({service}) => {
      const {name, price, img,descreption}= service;
    return (
        <div className='service'>
              <h2>Name:{name}</h2>
               <p>{descreption}</p>
               <h4>{price}</h4>
               <img src={img} alt="" />
        </div>
    );
};

export default Service;