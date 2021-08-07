import React from 'react'
import { CircularProgress } from '@material-ui/core'
import { useAuth } from '../../../context/AuthContext'
import { useSelector, useDispatch } from 'react-redux'

import { deletePostData } from '../../../api'

import { TextField, Button, Typography, Paper } from '@material-ui/core';
import useStyles from './styles'

const CreatorView = ({ setCurrentId, postData }) => {

    const dispatch = useDispatch()
    const postDatas = useSelector((state) => state.postDatas)
    const { currentUser } = useAuth()
    const classes = useStyles()

    const cvcontainer = {
        width: '20vw',
        height: '20vh',
        border: '1px solid black',
        overflow: 'auto'
    }
    return (
        <div className={classes.paper}>
            <p>{postData.name}</p>
            <p>{postData.surname}</p>
            <p>{postData.dateOfBirth}</p>
            <p>{postData.country}</p>
            <p>{postData.city}</p>
            <p>{postData.phone}</p>
            <p>{postData.zipCode}</p>
            <p>{postData.education.first.degree}</p>
            <p>{postData.education.first.school}</p>
            <p>{postData.education.first.city}</p>
            <p>{postData.education.first.start}</p>
            <p>{postData.education.first.end}</p>
            <p>{postData.experience.first.position}</p>
            <p>{postData.education.first.description}</p>
        </div>
    )
}

export default CreatorView
