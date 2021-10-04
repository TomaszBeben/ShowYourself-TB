import React, { useEffect, useState, } from 'react'
import CreatorForm from './CreatorForm'
import CreatorMenu from './CreatorMenu'
import CreatorView from './CreatorView'
import CreatorNav from './CreatorNav'
import { useDispatch } from 'react-redux'
import { getPost } from '../../../api/index'
import { Paper } from '@material-ui/core';
import creatorStyles from './styles/creatorStyles'
import { useAuth } from '../../../context/AuthContext'
import MobileNavBarTop from './MobileNavBarTop'
import MobileNavBarBottom from './MobileNavBarBottom'
// import hash from 'hash.js'
const Creator = () => {
    const classes = creatorStyles()
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
            <div>
                <div className={classes.formAndView}>
                    <MobileNavBarBottom/>
                    <CreatorForm postData={postData} setPostData={setPostData} setCurrentId={setCurrentId} currentId={currentId} />
                    <CreatorView postData={postData} setCurrentId={setCurrentId} currentId={currentId} />
                    <MobileNavBarTop />
                </div>
                <CreatorNav setCurrentId={setCurrentId} />
            </div>
        </Paper>
    )
}

export default Creator
