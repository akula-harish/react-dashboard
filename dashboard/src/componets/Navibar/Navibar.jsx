import React, { useState } from 'react'
import "./navibar.css"
import "../../App.css"
//import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
//import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
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

import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import makeStyles from '@mui/styles/makeStyles';
import { NavibarStyles } from './navibarStyles';

const useStyles = makeStyles(NavibarStyles);

export default function Navibar() {
 
    const classes = useStyles();
    return(
        <Sidebar className='sidebar_main'>
            <Menu
                menuItemStyles={{
                button: {
                    [`&.active`]: {
                    backgroundColor: '#13395e',
                    color: '#012970',
                    },
                },
                }}
            >
                <MenuItem className={classes.menuItem} href='/dashboard'><GridViewIcon/> Dashboard</MenuItem>
                <SubMenu label = {`${<LayersIcon/>} Components`} className={classes.subMenu}>
                    <MenuItem>Alerts</MenuItem>
                    <MenuItem>Accordian</MenuItem>
                    <MenuItem>Badges</MenuItem>
                    <MenuItem>Buttons</MenuItem>
                    <MenuItem>Cards</MenuItem>
                </SubMenu>
                <SubMenu label = 'Forms' className={classes.subMenu}>
                    <MenuItem>Alerts</MenuItem>
                    <MenuItem>Accordian</MenuItem>
                    <MenuItem>Badges</MenuItem>
                    <MenuItem>Buttons</MenuItem>
                    <MenuItem>Cards</MenuItem>
                </SubMenu>
                <SubMenu label = 'Tabels' className={classes.subMenu}>
                    <MenuItem>Alerts</MenuItem>
                    <MenuItem>Accordian</MenuItem>
                    <MenuItem>Badges</MenuItem>
                    <MenuItem>Buttons</MenuItem>
                    <MenuItem>Cards</MenuItem>
                </SubMenu>
                <SubMenu label = 'Charts' className={classes.subMenu}>
                    <MenuItem>Alerts</MenuItem>
                    <MenuItem>Accordian</MenuItem>
                    <MenuItem>Badges</MenuItem>
                    <MenuItem>Buttons</MenuItem>
                    <MenuItem>Cards</MenuItem>
                </SubMenu>
                <SubMenu label = 'Icons' className={classes.subMenu}>
                    <MenuItem>Alerts</MenuItem>
                    <MenuItem>Accordian</MenuItem>
                    <MenuItem>Badges</MenuItem>
                    <MenuItem>Buttons</MenuItem>
                    <MenuItem>Cards</MenuItem>
                </SubMenu>
                <h5 style={{paddingLeft: '20px', fontSize: '14px', color: '#899bbd'}}>PAGES</h5>
                <MenuItem className={classes.menuItem}>Profile</MenuItem>
                <MenuItem className={classes.menuItem}>F.A.Q</MenuItem>
                <MenuItem className={classes.menuItem}>Contact</MenuItem>
                <MenuItem className={classes.menuItem}>Register</MenuItem>
                <MenuItem className={classes.menuItem}>Login</MenuItem>
                <MenuItem className={classes.menuItem} href='/error'>Error</MenuItem>
                <MenuItem className={classes.menuItem}>Blank</MenuItem>
            </Menu>
        </Sidebar>
    )
  }
