import React, {useState} from 'react'
import { TextField, Typography } from '@material-ui/core'

const Education = ({ postData, setPostData }) => {

    return (
        <>
            <Typography>Education</Typography>
            {/* <TextField fullWidth type="text" label='degree'
                value={postData.education.first.degree}
                onChange={(e) => setPostData({ ...postData, education: { ...postData.education, first: { ...postData.education.first, degree: e.target.value } } })} /> */}
            <TextField fullWidth type="text" label='degree'
                value={postData.education.first.degree}
                onChange={(e) => setPostData({ ...postData, education: { ...postData.education, first: { ...postData.education.first, degree: e.target.first } } })} />
            <TextField fullWidth type="text" label='school'
                value={postData.education.first.school}
                onChange={(e) => setPostData({ ...postData, education: { ...postData.education, first: { ...postData.education.first, school: e.target.value } } })} />
            <TextField fullWidth type="text" label='city'
                value={postData.education.first.city}
                onChange={(e) => setPostData({ ...postData, education: { ...postData.education, first: { ...postData.education.first, city: e.target.value } } })} />
            <TextField fullWidth type="date" label='start' InputLabelProps={{ shrink: true }}
                value={postData.education.first.start}
                onChange={(e) => setPostData({ ...postData, education: { ...postData.education, first: { ...postData.education.first, start: e.target.value } } })} />
            <TextField fullWidth type="date" label='end' InputLabelProps={{ shrink: true }}
                value={postData.education.first.end}
                onChange={(e) => setPostData({ ...postData, education: { ...postData.education, first: { ...postData.education.first, end: e.target.value } } })} />
            <TextField fullWidth type="text" label='description'
                value={postData.education.first.description}
                onChange={(e) => setPostData({ ...postData, education: { ...postData.education, first: { ...postData.education.first, description: e.target.value } } })} />
        </>
    )
}

export default Education
