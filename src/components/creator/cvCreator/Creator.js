import React, { useEffect, useState, } from 'react'
import CreatorForm from './CreatorForm'
import CreatorMenu from './CreatorMenu'
import CreatorView from './CreatorView'
import CreatorNav from './CreatorNav'
import { useDispatch } from 'react-redux'
import { getPost } from '../../../api/index'
import { useAuth } from '../../../context/AuthContext'
import { initialState } from './variables'


import { Paper } from '@material-ui/core';
import  useStyles  from './styles'

const Creator = () => {

    const { currentUser } = useAuth()
    const [postData, setPostData] = useState(initialState(currentUser))
    const classes = useStyles()
    localStorage.setItem('currentUser', currentUser.email)

    const [currentId, setCurrentId] = useState(null)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPost())
    }, [currentId, dispatch])

    return (

        <Paper className={classes.mainContainer}>
            <CreatorMenu />
            <div className={classes.mainCreator}>
                <div className={classes.formAndView}>
                    <CreatorForm postData={postData} setPostData={setPostData} setCurrentId={setCurrentId} currentId={currentId} />
                    <CreatorView postData={postData} setCurrentId={setCurrentId} currentId={currentId}/>
                </div>
                <CreatorNav setCurrentId={setCurrentId} />
            </div>
        </Paper>
    )
}

export default Creator
