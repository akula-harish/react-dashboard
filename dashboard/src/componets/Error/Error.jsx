import React from 'react'
import "../Dashboard/dashboard.css"
import image from "../../assets/not-found.svg"
import "../../componets/Error/error.css"

export default function Error() {
  return (
    <div className='error_main'>
        <h1>404</h1>
        <p>The Page You Are Looking For Doesn't Exist.</p>
        <a href = "/Dashboard">Back To Home</a>
        <span className='error_img'>
          <img src={image}/>
        </span>
    </div>
  )
}
