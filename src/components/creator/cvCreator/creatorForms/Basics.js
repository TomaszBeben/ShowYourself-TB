import React from 'react'
import { TextField } from '@material-ui/core'

const Basics = ({ postData, setPostData }) => {
    return (
        <>
            <TextField fullWidth type="text" label='name' value={postData.name} onChange={(e) => setPostData({ ...postData, name: e.target.value })} />
            <TextField fullWidth type="text" label='surname' value={postData.surname} onChange={(e) => setPostData({ ...postData, surname: e.target.value })} />
            <TextField fullWidth type="date" id="date" label='Birthday' InputLabelProps={{shrink: true}} value={postData.dateOfBirth} onChange={(e) => setPostData({ ...postData, dateOfBirth: e.target.value })} />
            <TextField fullWidth type="text" label='country' value={postData.country} onChange={(e) => setPostData({ ...postData, country: e.target.value })} />
            <TextField fullWidth type="text" label='city' value={postData.city} onChange={(e) => setPostData({ ...postData, city: e.target.value })} />
            <TextField fullWidth type="number" label='phone' value={postData.phone} onChange={(e) => setPostData({ ...postData, phone: e.target.value })} />
            <TextField fullWidth type="email" label='email' value={postData.email} onChange={(e) => setPostData({ ...postData, email: e.target.value })} />
            <TextField fullWidth type="text" label='post code' value={postData.zipCode} onChange={(e) => setPostData({ ...postData, zipCode: e.target.value })} />
        </>
    )
}

export default Basics
