import React from 'react'
import './Contact.css';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import LocalPostOfficeOutlinedIcon from '@mui/icons-material/LocalPostOfficeOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
function Contact() {
  return (
    <div className='contact_header'>
      <h2>contact</h2>
      <ul className='cont_main'>
        <li>
            <ul className='list_cont'>
                <li>
                    <div className='contact_info'>
                     <LocationOnOutlinedIcon className='location_icon'/>
                     <h1>address</h1>
                     <p>A108 Adam Street,</p>
                     <p>New York, NY 535022</p>
                    </div>
                </li>
                <li>
                    <div className='contact_info'>
                     <CallOutlinedIcon className='location_icon'/>
                     <h1>Call us</h1>
                     <p>+1 5589 55488 55</p>
                     <p>+1 6678 254445 41</p>
                    </div>
                </li>
                <li>
                    <div className='contact_info'>
                     <LocalPostOfficeOutlinedIcon className='location_icon'/>
                     <h1>Email Us</h1>
                     <p>info@example.com</p>
                     <p>contact@example.com</p>
                    </div>
                </li>
                <li>
                    <div className='contact_info'>
                     <AccessTimeOutlinedIcon className='location_icon'/>
                     <h1>Open Hours</h1>
                     <p>Monday - Friday</p>
                     <p>9:00AM - 05:00PM</p>
                    </div>
                </li>
            </ul>
        </li>
        <li>
            <div className='contact_right'>
                <div className='contact_filed'>
                <input type='text' placeholder='Your Name'/>
                <input type='text' placeholder='Your Email'/>
                </div>
                <input type='text' placeholder="Subject" />
                <textarea placeholder='Message' rows={4} cols={50} />
                <button>Send Message</button>            
            </div>
        </li>
      </ul>
      <div className='contact_footer'>
        <small> © Copyright <strong>NiceAdmin</strong>All Rights Reserved</small>
        <small>Designed by <span>BootstrapMade</span></small>
      </div>
      <div className='footerArrow'>
        <a href='#'><ArrowUpwardIcon className='arrow_icon'/></a>
      </div>
    </div>
  )
}

export default Contact
