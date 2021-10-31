import React, { useState } from 'react'
import { TextField, Typography, Button, Paper } from '@material-ui/core'
import useStyles from '../styles'
import Buttons from './Buttons'
import { deleteElement, editElement, moveElement } from './functions'

const Languages = ({ languages, setLanguages, postData, setPostData }) => {
    const [singleLanguage, setSingleLanguage] = useState({})
    const classes = useStyles()

    const addSkill = () => {
        setLanguages(languages => [...languages, singleLanguage])
        setPostData({ ...postData, languages: languages })
        setSingleLanguage({ ...singleLanguage, language: '', degree: '' })
    }

    return (
        <>
            <Typography>Languages</Typography>
            <TextField fullWidth type="text" label='language'
                value={singleLanguage.language || ''}
                onChange={(e) => setSingleLanguage({ ...singleLanguage, language: e.target.value })} />
            <TextField fullWidth type="text" label='degree'
                value={singleLanguage.degree || ''}
                onChange={(e) => setSingleLanguage({ ...singleLanguage, degree: e.target.value })} />
            <div>
                <Button
                    className={`buttonAccept ${classes.buttonSubmit}`}
                    variant="contained" size="large" type='button'
                    onClick={addSkill}>
                    Add
                </Button>
                <div className='creatorView--spaceDiv'></div>
                <div>
                    {languages.map((elem, index) => (
                        <Paper className={classes.mapElem} elevation={24} key={index} >
                            <h1>{elem.language}</h1>
                            <h1>{elem.degree}</h1>
                            <Buttons
                                deleteElement={() => { deleteElement(languages, setLanguages, index) }}
                                editElement={() => { editElement(languages, setSingleLanguage, index); deleteElement(languages, setLanguages, index) }}
                                moveUp={() => { moveElement(languages, setLanguages, index, index - 1) }}
                                moveDown={() => { moveElement(languages, setLanguages, index, index + 1) }}
                            />
                        </Paper>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Languages
