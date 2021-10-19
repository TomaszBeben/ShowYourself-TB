import React from 'react'
import { useAuth } from '../../../context/AuthContext'
import { CircularProgress } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'

import { Paper, Button } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import creatorNavStyles from './styles/creatorNavStyles'


import { deletePost } from '../../../api'

const CreatorNav = ({ setCurrentId }) => {

    const { hideMobileNav, setHideMobileNav} = useAuth()
    const dispatch = useDispatch()
    const posts = useSelector((state) => state.posts)
    const classes = creatorNavStyles()


    const cvcontainer = {
        display: 'flex',
        flexDirection: 'row',
        margin: '1rem'
    }
    return (
        <Paper onClick={()=>{setHideMobileNav('hideMobileMenu')}} className={`${classes.navContainer} ${hideMobileNav}`}>
            <div className={`${classes.navInvisibleDiv} ${hideMobileNav}`}></div>
            {!posts.length ? <CircularProgress /> : (
                <div>
                    {posts.map((post, index) => (
                        <div key={post._id} style={cvcontainer} >
                            <div>{index + 1}.</div>
                            <div>
                                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                                    <div>
                                        {!post.file ? '' : <img src={post.file} alt='' style={{ width: '50px', height: '50px', borderRadius: '50%' }} />}
                                    </div>
                                    <div>
                                        <p>{post.name}</p>
                                        <p>{post.surname}</p>
                                    </div>
                                </div>
                                <Button onClick={() => setCurrentId(post._id)} >
                                    <EditIcon fontSize="small" />
                                </Button>
                                <Button onClick={() => {
                                    if (window.confirm('Are you sure you want to delete this post?')) {
                                        dispatch(deletePost(post._id))
                                        console.log('Post Deleted!');
                                    }
                                }}>
                                    <DeleteForeverIcon fontSize="small" />
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </Paper>
    )
}

export default CreatorNav
