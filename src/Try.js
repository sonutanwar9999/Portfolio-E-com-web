import axios, { Axios } from 'axios';
import React, { useEffect } from 'react';

function Try(props) {

useEffect(()=>{
  axios.get("  http://localhost:3000/try").then(r=>{
    console.log(r);
  })
})



  return (
    <div>
      
    </div>
  );
}

export default Try;