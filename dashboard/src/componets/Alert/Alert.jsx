import React from 'react'
import Alerts from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import './Alert.css'
function Alert() {
  return (
    <ul className='alert_head'>
     <li>
     <Stack sx={{ width: '100%' }} spacing={2} className='alert_box'>
      <Alerts severity="success" >This is a success Alert.</Alerts>
      <Alerts severity="info">This is an info Alert.</Alerts>
      <Alerts severity="warning">This is a warning Alert.</Alerts>
      <Alerts severity="error" >This is an error Alert.</Alerts>
    </Stack>
     </li>
     <li>
     <Stack sx={{ width: '100%' }} spacing={2} className='alert_box'>
      <Alerts severity="success" variant="filled">This is a success Alert.</Alerts>
      <Alerts severity="info" variant="filled">This is an info Alert.</Alerts>
      <Alerts severity="warning" variant="filled">This is a warning Alert.</Alerts>
      <Alerts severity="error" variant="filled">This is an error Alert.</Alerts>
     
    </Stack>
     </li>
     <li>
     <Stack sx={{ width: '100%' }} spacing={2} className='alert_box'>
      <Alerts severity="success" variant="outlined" className='test'>This is a success Alert.</Alerts>
      <Alerts severity="info" variant="outlined" className='test'>This is an info Alert.</Alerts>
      <Alerts severity="warning" variant="outlined" className='test'>This is a warning Alert.</Alerts>
      <Alerts severity="error" variant="outlined" className='test'>This is an error Alert.</Alerts>
      
    </Stack>
     </li>
     <li>
     <Stack sx={{ width: '100%' }} spacing={2} className='alert_box'>
      <Alerts severity="success" >This is a success Alert.</Alerts>
      <Alerts severity="info">This is an info Alert.</Alerts>
      <Alerts severity="warning">This is a warning Alert.</Alerts>
      <Alerts severity="error" >This is an error Alert.</Alerts>
    </Stack>
     </li>
    </ul>
  )
}
export default Alert
