import { createStyles } from "@mui/material";

export const chatBoxStyle = () => 
    createStyles({
        root: {
            position: 'relative',
            height: '86%',
            width: '300px',
            border: '1px solid #ececec',
            borderRadius: '20px',
            // padding: '20px',
            marginTop: '68px',
            boxShadow:'0px 11px 15px -7px rgba(0,0,0,0.2), 0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)',
            background: '#fff',
        },
        form_Main: {
            position: 'absolute',
            bottom: '2px',
            width: '100%',
            padding: '10px',
        },
        form_input: {
            fontSize: '14px',
            width: '100%',
            padding: '0px 10px',
            color: '#000',
            border:'1px solid #ececec',
            // borderRadius:'4px',
            height:'40px',
            borderTopLeftRadius: '6px',
            borderBottomLeftRadius: '6px',
        },
        form_list: {
            display: 'flex',
            alignItems:'center' ,
            gap:'2px'  
            },
        send_btn: {
            border:'1px solid #ececec',
            background:'#4454f4',
            // borderRadius:'4px',
            width: '2em!important',
            height: '2em!important',
            color:'#fff',
            padding:'8px',
            borderTopRightRadius: '6px',
            borderBottomRightRadius: '6px',
        },
        meassage_list: {
            display: 'inline-block',
            fontSize: '16px',
            textAlign: 'end',
            width: '100%',
            color: '#000',
            // paddingBottom: '6px',
        },
        form_list:{
            position: 'relative',
            width: '100%',
            fontSize: '0px',
            // borderTop: '1px solid #000',
        },
        form_list_c_one:{
            width: '85%',
            display: 'inline-block',
            verticalAlign: 'middle'
        },
        form_list_c_two:{
            width: '15%',
            display: 'inline-block',
            verticalAlign: 'middle',
        },
        meassage_list_opp:{
            display: 'inline-block',
            fontSize: '16px',
            textAlign: 'left',
            width: '100%',
            color: '#000',
        }  
    })