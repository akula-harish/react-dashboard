import React, { useEffect, useState } from 'react'

export default function Urlservices() {
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(json => setData(json))
    }, [])
    const[data, setData] = useState("");
    const value = Object.values(data);
  return (
    <>
        <ul>
            {
                value.map((item) => {
                    return(
                        <li key={item.id}>
                            <h3 style={{fontSize: '14px', color: '#000'}}>{item.title}</h3>
                        </li>
                    )
                })
            }
        </ul>
    </>
  )
}
