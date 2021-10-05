import { makeStyles } from '@material-ui/core/styles';

const margin = '1vh';
// const padding = '10px';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
    },
  },

  breakpointHide: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },

  sizingView:{
    zoom: '0.425'
  },

  A4Paper: {
    width: '21cm',
    backgroundColor: 'white',
    [theme.breakpoints.down('sm')]: {
      zoom: '0.5',
    },
  },

  viewContainer: {
    [theme.breakpoints.down('sm')]: {
      width: '95vw',
      // padding: padding,
    },
    width: '45vw',
    overflow: 'auto',
    maxHeight: '78vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: 'center',
  },

  viewHeader: {
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100vw',
    },
    minHeight: '8vh',
    margin: `${margin} 0vh`,
    width: 'inherit',
    maxWidth: '21cm',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    // marginLeft: 'auto',
    // marginRight: 'auto',
  },

  select: {
    margin: '0px 10px'
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