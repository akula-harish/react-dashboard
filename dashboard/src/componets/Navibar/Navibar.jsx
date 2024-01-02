import React from 'react'
import "./navibar.css"
import "../../App.css"
import GridViewIcon from '@mui/icons-material/GridView';
import LayersIcon from '@mui/icons-material/Layers';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DescriptionIcon from '@mui/icons-material/Description';
import PivotTableChartIcon from '@mui/icons-material/PivotTableChart';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import ExtensionIcon from '@mui/icons-material/Extension';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ReportIcon from '@mui/icons-material/Report';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';

export default function Navibar() {
  return (
    <div className='nav_list_main'>
        <ul className='nav_list'>
            <li>
               <a href='#' className='nav_icon_text'>
                    <GridViewIcon className='nav_icon'/>
                    <p className='nav_text'>Dashboard</p>
               </a>
            </li>
            <li>
               <a href='#' className='nav_icon_text'>
                    <ul className='nav_list_child'>
                        <li><LayersIcon className='nav_icon'/></li>
                        <li><p className='nav_text'>Components</p></li>
                        <li><KeyboardArrowDownIcon/></li>
                    </ul>
               </a>
            </li>
            <li>
               <a href='#' className='nav_icon_text'>
                    <ul className='nav_list_child'>
                        <li><DescriptionIcon className='nav_icon'/></li>
                        <li><p className='nav_text'>Forms</p></li>
                        <li><KeyboardArrowDownIcon/></li>
                    </ul>
               </a>
            </li>
            <li>
               <a href='#' className='nav_icon_text'>
                    <ul className='nav_list_child'>
                        <li><PivotTableChartIcon className='nav_icon'/></li>
                        <li><p className='nav_text'>Tables</p></li>
                        <li><KeyboardArrowDownIcon/></li>
                    </ul>
               </a>
            </li>
            <li>
               <a href='#' className='nav_icon_text'>
                    <ul className='nav_list_child'>
                        <li><EqualizerIcon className='nav_icon'/></li>
                        <li><p className='nav_text'>Charts</p></li>
                        <li><KeyboardArrowDownIcon/></li>
                    </ul>
               </a>
            </li>
            <li>
               <a href='#' className='nav_icon_text'>
                    <ul className='nav_list_child'>
                        <li><ExtensionIcon className='nav_icon'/></li>
                        <li><p className='nav_text'>Icons</p></li>
                        <li><KeyboardArrowDownIcon/></li>
                    </ul>
               </a>
            </li>
            <h5 className='nav_header_text'>Pages</h5>
            <li>
                <a href='#' className='nav_icon_text'>
                    <AccessibilityIcon className='nav_icon'/>
                    <p className='nav_text'>Profile</p>
               </a>
            </li>
            <li>
                <a href='#' className='nav_icon_text'>
                    <QuestionMarkIcon className='nav_icon'/>
                    <p className='nav_text'>F.A.Q</p>
               </a>
            </li>
            <li>
                <a href='#' className='nav_icon_text'>
                    <MailOutlineIcon className='nav_icon'/>
                    <p className='nav_text'>Contact</p>
               </a>
            </li>
            <li>
                <a href='#' className='nav_icon_text'>
                    <HowToRegIcon className='nav_icon'/>
                    <p className='nav_text'>Register</p>
               </a>
            </li>
            <li>
                <a href='#' className='nav_icon_text'>
                    <ExitToAppIcon className='nav_icon'/>
                    <p className='nav_text'>Login</p>
               </a>
            </li>
            <li>
                <a href='#' className='nav_icon_text'>
                    <ReportIcon className='nav_icon'/>
                    <p className='nav_text'>Error 404</p>
               </a>
            </li>
            <li>
                <a href='#' className='nav_icon_text'>
                    <HistoryEduIcon className='nav_icon'/>
                    <p className='nav_text'>Blank</p>
               </a>
            </li>
        </ul>
    </div>
  )
}
