import { makeStyles } from '@material-ui/core/styles';

const margin = '1vh';
const padding = '10px';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
    },
  },
  navInvisibleDiv: {
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
      position: 'absolute',
      width: '35vw',
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
    overflow: 'auto'
  },

  navImgFile: {
    width: '10vw',
    height: '15vh',
    objectFit: 'cover'
    // borderRadius: '50%',
  },

  // navContainerDirection: {
  //   [theme.breakpoints.down('sm')]: {
  //     display: 'flex',
  //     flexDirection: 'owr'
  //   },
  //   display: 'flex',
  //   flexDirection: 'row',
  // },
}));