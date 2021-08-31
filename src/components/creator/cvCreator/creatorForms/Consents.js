import React from 'react'
import { TextField } from '@material-ui/core'

const Consent = ({ postData, setPostData }) => {
    return (
        <>
            <TextField multiline fullWidth type="text" label='Consent' value={postData.consent} onChange={(e) => setPostData({ ...postData, consent: e.target.value })} />
        </>
    )
}

export default Consent