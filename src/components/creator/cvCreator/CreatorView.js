import React, {useState} from 'react'
import { CircularProgress } from '@material-ui/core'
import { useAuth } from '../../../context/AuthContext'
import { useSelector, useDispatch } from 'react-redux'
import { deletePostData } from '../../../api'
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import useStyles from './styles'
import A4Size from './creatorViews/A4Size'

const CreatorView = ({ postData }) => {

    const classes = useStyles()

    return (
        <div className={classes.viewContainer}>
            <h1>
                <Button fullWidth className={classes.buttonSubmit}>Check</Button>
            </h1>
            <A4Size postData={postData} />
        </div >
    )
}

export default CreatorView
