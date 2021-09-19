import React from 'react'
import { Button } from '@material-ui/core'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import useStyles from '../styles'

const Buttons = ({ deleteElement , editElement , moveUp, moveDown }) => {
    const classes = useStyles()
    return (
        <>
            <EditIcon onClick={editElement} className={classes.button} fontSize='large'/>
            <DeleteForeverIcon onClick={deleteElement} className={classes.button} fontSize='large'/>
            <KeyboardArrowUpIcon onClick={moveUp} className={classes.button} fontSize='large' />
            <KeyboardArrowDownIcon onClick={moveDown} className={classes.button} fontSize='large' />
        </>
    )
}

export default Buttons
