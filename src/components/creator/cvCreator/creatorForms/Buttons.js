import React from 'react'
import { Button } from '@material-ui/core'
import useStyles from '../styles'

const Buttons = ({ deleteElement , editElement , moveUp, moveDown }) => {
    const classes = useStyles()
    return (
        <>
            <Button
                className={`.buttonDenied ${classes.buttonSubmit}`}
                variant="contained" size="large" type='button'
                onClick={deleteElement}>
                X
            </Button>
            <Button
                className={`.buttonDenied ${classes.buttonSubmit}`}
                variant="contained" size="large" type='button'
                onClick={editElement}>
                Edit
            </Button>
            <Button
                className={`.buttonDenied ${classes.buttonSubmit}`}
                variant="contained" size="large" type='button'
                onClick={moveUp}>
                up
            </Button>
            <Button
                className={`.buttonDenied ${classes.buttonSubmit}`}
                variant="contained" size="large" type='button'
                onClick={moveDown}>
                down
            </Button>
        </>
    )
}

export default Buttons
