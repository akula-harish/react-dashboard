import { createStyles } from "@mui/material";

export const chatBoxStyle = () => 
    createStyles({
        root: {
            position: 'relative',
            height: '400px',
            width: '300px',
            border: '1px solid #ececec',
            backgroundColor: '#ececec',
            borderRadius: '8px',
            padding: '20px'
        },
        form_Main: {
            position: 'absolute',
            bottom: '0px',
        },
        form_input: {
            height: '30px',
            fontSize: '14px',
            width: '100%',
            border: '1px solid #fff',
            borderRadius: '6px',
            padding: '0px 10px',
            color: '#000',
        },
        form_list: {
            display: 'flex',
            padding: '10px 0px'
        },
        send_btn: {
            border: '1px solid #000',
            height: '30px',
        },
        meassage_list: {
            display: 'inline-block',
            fontSize: '20px',
            textAlign: 'end',
            width: '100%',
            color: '#000',
        },
    })