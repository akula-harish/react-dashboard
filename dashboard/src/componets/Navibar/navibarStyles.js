import createStyles from '@mui/styles/createStyles';
import '../Body/body.css'
export const NavibarStyles = () => 
    createStyles({
        subMenu:{
            color: '#012970',
            fontSize: '14px',
            background:'var(--background-color)',
            '& MenuItem':{
                background:'none'
               }
        },
        menuItem: {
            color:' var(--text-color)',
            fontSize: '14px',
           
        },
        // test:{
        //     background:'var(--background-color)'!important,
        // }
    })