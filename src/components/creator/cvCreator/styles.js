import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
    },
  },
  mainContainer:{
    padding: theme.spacing(1),
    width: '99vw',
        heigth: '99vh',
        display: 'flex',
        flexDirection: 'row'
  },
  menuContainer:{
    padding: theme.spacing(1),
    height: '95vh',
    width: '15vw',
  },
  viewContainer:{
    margin: theme.spacing(1),
    padding: theme.spacing(1),
    display: 'flex',
    flexDirection: 'row'
  },
  formAndView: {
    padding: theme.spacing(1),
    display: 'flex',
    flexDirection: 'row'
  },
  view:{
    padding: theme.spacing(1),
  },
  paper: {
    padding: theme.spacing(1),
    width: '40vw',
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