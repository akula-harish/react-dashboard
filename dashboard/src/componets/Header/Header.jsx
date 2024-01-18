import React, { useState } from 'react';
import images from '../../assets/logo.png';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatIcon from '@mui/icons-material/Chat';
import img from '../../assets/men.jfif';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import "./Header.css" ;
import Darkmode from './Darkmode';
import theme from '../../../theme.json'
import Chat from '../Chat/Chat';

function Header() {
  const [showData, setShowData] = useState(false);
  const toggleData = () => {
    setShowData(!showData);
  };
  // const sometheme={
  //   pricolor:"yellow",
  //   seccolor:"green"
  // };
  //console.log(JSON.stringify(sometheme))
  // console.log(theme,"json")

  let [openClose, setOpenClose] = useState(true);
  const menuToggle = () => {
    return(setOpenClose(!openClose))
  }
  
  const [showChatBox, setShowChatBox] = useState(false);
  const chatToggle = () => {
    setShowChatBox(!showChatBox);
  };
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
                <div className='right_img'>
               <img src={img} className='img_icon'/>
               <p>Jhon Admin</p>
                <ArrowDropDownIcon />
               </div></li>
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
