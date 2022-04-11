import React, { useEffect, useState } from 'react';

const Services = () => {
   const [service, setService]=useState([])

   useEffect(()=>{
      fetch('services.json')
      .then(res=>res.json())
      .then(data=>setService(data))
   },[])

    return (
        <div>
            <h2>servises : {service.length}</h2>
        </div>
    );
};

export default Services;