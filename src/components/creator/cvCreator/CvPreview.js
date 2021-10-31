import React, { useRef } from 'react'
import CurrentCv from './CurrentCv'
import { useHistory } from 'react-router-dom'
import ReactToPrint from 'react-to-print'
import { styleOptions, colorOptions } from './creatorViews/selectOptions'

import { Paper, Button, Select } from '@material-ui/core'
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

import useStyles from './styles'
import { useAuth } from '../../../context/AuthContext'

const CvPreview = () => {
    const { postData, color, setColor, sheetStyle, setSheetStyle } = useAuth()
    const classes = useStyles()

    const componentRef = useRef()
    const history = useHistory()

    return (
        <div className='cvPreview-container'>
            <Paper className='cvPreview-header scaling'>
                <div className='cvPreview-header-element'>
                    <Button onClick={() => { history.goBack() }} className={classes.buttonSubmit} variant="contained" size="large">Back</Button>
                </div>
                <FormControl className={`${classes.select} cvPreview-header-element`}>
                    <InputLabel>Style</InputLabel>
                    <Select
                        native
                        value={sheetStyle}
                        onChange={(e) => setSheetStyle(e.target.value)}>
                        {/* <option aria-label="None" value="" /> */}
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
                        {/* <option aria-label="None" value="" /> */}
                        {colorOptions.map((style) => (
                            <option key={style.value} value={style.value}>{style.label}</option>
                        ))}
                    </Select>
                </FormControl>
                <div className='cvPreview-header-element'>
                    <ReactToPrint
                        trigger={() => <Button className={classes.buttonSubmit} variant="contained" size="large">Download</Button>}
                        content={() => componentRef.current}
                    />
                </div>
            </Paper>
            <Paper className={`scaling ${classes.A4Paper}`}>
                <CurrentCv postData={postData} ref={componentRef} />
            </Paper>
        </div>

    )
}

export default CvPreview
