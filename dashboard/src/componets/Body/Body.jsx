import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import "./body.css"
import Dashboard from '../Dashboard/Dashboard'
import Error from '../Error/Error'
export default function Body() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path = "/dashboard" element = {<Dashboard/>}/>
            <Route path = "/error" element = {<Error/>}/>
        </Routes>
    </BrowserRouter>
  )
}
