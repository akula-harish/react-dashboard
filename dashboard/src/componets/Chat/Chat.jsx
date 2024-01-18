import makeStyles from '@mui/styles/makeStyles';
import React, { useEffect, useState } from 'react'
import { chatBoxStyle } from './chatStyles'
import { Button } from '@mui/material';

const useStyles = makeStyles(chatBoxStyle);

export default function Chat({showChatBox}) {
    let classes = useStyles();
    const[data, setData] = useState("");
    const[messages, setMessages] = useState([]);

    const initialData = (e) => { 
        setData(e.target.value)
    }

    const inputData = () => {
        setMessages([...messages, data])
    }

  
  return (
    <>
        { showChatBox ?  
            <div className={classes.root}>
                <div className={classes.form_Main}>
                    <ul>
                        {
                            messages.map((item, i) => {
                                return(
                                    <li key={i} className={classes.meassage_list}>{item}</li>
                                )
                            })
                        }
                    </ul>
                    <ul className={classes.form_list}>
                        <li><input type='text' value={data} onChange={initialData} placeholder='Enter Message Here' className={classes.form_input}/></li>
                        <li><Button className={classes.send_btn} onClick={inputData}>Send</Button></li>
                    </ul>
                </div>
        </div> 
        : <></>
        }
    </>
  )
}
