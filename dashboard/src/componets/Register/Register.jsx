import React from 'react'
import './register.css'
import logo from '../../assets/logo.png'

export default function Register() {
  return (
    <div style={{position: 'relative', fontSize: '0px', width: '100%', height: '100vh', background: '#ebe8ff'}}>
        <div className='reg_main'>
            <ul className='title_logo'>
                <li><img src = {logo}/></li>
                <li>NiceAdmin</li>
            </ul>
            <div className='reg_form_main'>
                <h2>Create an Account</h2>
                <p>Enter your personal details to create account</p>
                <form style={{paddingTop: '30px'}}>
                    <ul className='form_group_list'>
                        <li><label>Your Name: </label></li>
                        <li><input type="text" placeholder="Enter your name..."/>  </li>
                    </ul>
                    <ul className='form_group_list'>
                        <li><label>Your Email: </label></li>
                        <li><input type="text" placeholder="Enter your name..."/>  </li>
                    </ul>
                    <ul className='form_group_list'>
                        <li><label>Username: </label></li>
                        <li><input type="text" placeholder="Enter your name..."/>  </li>
                    </ul>
                    <ul className='form_group_list'>
                        <li><label>Password: </label></li>
                        <li><input type="text" placeholder="Enter your name..."/>  </li>
                    </ul>
                    <ul className='agree_btn_list'>
                        <li><input type='checkbox'/></li>
                        <li><label>I agree and accept the terms and conditions</label></li>
                    </ul>
                    <input type='submit' value='Create Account'/>
                    <p>Already have an account? Log in</p>
                </form>
            </div>
        </div>
    </div>
  )
}
