import React, { useState } from 'react'
import { TextField, Typography, Button } from '@material-ui/core'
import useStyles from '../styles'
import Buttons from './Buttons'
import { deleteElement, editElement, moveElement } from './functions'

const Links = ({ links, setLinks, postData, setPostData }) => {
    const [singleLink, setSingleLinks] = useState({})
    const classes = useStyles()

    const addSkill = () => {
        setLinks(links => [...links, singleLink])
        setPostData({ ...postData, links: links })
        setSingleLinks({ ...singleLink, link: '', description: '' })
    }

    return (
        <>
            <Typography>links</Typography>
            <TextField fullWidth type="text" label='link'
                value={singleLink.link || ''}
                onChange={(e) => setSingleLinks({ ...singleLink, link: e.target.value })} />
            <TextField multiline fullWidth type="text" label='description'
                value={singleLink.description || ''}
                onChange={(e) => setSingleLinks({ ...singleLink, description: e.target.value })} />
            <div>
                <Button
                    className={`buttonAccept ${classes.buttonSubmit}`}
                    variant="contained" size="large" type='button'
                    onClick={addSkill}>
                    Add
                </Button>
                <div className='creatorView--spaceDiv'></div>
                <div>
                    {links.map((elem, index) => (
                        <div key={index} >
                            <h1>{elem.link}</h1>
                            <h1>{elem.degree}</h1>
                            <Buttons
                                deleteElement={() => { deleteElement(links, setLinks, index) }}
                                editElement={() => { editElement(links, setSingleLinks, index); deleteElement(links, setLinks, index) }}
                                moveUp={() => { moveElement(links, setLinks, index, index - 1) }}
                                moveDown={() => { moveElement(links, setLinks, index, index + 1) }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Links
