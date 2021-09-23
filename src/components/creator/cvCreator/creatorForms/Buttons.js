import React from 'react'
import { Button } from '@material-ui/core'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import useStyles from '../styles'

const Buttons = ({ deleteElement, editElement, moveUp, moveDown }) => {
    const classes = useStyles()
    return (
        <>
            <Button>
                <EditIcon onClick={editElement} className={`materialUI--edit_button ${classes.button}`} fontSize='medium' />
            </Button>
            <Button>
                <DeleteForeverIcon onClick={deleteElement} className={`materialUI--delete_button ${classes.button}`} fontSize='medium' />
            </Button>
            <Button>
                <KeyboardArrowUpIcon onClick={moveUp} className={`materialUI--up_button ${classes.button}`} fontSize='medium' />
            </Button>
            <Button>
                <KeyboardArrowDownIcon onClick={moveDown} className={`materialUI--down_button ${classes.button}`} fontSize='medium' />
            </Button>
        </>
    )
}

export default Buttons
