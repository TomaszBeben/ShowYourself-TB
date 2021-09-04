import React from 'react'
import CurrentCv from './CurrentCv'
import { Link } from 'react-router-dom'

import { Button } from '@material-ui/core'
import useStyles from './styles'
import { Paper } from '@material-ui/core';
import { useAuth } from '../../../context/AuthContext'

const CvPreview = () => {
    const { postData } = useAuth()
    const classes = useStyles()
    return (
        <div className='cvPreview-container'>
            <div className='cvPreview-header'>
                <div className='cvPreview-header-element'>
                    <Link to='/cvcreator/basics' style={{ textDecoration: 'none' }}>
                        <Button className={classes.buttonSubmit} variant="contained" size="large">Back</Button>
                    </Link>
                </div>
                <div className='cvPreview-header-element'>
                    <Button className={classes.buttonSubmit} variant="contained" size="large">Download</Button>
                </div>
            </div>
            <Paper className={`scaling ${classes.A4Paper}`}>
                <CurrentCv postData={postData} />
            </Paper>
        </div>

    )
}

export default CvPreview
