import React, { useState } from 'react'
import { styleOptions, colorOptions } from './selectOptions'
import { Button, Paper } from '@material-ui/core';
import useStyles from '../styles'

const ViewHeader = ({ sheetStyle, setSheetStyle, color, setColor }) => {
    const classes = useStyles()

    return (
        <>
            <Paper className={classes.viewHeader}>
                <div>
                    <div>
                        <div>
                            <select onChange={(e) => setSheetStyle(e.target.value)}>
                                {styleOptions.map((option) => (
                                    <option value={option.value}>{option.label}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <select onChange={(e) => setColor(e.target.value)}>
                                {colorOptions.map((color) => (
                                    <option value={color}>{color}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div>
                        <Button onClick={() => { console.log('style: ' + sheetStyle); console.log('color: ' + color); }} className={classes.buttonSubmit}>Check</Button>
                    </div>
                </div>
                <div>
                    <Button onClick={() => { console.log('kiedys bedzie pobieranie :)'); }} className={classes.buttonSubmit}>Pobierz</Button>
                </div>
            </Paper>
        </>

    )
}

export default ViewHeader
