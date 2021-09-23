import React from 'react'
import { TextField, Button } from '@material-ui/core'
import FileBase from 'react-file-base64'
import  useStyles  from '../styles'
import { useAuth } from '../../../../context/AuthContext'


const Basics = () => {
    const {postData, setPostData, currentUser } = useAuth()
    const classes = useStyles()
    return (
        <>
            <div className={classes.fileInput}>
                <h1>Upload your photo:</h1>
                <Button><FileBase type='file' multiple={false} onDone={({ base64 }) => setPostData({ ...postData, file: base64 })} /></Button>
            </div>
            <div>{currentUser.email}</div>
            <TextField fullWidth type="text" label='name' value={postData.name} onChange={(e) => setPostData({ ...postData, name: e.target.value })} />
            <TextField fullWidth type="text" label='lastname' value={postData.surname} onChange={(e) => setPostData({ ...postData, surname: e.target.value })} />
            <TextField fullWidth type="text" label='current job position' value={postData.role} onChange={(e) => setPostData({ ...postData, role: e.target.value })} />
            <TextField fullWidth type="date" id="date" label='Birthday' InputLabelProps={{ shrink: true }} value={postData.dateOfBirth} onChange={(e) => setPostData({ ...postData, dateOfBirth: e.target.value })} />
            <TextField fullWidth type="text" label='country' value={postData.country} onChange={(e) => setPostData({ ...postData, country: e.target.value })} />
            <TextField fullWidth type="text" label='city' value={postData.city} onChange={(e) => setPostData({ ...postData, city: e.target.value })} />
            <TextField fullWidth type="number" label='phone' value={postData.phone} onChange={(e) => setPostData({ ...postData, phone: e.target.value })} />
            <TextField fullWidth type="email" label='email' value={postData.email || ''} onChange={(e) => setPostData({ ...postData, email: e.target.value })} />
            <TextField fullWidth type="text" label='post code' value={postData.zipCode} onChange={(e) => setPostData({ ...postData, zipCode: e.target.value })} />
            {/* <TextField style={{display:'hidden'}} fullWidth type="text" value={postData.currentUser} onChange={(e) => setPostData({ ...postData, currentUser: currentUser })} /> */}
        </>
    )
}

export default Basics
