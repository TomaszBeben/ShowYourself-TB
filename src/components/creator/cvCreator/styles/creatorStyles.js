import { makeStyles } from '@material-ui/core/styles';

// const margin = '1vh';
// const padding = '10px';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
    },
  },

  mainContainer: {
    maxWidth: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#bac2cf'
  },

  formAndView: {
    display: 'flex',
    flexDirection: 'row',
    height: '78vh',
    // width: '45vw',
    [theme.breakpoints.down('sm')]: {
      width: '100vw',
      height: '100vh',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column-reverse',
    },
  },

}));