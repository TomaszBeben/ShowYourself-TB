import React from 'react'
import { TextField } from '@material-ui/core'

const Description = ({ postData, setPostData }) => {
    return (
        <>
            <TextField  multiline fullWidth type="text" label='Description' value={postData.description} onChange={(e) => setPostData({ ...postData, description: e.target.value })} />
        </>
    )
}

export default Description