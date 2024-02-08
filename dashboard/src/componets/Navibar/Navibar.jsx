import React, { useState } from 'react'
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
import MediationIcon from '@mui/icons-material/Mediation';

import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import makeStyles from '@mui/styles/makeStyles';
import { NavibarStyles } from './navibarStyles';

const useStyles = makeStyles(NavibarStyles);

export default function Navibar() {
 
    const classes = useStyles();
    return(
        <Sidebar className='sidebar_main'>
            <Menu className='menu'>
                <MenuItem className={classes.menuItem} href='/dashboard' icon = {<GridViewIcon/>}>Dashboard</MenuItem>
                <SubMenu label = 'Components' className={`${classes.subMenu}menuItem test`} icon = {<LayersIcon/>}>
                    <div className={classes.submenu_list}>
                        <MenuItem icon = {<MediationIcon style={{fontSize: '18px'}}/>} href='./Alert'>Alerts</MenuItem>
                        <MenuItem icon = {<MediationIcon style={{fontSize: '18px'}}/>}>Accordian</MenuItem>
                        <MenuItem icon = {<MediationIcon style={{fontSize: '18px'}}/>}>Badges</MenuItem>
                        <MenuItem icon = {<MediationIcon style={{fontSize: '18px'}}/>}>Buttons</MenuItem>
                        <MenuItem icon = {<MediationIcon style={{fontSize: '18px'}}/>}>Cards</MenuItem>
                    </div>
                </SubMenu>
                <SubMenu label = 'Forms' className={`${classes.subMenu}menuItem`} icon = {<HistoryEduIcon/>}>
                    <div className={classes.submenu_list}>
                        <MenuItem icon = {<MediationIcon style={{fontSize: '18px'}}/>} href='./Alert'>Alerts</MenuItem>
                        <MenuItem icon = {<MediationIcon style={{fontSize: '18px'}}/>}>Accordian</MenuItem>
                        <MenuItem icon = {<MediationIcon style={{fontSize: '18px'}}/>}>Badges</MenuItem>
                        <MenuItem icon = {<MediationIcon style={{fontSize: '18px'}}/>}>Buttons</MenuItem>
                        <MenuItem icon = {<MediationIcon style={{fontSize: '18px'}}/>}>Cards</MenuItem>
                    </div>    
                </SubMenu>
                <SubMenu label = 'Tabels' className={`${classes.subMenu}menuItem`} icon = {<DescriptionIcon/>}>
                    <div className={classes.submenu_list}>
                        <MenuItem icon = {<MediationIcon style={{fontSize: '18px'}}/>} href='./Alert'>Alerts</MenuItem>
                        <MenuItem icon = {<MediationIcon style={{fontSize: '18px'}}/>}>Accordian</MenuItem>
                        <MenuItem icon = {<MediationIcon style={{fontSize: '18px'}}/>}>Badges</MenuItem>
                        <MenuItem icon = {<MediationIcon style={{fontSize: '18px'}}/>}>Buttons</MenuItem>
                        <MenuItem icon = {<MediationIcon style={{fontSize: '18px'}}/>}>Cards</MenuItem>
                    </div>    
                </SubMenu>
                <SubMenu label = 'Charts' className={`${classes.subMenu}menuItem`} icon = {<PivotTableChartIcon/>}>
                    <div className={classes.submenu_list}>
                        <MenuItem icon = {<MediationIcon style={{fontSize: '18px'}}/>} href='./Alert'>Alerts</MenuItem>
                        <MenuItem icon = {<MediationIcon style={{fontSize: '18px'}}/>}>Accordian</MenuItem>
                        <MenuItem icon = {<MediationIcon style={{fontSize: '18px'}}/>}>Badges</MenuItem>
                        <MenuItem icon = {<MediationIcon style={{fontSize: '18px'}}/>}>Buttons</MenuItem>
                        <MenuItem icon = {<MediationIcon style={{fontSize: '18px'}}/>}>Cards</MenuItem>
                    </div>    
                </SubMenu>
                <SubMenu label = 'Icons' className={`${classes.subMenu}menuItem`} icon = {<EqualizerIcon/>}>
                    <div className={classes.submenu_list}>
                        <MenuItem icon = {<MediationIcon style={{fontSize: '18px'}}/>} href='./Alert'>Alerts</MenuItem>
                        <MenuItem icon = {<MediationIcon style={{fontSize: '18px'}}/>}>Accordian</MenuItem>
                        <MenuItem icon = {<MediationIcon style={{fontSize: '18px'}}/>}>Badges</MenuItem>
                        <MenuItem icon = {<MediationIcon style={{fontSize: '18px'}}/>}>Buttons</MenuItem>
                        <MenuItem icon = {<MediationIcon style={{fontSize: '18px'}}/>}>Cards</MenuItem>
                    </div>
                </SubMenu>
                <h5 style={{paddingLeft: '20px', fontSize: '14px', color: '#899bbd', fontWeight: '600', paddingTop: '10px', paddingBottom: '10px'}}>PAGES</h5>
                <MenuItem className={classes.menuItem} icon = {<ExtensionIcon/>}>Profile</MenuItem>
                <MenuItem className={classes.menuItem} icon = {<AccessibilityIcon/>}>F.A.Q</MenuItem>
                <MenuItem className={classes.menuItem} icon = {<QuestionMarkIcon/>} href='./Contact'>Contact</MenuItem>
                <MenuItem className={classes.menuItem} icon = {<MailOutlineIcon/>} href='./Register'>Register</MenuItem>
                <MenuItem className={classes.menuItem} icon = {<HowToRegIcon/>} href='./Login'>Login</MenuItem>
                <MenuItem className={classes.menuItem} href='/error' icon = {<ExitToAppIcon/>}>Error</MenuItem>
                <MenuItem className={classes.menuItem} icon = {<ReportIcon/>}>Blank</MenuItem>
            </Menu>
        </Sidebar>
    )
  }
