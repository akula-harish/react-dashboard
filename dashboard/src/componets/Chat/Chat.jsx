import makeStyles from '@mui/styles/makeStyles';
import React, { useEffect, useState } from 'react'
import { chatBoxStyle } from './chatStyles'
import SendIcon from '@mui/icons-material/Send';
const useStyles = makeStyles(chatBoxStyle);

export default function Chat({showChatBox}) {
    let classes = useStyles();
    const[data, setData] = useState("");
    const[messages, setMessages] = useState([]);
    const[robotmsg, setRobotmsg] = useState([]);
    const[storeRoboMsg, setStoreRoboMsg] = useState([]);
    // console.log(storeRoboMsg);

    const initialData = (e) => { 
        setData(e.target.value)
    }    
  
    const inputData = () => {
        setMessages((prevMessages) => [...prevMessages, data]);
        setData("");
    }

    useEffect(() => {
        if (messages[messages.length - 1] === "hi") {
            setRobotmsg((prevRobotMsg) => [...prevRobotMsg, "Hi"]);
        } else if (messages[messages.length - 1] === "hello") {
            setRobotmsg((prevRobotMsg) => [...prevRobotMsg, "Hello"]);
        }

        setStoreRoboMsg((prevStoreRoboMsg) => [...prevStoreRoboMsg, robotmsg]);
    }, [messages]);

    const enter = (event) => {
        if (event.keyCode === 13) {
            inputData();
        }
    }

    return (
        <>
            {showChatBox ?
                <div className={classes.root}>
                    <div className={classes.form_Main}>
                        <ul>
                            {messages.map((item, i) => (
                                <li key={i} className={classes.meassage_list}>{item}</li>
                            ))}
                        </ul>
                        <ul>
                            {robotmsg.map((item, i) => (
                                <li key={i} className={classes.meassage_list_opp}>{item}</li>
                            ))}
                        </ul>
                        <ul className={classes.form_list}>
                            <li className={classes.form_list_c_one}>
                                <input
                                    type='text'
                                    value={data}
                                    onChange={initialData}
                                    placeholder='Enter Message Here'
                                    className={classes.form_input}
                                    onKeyDown={(e) => enter(e)}
                                />
                            </li>
                            <li className={classes.form_list_c_two}>
                                <SendIcon className={classes.send_btn} onClick={inputData}/>
                            </li>
                        </ul>
                    </div>
                </div>
                : <></>
            }
        </>
    )
}
