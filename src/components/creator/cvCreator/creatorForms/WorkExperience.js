import React, { useState } from 'react'
import { TextField, Typography, Button } from '@material-ui/core'
import useStyles from '../styles'
import Buttons from './Buttons'
import { deleteElement, editElement, moveElement } from './functions'

import InputAdornment from '@mui/material/InputAdornment';
import AddIcon from '@mui/icons-material/Add';

const WorkExperience = ({ work, setWork, postData, setPostData }) => {
    const [singleWork, setSingleWork] = useState({})
    const [arrayDescriptions, setArrayDescriptions] = useState([])
    const [descriptionElem, setDescriptionElem] = useState([])
    const classes = useStyles()

    const addElement = () => {
        setWork(work => [...work, singleWork])
        setPostData({ ...postData, work: work })
        setSingleWork({ ...singleWork, position: '', company: '', location: '', start: '', end: '', description: '' })
        setArrayDescriptions([])
    }

    const addDescription = () => {
        arrayDescriptions.push(descriptionElem)
        setSingleWork({ ...singleWork, description: arrayDescriptions })
        setDescriptionElem('')

    }

    return (
        <>
            <Typography>Work Experience</Typography>
            <TextField fullWidth type="text" label='position'
                value={singleWork.position || ''}
                onChange={(e) => setSingleWork({ ...singleWork, position: e.target.value })} />
            <TextField fullWidth type="text" label='company'
                value={singleWork.company || ''}
                onChange={(e) => setSingleWork({ ...singleWork, company: e.target.value })} />
            <TextField fullWidth type="text" label='location'
                value={singleWork.location || ''}
                onChange={(e) => setSingleWork({ ...singleWork, location: e.target.value })} />
            <TextField fullWidth type="date" label='start' InputLabelProps={{ shrink: true }}
                value={singleWork.start || ''}
                onChange={(e) => setSingleWork({ ...singleWork, start: e.target.value })} />
            <TextField fullWidth type="date" label='end' InputLabelProps={{ shrink: true }}
                value={singleWork.end || ''}
                onChange={(e) => setSingleWork({ ...singleWork, end: e.target.value })} />
            {/* <TextField multiline fullWidth type="text" label='description'
                value={singleWork.description || ''}
                onChange={(e) => setSingleWork({ ...singleWork, description: e.target.value })} /> */}

            {arrayDescriptions.map((description, i) => (
                <Button key={i} onClick={() => { deleteElement(arrayDescriptions, setArrayDescriptions, i) }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div >{` \u2022 ${description}`}</div>
                    </div>
                </Button>

            ))}

            <span style={{ display: 'inline-block', width: '100%' }} >
                <TextField multiline fullWidth type="text" label='description'
                    value={descriptionElem || ''}
                    onChange={(e) => setDescriptionElem(e.target.value)}
                    InputProps={{
                        endAdornment:
                            <InputAdornment position="end">
                                <AddIcon
                                    onClick={() => { addDescription() }}
                                    style={{ color: 'black', cursor: 'pointer' }} />
                            </InputAdornment>
                    }}
                />
            </span>

            <div>
                <div className='creatorView--spaceDiv'></div>
                <Button
                    className={`buttonAccept ${classes.buttonSubmit}`}
                    variant="contained" size="large" type='button'
                    onClick={addElement}>
                    Add your work experience
                </Button>
                <div className='creatorView--spaceDiv'></div>
                <div>
                    {work.map((elem, index) => (
                        <div key={index} >
                            <h1>{elem.position}</h1>
                            <h1>{elem.company}</h1>
                            <h1>{elem.location}</h1>
                            <h1>{elem.start}</h1>
                            <h1>{elem.end}</h1>
                            <h1>{elem.description.join(', ')}</h1>
                            {console.log(elem)}
                            <Buttons
                                deleteElement={() => { deleteElement(work, setWork, index) }}
                                editElement={() => {
                                    setArrayDescriptions(work[index].description)
                                    editElement(work, setSingleWork, index)
                                    deleteElement(work, setWork, index)
                                }}
                                moveUp={() => { moveElement(work, setWork, index, index - 1) }}
                                moveDown={() => { moveElement(work, setWork, index, index + 1) }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default WorkExperience
