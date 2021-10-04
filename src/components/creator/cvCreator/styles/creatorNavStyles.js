import { makeStyles } from '@material-ui/core/styles';

const margin = '1vh';
const padding = '10px';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
    },
  },
  navContainer: {
    [theme.breakpoints.down('sm')]: {
      // margin: 'auto',
      position: 'absolute',
      width: '30vw',
      height: '100vh',
      right: '0',
      top: '0',
      zIndex: 5,
      padding: padding,
      margin: '0',
    },

    padding: padding,
    margin: margin,
    height: '20vh',
    maxWidth: '83vw',
    display: 'flex',
    flexDirection: 'row',
    overflow: 'auto'
  },
}));