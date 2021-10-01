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

    topBar: {
        [theme.breakpoints.down('sm')]: {
            width: '100vw',
            height: '5vh',
            position: 'fixed',
            top: '0',
            right: '0',
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: 'space-between',
            borderBottom: '1px solid black',
            zIndex: '2',
        },
        display: 'none',
    },

    bottomBar: {
        [theme.breakpoints.down('sm')]: {
            width: '100vw',
            height: '5vh',
            position: 'fixed',
            bottom: '0',
            right: '0',
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: 'space-between',
            borderTop: '1px solid black',
            zIndex: '2',
        },
        display: 'none',
    },

}));