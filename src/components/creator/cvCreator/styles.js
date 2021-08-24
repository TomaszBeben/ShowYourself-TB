import { makeStyles } from '@material-ui/core/styles';

 const margin = '1vh';
 const padding = '10px';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
    },
  },

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
    padding: padding,
    margin: margin,
    minWidth: '21cm',
    minHeight: '29.7cm',
    backgroundColor: 'white',
  },

  viewHeader:{
    margin: margin,
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
    padding: padding,
    margin: margin,
    height: '95vh',
    width: '13vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  navContainer: {
    padding: padding,
    margin: margin,
    height: '25vh' ,
    maxWidth: '83vw',
    display: 'flex',
    flexDirection: 'row',
    overflow: 'auto'
  },

  formContainer:{},
  viewContainer:{
    width: '45vw',
    overflow: 'auto',
    maxHeight: '70vh',
    display: 'flex',
    flexDirection: 'column'
  },

  paper: {
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
    marginBottom: margin,
    marginTop: margin,
    textDecoration: 'none',
  },
}));