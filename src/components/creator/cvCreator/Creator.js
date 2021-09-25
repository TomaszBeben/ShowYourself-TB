import React, { useEffect, useState, } from 'react'
import CreatorForm from './CreatorForm'
import CreatorMenu from './CreatorMenu'
import CreatorView from './CreatorView'
import CreatorNav from './CreatorNav'
import { useDispatch } from 'react-redux'
import { getPost } from '../../../api/index'
import { Paper, makeStyles, Button } from '@material-ui/core';
import useStyles from './styles'
import { useAuth } from '../../../context/AuthContext'
import MobileNavBar from './MobileNavBar'
// import hash from 'hash.js'
const Creator = () => {
    const classes = useStyles()
    const { postData, setPostData, currentUser } = useAuth()
    const [currentId, setCurrentId] = useState(null)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPost())
    }, [currentId, dispatch])

    useEffect(() => {
        if (currentUser.email !== null || undefined || '') {
            localStorage.setItem('currentUser', currentUser.email)
            setPostData({ ...postData, currentUser: currentUser.email })
        } else {
            localStorage.setItem('currentUser', '')
            setPostData({ ...postData, currentUser: '' })
        }
    }, [currentUser, postData.currentUser, setPostData])



// import hash from 'hash.js'//console.log(hash.sha256().update('text').digest('hex'));
//console.log(hash.sha256().update(currentUser.email).digest('hex')) //hash maila


    return (

        <Paper className={classes.mainContainer}>
            <CreatorMenu />
            <div className={classes.mainCreator}>
                <div className={classes.formAndView}>
                    <CreatorForm postData={postData} setPostData={setPostData} setCurrentId={setCurrentId} currentId={currentId} />
                    <CreatorView postData={postData} setCurrentId={setCurrentId} currentId={currentId} />
                    {/* <MobileNavBar/> */}
                </div>
                <CreatorNav setCurrentId={setCurrentId} />
            </div>
        </Paper>
    )
}

export default Creator
