import { makeStyles } from '@material-ui/core/styles';

const margin = '1vh';
const padding = '10px';

export default makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
        },
    },
    breakpointHide: {
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        }
    },

    menuContainer: {
        [theme.breakpoints.down('sm')]: {
            margin: 'auto',
            position: 'absolute',
            width: '75vw',
            height: '100vh',
            left: '0',
            zIndex: 5,
            // display: 'none',
        },
        padding: padding,
        margin: margin,
        height: '98vh',
        width: '13vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
    },

    buttonSubmit: {
        padding: '3px',
        marginBottom: margin,
        marginTop: margin,
        textDecoration: 'none',
        '&:hover': {
            background: 'linear-gradient(180deg, rgba(5, 99, 8, 1) 0%, rgba(19, 148, 11, 1) 100%)'
        }
    },

}));