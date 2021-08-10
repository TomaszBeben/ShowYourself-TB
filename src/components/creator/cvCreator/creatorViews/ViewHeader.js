import React, { useState } from 'react'
import { styleOptions, colorOptions } from './selectOptions'
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { Button, Paper } from '@material-ui/core';
import useStyles from '../styles'

const ViewHeader = ({ sheetStyle, setSheetStyle, color, setColor }) => {
    const classes = useStyles()

    return (
        <>
            <Paper className={classes.viewHeader}>
                <div>
                    <FormControl className={classes.select}>
                        <InputLabel>Style</InputLabel>
                        <Select
                            native
                            value={sheetStyle}
                            onChange={(e) => setSheetStyle(e.target.value)}
                        >
                            <option aria-label="None" value="" />
                            {styleOptions.map((style, key) => (
                                <option key={style.value} value={style.value}>{style.label}</option>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl className={classes.select}>
                        <InputLabel>Color</InputLabel>
                        <Select
                            native
                            value={color}
                            onChange={(e) => setColor(e.target.value)}
                        >
                            <option aria-label="None" value="" />
                            {colorOptions.map((style, key) => (
                                <option key={style.value} value={style.value}>{style.label}</option>
                            ))}
                        </Select>
                    </FormControl>
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
