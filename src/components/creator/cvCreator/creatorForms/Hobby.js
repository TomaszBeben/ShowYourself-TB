import React, { useState } from 'react'
import Buttons from './Buttons'
import { Button, TextField } from '@material-ui/core'
import { deleteElement, editElement, moveElement } from './functions'
import useStyles from '../styles'

const Hobby = ({ hobbys, setHobbys, postData, setPostData }) => {
    const [singleHobby, setSingleHobby] = useState({})
    const classes = useStyles()

    const addSkill = () => {
        setHobbys(hobbys => [...hobbys, singleHobby])
        setPostData({ ...postData, hobbys: hobbys })
        setSingleHobby({ ...singleHobby, hobby: '' })
    }

    return (
        <>
            <div className='hobbys'>
                <TextField type="text" label='hobby'
                    value={singleHobby.hobby || ''}
                    onChange={(e) => setSingleHobby({ ...singleHobby, hobby: e.target.value })} />
                <Button
                    className={`buttonAccept ${classes.buttonSubmit}`}
                    variant="contained" size="large" type='button'
                    onClick={addSkill}>
                    Add
                </Button>
                <div>
                    {hobbys.map((elem, index) => (
                        <div key={index} >
                            <h1>{elem.hobby}</h1>
                            <Buttons
                                deleteElement={() => { deleteElement(hobbys, setHobbys, index) }}
                                editElement={() => { editElement(hobbys, setSingleHobby, index); deleteElement(hobbys, setHobbys, index) }}
                                moveUp={() => { moveElement(hobbys, setHobbys, index, index - 1) }}
                                moveDown={() => { moveElement(hobbys, setHobbys, index, index + 1) }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Hobby