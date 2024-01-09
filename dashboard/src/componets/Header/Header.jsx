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
function Header() {

  const [showData, setShowData] = useState(false);
  const toggleData = () => {
    setShowData(!showData);
  };
  return (
    <div className='main_header'>
      <header className='nice_header'>
        <div className='nice_left_header'>
            <div className='logo_content'>
                <img src={images} className='w-[26px]'/>
                <h3 className='capitalize font-bold logo'>Nice admin</h3>
            </div>
        </div>
        <div className='nice_middle_header'>
            <ul className='search_content'>
                <li><MenuIcon className='menu_icon'/></li>
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
                <li><ChatIcon className='right_iocn'/></li>
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
  )
}

export default Header
