import React, { useRef } from 'react'
import CurrentCv from './CurrentCv'
import { useHistory } from 'react-router-dom'
import ReactToPrint from 'react-to-print';


import { Button } from '@material-ui/core'
import useStyles from './styles'
import { Paper } from '@material-ui/core';
import { useAuth } from '../../../context/AuthContext'

const CvPreview = () => {
    const { postData } = useAuth()
    const classes = useStyles()

    const componentRef = useRef()
    const history = useHistory()

    return (
        <div className='cvPreview-container'>
            <div className='cvPreview-header'>
                <div className='cvPreview-header-element'>
                    <Button onClick={() => { history.goBack() }} className={classes.buttonSubmit} variant="contained" size="large">Back</Button>
                </div>
                <div className='cvPreview-header-element'>
                    <ReactToPrint
                        trigger={() => <Button className={classes.buttonSubmit} variant="contained" size="large">Download</Button>}
                        content={() => componentRef.current}
                    />
                </div>
            </div>
            <Paper className={`scaling ${classes.A4Paper}`}>
                <CurrentCv postData={postData} ref={componentRef} />
            </Paper>
        </div>

    )
}

export default CvPreview
