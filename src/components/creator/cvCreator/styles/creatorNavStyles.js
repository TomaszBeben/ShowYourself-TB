import { makeStyles } from '@material-ui/core/styles';

const margin = '1vh';
const padding = '10px';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
    },
  },
  navInvisibleDiv:{
    [theme.breakpoints.down('sm')]: {
      // margin: 'auto',
      position: 'fixed',
      width: '65vw',
      height: '100vh',
      left: '0',
      top: '0',
      zIndex: 5,
      padding: padding,
      margin: '0',
    }
  },

  navContainer: {
    [theme.breakpoints.down('sm')]: {
      // margin: 'auto',
      position: 'absolute',
      width: '35vw',
      height: '100vh',
      right: '0',
      top: '0',
      zIndex: 5,
      padding: padding,
      margin: '0',
      flexDirection: 'row'
    },

    padding: padding,
    margin: margin,
    height: '20vh',
    maxWidth: '83vw',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'auto'
  },
}));