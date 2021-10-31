import { makeStyles } from '@material-ui/core/styles';

const margin = '1vh';
const padding = '10px';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
    },
  },

  mapElem:{
    marginBottom: margin,
    padding: padding
  },

  breakpointHide: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },

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