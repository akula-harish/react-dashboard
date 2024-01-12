import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function Dashboard() {
    const [data,setData]=useState([])
    useEffect(() => {
      const fetchData = async () => {
        const response = await axios.get('https://dummyjson.com/products');
        setData(response.data.products);
      };
      fetchData();
    }, []);
    return (
        <ul className='dashboard_main'>
            {
                data.map((item) => {
                    return(
                        <li key={item.id} className='card_head' data-aos="zoom-in" data-theme="dark">
                            <h2>{item.brand}</h2>
                            <h3>{item.price}</h3>
                            <h4>{item.rating}</h4>
                            <h5>{item.title}</h5>
                        </li>
                    )
                })
            }
        </ul>
    )
  }
