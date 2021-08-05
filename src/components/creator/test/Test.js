import React from 'react'
import { useHistory } from 'react-router-dom'
import { TextField, Button, Typography, Paper } from '@material-ui/core';

import  useStyles  from './styles'

const Test = () => {
    const history = useHistory()
    const classes = useStyles()



    return (
        <>
        <button onClick={()=> history.goBack()} >wstecz</button>
        <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} >
        <Typography variant="h6">header</Typography>
        <TextField  name="creator" variant="outlined" label="Creator" fullWidth />
        <TextField name="title" variant="outlined" label="Title" fullWidth  />
        <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4}  />
        <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth  />
        <div className={classes.fileInput}></div>
        <Button className={classes.buttonSubmit} variant="contained" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small"  fullWidth>Clear</Button>
      </form>
    </Paper>
        </>
    )
}

export default Test
