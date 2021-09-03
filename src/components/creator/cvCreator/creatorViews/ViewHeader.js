import React from 'react'
import { styleOptions, colorOptions } from './selectOptions'
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Link } from 'react-router-dom'

import { Button, Paper } from '@material-ui/core';
import useStyles from '../styles'

const ViewHeader = ({ color, setColor, sheetStyle, setSheetStyle }) => {
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
                            onChange={(e) => setSheetStyle(e.target.value)}>
                            <option aria-label="None" value="" />
                            {styleOptions.map((style) => (
                                <option key={style.value} value={style.value}>{style.label}</option>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl className={classes.select}>
                        <InputLabel>Color</InputLabel>
                        <Select
                            native
                            value={color}
                            onChange={(e) => setColor(e.target.value)}>
                            <option aria-label="None" value="" />
                            {colorOptions.map((style) => (
                                <option key={style.value} value={style.value}>{style.label}</option>
                            ))}
                        </Select>
                    </FormControl>
                    <div>
                        <Button
                            className={classes.buttonSubmit} variant="contained" size="large"
                            onClick={() => { console.log('style: ' + sheetStyle); console.log('color: ' + color); }}>
                            Check
                        </Button>
                    <Link to='/cvpreview'>
                        <Button
                            className={classes.buttonSubmit} variant="contained" size="large">
                            Cv Preview
                        </Button>
                    </Link>
                    </div>
                </div>
                <div>
                    <Button
                        className={classes.buttonSubmit} variant="contained" size="large"
                        onClick={() => { console.log('kiedys bedzie pobieranie :)'); }} >
                        Pobierz
                    </Button>
                </div>
            </Paper>

        </>

    )
}

export default ViewHeader
