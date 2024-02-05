import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import "./body.css"
import Dashboard from '../Dashboard/Dashboard'
import Error from '../Error/Error'
import Register from '../Register/Register'
import Contact from '../contact/Contact'
let ROUTE_URLS = [
  {
    url : 'dashboard',
    component: Dashboard
  } ,
  {
    url : 'error',
    component: Error
  } ,
  {
    url:'register',
    component:Register
  },
  {
    url:'contact',
    component:Contact
  },
]

export default function Body() {
  return (
    <BrowserRouter>
        <Routes>
          {
          // ROUTE_URLS.map((item ,i) => (
          // <Route   key={item.url} path = {item.url} element = {<item.component/> }/>
          // ))

          ROUTE_URLS.map((item ,i) => (
            <Route   key={item.url} path = {item.url} element = {<item.component/> }/>
            ))
            
          }
            {/* <Route path = "/dashboard" element = {<Dashboard/>}/>
            <Route path = "/error" element = {<Error/>}/>
            <Route path= "/Register" element = {<Register/>}/> */}
        </Routes>
    </BrowserRouter>
  )
}
