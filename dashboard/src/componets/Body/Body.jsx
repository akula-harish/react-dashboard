import React, { useEffect, useState } from 'react'
import "./body.css"
import axios from 'axios';
export default function Body() {
  const [data,setData]=useState([])
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://dummyjson.com/products');
      setData(response.data.products);
    };
    fetchData();
  }, []);
  return (
    <div className='body_main'>
        {
          data.map((item)=>{
            return(
              <div className='card_head'>
              <li>{item.title}</li>
              <li>{item.description}</li>
              </div>
            )
          })
        }
    </div>
  )
}
