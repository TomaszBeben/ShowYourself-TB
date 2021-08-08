import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
    },
  },
  //padding: theme.spacing(1),
  //margin: theme.spacing(1),

  mainContainer: {
    maxWidth: '99vw',
    maxHeigth: '99vh',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#bac2cf'
  },
  mainCreator: {},

  formAndView: {
    display: 'flex',
    flexDirection: 'row'
  },
  menuContainer: {
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    height: '95vh',
    width: '10vw',
  },
  navContainer: {
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    display: 'flex',
    flexDirection: 'row'
  },

  formContainer:{},
  viewContainer:{
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    width: '45vw',
    overflow: 'auto',
    maxHeight: '70vh',
  },

  paper: {
    padding: theme.spacing(1),
    margin: theme.spacing(1),
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
    marginBottom: 10,
    '&:hover': {
      backgroundColor: 'yellowgreen',
    }
  },
}));