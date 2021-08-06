import React from 'react'
import { TextField, Typography } from '@material-ui/core'

const WorkExperience = ({ postData, setPostData }) => {
    return (
        <>
            <Typography>Work Experience</Typography>
            <TextField fullWidth type="text" label='position'
                value={postData.experience.first.position}
                onChange={(e) => setPostData({ ...postData, experience: { ...postData.experience, first: { ...postData.experience.first, position: e.target.value } } })} />

            <TextField fullWidth type="text" label='company'
                value={postData.experience.first.company}
                onChange={(e) => setPostData({ ...postData, experience: { ...postData.experience, first: { ...postData.experience.first, company: e.target.value } } })} />

            <TextField fullWidth type="text" label='location'
                value={postData.experience.first.location}
                onChange={(e) => setPostData({ ...postData, experience: { ...postData.experience, first: { ...postData.experience.first, location: e.target.value } } })} />

            <TextField fullWidth type="date" label='start' InputLabelProps={{shrink: true}}
                value={postData.experience.first.start}
                onChange={(e) => setPostData({ ...postData, experience: { ...postData.experience, first: { ...postData.experience.first, start: e.target.value } } })} />

            <TextField fullWidth type="date" label='end' InputLabelProps={{shrink: true}}
                value={postData.experience.first.end}
                onChange={(e) => setPostData({ ...postData, experience: { ...postData.experience, first: { ...postData.experience.first, end: e.target.value } } })} />

            <TextField fullWidth type="text" label='descrition'
                value={postData.experience.first.descrition}
                onChange={(e) => setPostData({ ...postData, experience: { ...postData.experience, first: { ...postData.experience.first, descrition: e.target.value } } })} />
        </>
    )
}

export default WorkExperience
