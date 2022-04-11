import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
   const [services, setServices]=useState([])

   useEffect(()=>{
      fetch('services.json')
      .then(res=>res.json())
      .then(data=>setServices(data))
   },[])

    return (
        <div>
            <h1>Our servises : {services.length}</h1>
           <div className='services'>
           {services.map(service=><Service key={service.id} service={service}></Service>)}
           </div>
        </div>
    );
};

export default Services;