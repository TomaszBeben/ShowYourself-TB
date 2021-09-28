import { makeStyles } from '@material-ui/core/styles';

const margin = '1vh';
const padding = '10px';

export default makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
        },
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
            justifyContent: 'space-between'
        },
        display: 'none',
    },

}));