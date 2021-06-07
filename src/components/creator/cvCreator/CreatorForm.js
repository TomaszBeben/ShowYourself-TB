import React,{ useState } from 'react'
import FileBase from 'react-file-base64'
import { useDispatch } from 'react-redux'
import { createPost } from '../../../api/index'

const CreatorForm = () => {
    const style = {
        height: '100vh',
        width: '45vw',
        border: '1px solid black',
        fontSize: '1rem',
    }
    const formStyle = {
        display: 'flex',
        flexDirection: 'column'
    }

    const [postData, setPostData] =useState({
        name: '', surname: '', file: ''
    })

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createPost(postData))
        setPostData({name: '', surname: '', file: ''})
    }

    return (
        <div style={style}>
            <form style={formStyle} onSubmit={handleSubmit}>
                <input type="text" placeholder='name' value={postData.name} onChange={(e)=>setPostData({...postData, name: e.target.value})}/>
                <input type="text" placeholder='surname' value={postData.surname} onChange={(e)=>setPostData({...postData, surname: e.target.value})}/>
                <FileBase type='file' multiple={false} onDone={({base64}) => setPostData({...postData, file: base64})} />
                <input type="submit" />
            </form>
        </div>
    )
}

export default CreatorForm
