import React from 'react'
import '../../componets/Header/Header.css'
import images from '../../assets/logo.png';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatIcon from '@mui/icons-material/Chat';
import img from '../../assets/men.jfif';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
function Header() {
  return (
    <div className='main_header'>
      <header className='nice_header'>
        <div className='nice_left_header'>
            <div className='flex align-middle'>
                <img src={images} className='w-[26px]'/>
                <h3 className='text-2xl capitalize font-bold logo'>Nice admin</h3>
            </div>
        </div>
        <div className='nice_middle_header'>
            <div className='search_content'>
                <MenuIcon className='menu_icon'/>
                <div className='searchbar'>
                    <SearchIcon className='search_icon'/>
                    <input type='text' placeholder='Search'/>
                </div>
            </div>
        </div>
        <div className='nice_right_header'>
            <div className='right_cont'>
                <NotificationsNoneIcon className='right_iocn'/>
                <ChatIcon className='right_iocn'/>
               <div className='right_img'>
               <img src={img} className='img_icon'/>
               <p>Jhon Admin</p>
                <ArrowDropDownIcon />
               </div>
            </div>
        </div>
      </header>
    </div>
  )
}

export default Header
