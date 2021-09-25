import { makeStyles } from '@material-ui/core/styles';

const margin = '1vh';
const padding = '10px';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
    },
  },

  mainContainer: {
    // [theme.breakpoints.down('sm')]: {
    //   position: 'relative'
    // },
    maxWidth: '100vw',
    maxHeigth: '100vh',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#bac2cf'
  },

  breakpointHide: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  A4Paper: {
    width: '21cm',
    backgroundColor: 'white',
  },

  viewContainer: {
    [theme.breakpoints.down('sm')]: {
      width: '95vw',
      // padding: padding,
    },
    width: '45vw',
    overflow: 'auto',
    maxHeight: '70vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },

  viewHeader: {
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100vw',
      minWidth: '90vw',
    },
    minHeight: '15vh',
    margin: `${margin} 0vh`,
    minWidth: '45vw',
    maxWidth: '21cm',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  formAndView: {
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down('sm')]: {
      width: '100vw',
      height: '100vh',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column-reverse',
    },
  },
  menuContainer: {
    [theme.breakpoints.down('sm')]: {
      margin: 'auto',
      // display: 'none',
      position: 'absolute',
      width: '75vw',
      height: '100vh',
      left: '0px',
      zIndex: 5
    },
    padding: padding,
    margin: margin,
    height: '95vh',
    width: '13vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  navContainer: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    padding: padding,
    margin: margin,
    height: '25vh',
    maxWidth: '83vw',
    display: 'flex',
    flexDirection: 'row',
    overflow: 'auto'
  },

  formContainer: {},


  paper: {
    [theme.breakpoints.down('sm')]: {
      width: '95vw',
      maxHeight: '90vh',
      margin: 0,
    },
    padding: padding,
    margin: margin,
    width: '35vw',
    overflow: 'auto',
    maxHeight: '70vh',
  },

  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },

  select: {
    margin: '0px 10px'
  },

  fileInput: {
    width: '97%',
    margin: '10px 0',
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

  button: {
    padding: '3px',
    marginBottom: margin,
    marginTop: margin,
    textDecoration: 'none',
  }
}));