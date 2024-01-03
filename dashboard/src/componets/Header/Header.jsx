import React from 'react'
import images from '../../assets/logo.png';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatIcon from '@mui/icons-material/Chat';
import img from '../../assets/men.jfif';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import "./Header.css" 
function Header() {
  function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
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
            <div className='right_cont'>
                <NotificationsNoneIcon className='right_iocn' onClick={myFunction}/>
                <ChatIcon className='right_iocn'/>
               <div className='right_img'>
               <img src={img} className='img_icon'/>
               <p>Jhon Admin</p>
                <ArrowDropDownIcon />
               </div>
            </div>
        </div>
        {/* pop up messsages */}
        <div className='popup_nft' id="myDIV">
          <p>Lorem ipsum, dolor sit , minus nesciunt excepturi cupiditate facere consequatur. Vel, aliquam unde laborum ea non animi vero reiciendis dolor.</p>
        </div>
      </header>
    </div>
  )
}

export default Header
