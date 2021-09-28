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
      display: 'none',
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