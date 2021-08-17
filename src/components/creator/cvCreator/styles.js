import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
    },
  },
  //padding: theme.spacing(1),
  //margin: theme.spacing(1),

  mainContainer: {
    maxWidth: '100vw',
    maxHeigth: '100vh',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#bac2cf'
  },
  mainCreator: {},
  A4Paper:{
    padding: theme.spacing(1),
    margin: theme.spacing(0.5),
    minWidth: '21cm',
    minHeight: '29.7cm',
    backgroundColor: 'white',
  },

  viewHeader:{
    margin: theme.spacing(1),
    maxWidth: '21cm',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },

  formAndView: {
    display: 'flex',
    flexDirection: 'row'
  },
  menuContainer: {
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    height: '95vh',
    width: '10vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  navContainer: {
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    maxWidth: '83vw',
    display: 'flex',
    flexDirection: 'row',
    overflow: 'auto'
  },

  formContainer:{},
  viewContainer:{
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    width: '45vw',
    overflow: 'auto',
    maxHeight: '70vh',
    display: 'flex',
    flexDirection: 'column'
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

  select: {
    margin: '0px 10px'
  },

  fileInput: {
    width: '97%',
    margin: '10px 0',
  },

  buttonSubmit: {
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1),
    textDecoration: 'none',
    '&:hover': {
      backgroundColor: '#228B22',
    }
  },
  buttonDelete: {
    '&:hover': {
      backgroundColor: 'yellowgreen',
    }
  }
}));