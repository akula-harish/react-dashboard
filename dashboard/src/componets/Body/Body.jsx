import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import "./body.css"
import Dashboard from '../Dashboard/Dashboard'
import Error from '../Error/Error'
import Register from '../Register/Register'
import Contact from '../contact/Contact'
import Alert from '../Alert/Alert'
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
  {
    url:'alert',
    component:Alert
  },
]

export default function Body() {
  return (
    <BrowserRouter>
        <Routes>
          {
          ROUTE_URLS.map((item ,i) => (
            <Route   key={item.url} path = {item.url} element = {<item.component/> }/>
            ))
            
          }
        </Routes>
    </BrowserRouter>
  )
}
