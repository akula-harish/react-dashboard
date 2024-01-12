import React from 'react'
import Header from "../Header/Header"
import Navibar from "../Navibar/Navibar"
import Body from '../Body/Body'
import "../Body/body.css"

export default function Home() {
  return (
    <>
        <Header/>
        <div className='nav_list_main'><Navibar/></div>
        <div className='body_main'><Body/></div>   
    </>
  )
}
