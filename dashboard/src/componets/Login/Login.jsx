import React from 'react'
import "../../componets/Login/login.css"
import logo from '../../assets/logo.png'

export default function Login() {
  return (
    <div style={{position: 'relative', fontSize: '0px', width: '100%', height: '100vh', background: '#cfe2ff'}}>
        <div className='reg_main'>
            <ul className='title_logo'>
                <li><img src = {logo}/></li>
                <li>NiceAdmin</li>
            </ul>
            <div className='reg_form_main'>
                <h2>Login To Your Account</h2>
                <p>Enter your username & password to login</p>
                <form style={{paddingTop: '30px'}}>
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
                        <li><label>Remember me</label></li>
                    </ul>
                    <input type='submit' value='Login'/>
                    <div className='create_account_tag'>
                        <p>Don't have account?<a href='./Register'>Create an account</a></p>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
