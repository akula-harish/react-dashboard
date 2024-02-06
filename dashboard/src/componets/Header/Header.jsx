import React, { useState } from 'react';
import images from '../../assets/logo.png';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatIcon from '@mui/icons-material/Chat';
import img from '../../assets/men.jfif';
//import camera from '../../assets/camera.jpg'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import "./Header.css" ;
import Darkmode from './Darkmode';
import theme from '../../../theme.json'
import Chat from '../Chat/Chat';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
function Header() {
  // notification function
  const [showData, setShowData] = useState(false);
  const toggleData = () => {
    setShowData(!showData);
  };
// menu toggle function
  let [openClose, setOpenClose] = useState(true);
  const menuToggle = () => {
    return(setOpenClose(!openClose))
  }
  // chat box function
  const [showChatBox, setShowChatBox] = useState(false);
  const chatToggle = () => {
    setShowChatBox(!showChatBox);
  };
  // profile data
  const [profile,setProfile]=useState(false);
  const profileFun=()=>{
    setProfile(!profile)
  }  
  // updateBtn
  const[userName, setUserName] = useState("Admin");
  const[toggleInput, setToggleInput] = useState(false);
  const handleOpenInput = () => {
    setToggleInput(!toggleInput);
  }
  console.log(toggleInput);
  // about information
  const[aboutData,setAboutData]=useState("Busy");
  const[input,setInput]=useState(false);
  const handleOpenInputData=()=>{
    setInput(!input)
  }
  return(
    <>
      <div className='main_header' 
    //style={{background:theme.pricolor}}
    >
      <header className='nice_header'>
        <div className='nice_left_header'>
            <a href='/Dashboard'>
              <div className='logo_content'>
                  <img src={images} className='w-[26px]'/>
                  <h3 className='capitalize font-bold logo'>Nice admin</h3>
              </div>
            </a>
        </div>
        <div className='nice_middle_header'>
            <ul className='search_content'>
                <li onClick={menuToggle} style={{cursor: 'pointer'}}><MenuIcon className='menu_icon'/></li>
                <li>
                    <div className='searchbar'>
                      <SearchIcon className='search_icon'/>
                      <input type='text' placeholder='Search'/>
                  </div>
                </li>
            </ul>
        </div>
        <div className='nice_right_header'>
            <ul className='right_cont'>
           <li> <Darkmode /></li>
             <li><NotificationsNoneIcon onClick={toggleData} className='ntf_icon'/></li>
                <li><ChatIcon onClick={chatToggle} className='right_iocn'/></li>
              <li> 
                <div className='right_img' onClick={profileFun}>
               <img src={img} className='img_icon'/>
               <p>Jhon Admin</p>
                <ArrowDropDownIcon />
               </div>
               </li>
               {/* profile data content */}
               {
                profile && (
                  <div className='profile_head'>
                  <div className='profile_img'>
                    <img src={img} />
                    <div className='camera'>
                      <CameraAltOutlinedIcon />
                    </div>
                  </div>
                  <div className='profile_content_head'>
                    <ul className='caller_id'>
                      <li>
                        <div className='test_data'>
                        <PersonOutlineIcon className='caller_icon'/>
                        </div>
                      </li>
                      <li>
                        <div className='caption'>
                        <p className='color_name'>Name</p>
                        {
                          toggleInput === true ? <div className='edit_input'>
                            <input type='text' className='input_username' onChange = {(e) =>  setUserName(e.target.value)}/>
                          </div> :  <h5>{userName}</h5>
                        }
                        <p className='color_name' style={{fontSize: '12px'}}>Lorem ipsum Lor imb Lorem ipsum</p>
                      </div>
                      </li>
                     {/*  */}
                     <li>
                      <div> <EditOutlinedIcon className='edit_icon' onClick = {handleOpenInput}/> 
                      </div> 
                      </li>
                    </ul>
                    <ul className='caller_id'>
                      <li> 
                        <div className='test_data'>
                          <ErrorOutlineOutlinedIcon className='caller_icon'/>
                          </div>
                          </li>
                      <li>
                        <div className='caption'>
                        <p className='color_name'>About</p>
                        {
                          input === true ? <div className='edit_input'>
                            <input type='text' style={{color: '#000'}} onChange = {(e) =>  setAboutData(e.target.value)}/>
                          </div> :  <h5>{aboutData}</h5>
                        }
                      </div>
                      </li>
                     <li> 
                      <div>
                      <EditOutlinedIcon className='edit_icon' onClick = {handleOpenInputData}/>
                      </div>
                     </li>
                    </ul>
                    <ul className='caller_id'>
                      <li>
                      <div className='test_data'>
                        <CallOutlinedIcon className='caller_icon'/>
                        </div>
                        </li>
                      <li>
                        <div className='caption'>
                        <p className='color_name'>Phone</p>
                        <p>+91 9849626300</p>
                      </div>
                      </li>
                      <li>
                        <div></div>
                      </li>
                    </ul>
                  </div>
               </div>
                )
               }
               
            </ul>
        </div>
        {/* pop up messsages */}
       <div className={showData ? 'data-container show' : 'data-container hide'}>
       {showData && (
        <div>
          <p>This is the data to show when the icon is clicked.</p>
        </div>
      )}
      
       </div>
      </header>
    </div>
      <div className='chatbox_main'><Chat showChatBox={showChatBox}/></div>
    </>
  ) 

}
export default Header
