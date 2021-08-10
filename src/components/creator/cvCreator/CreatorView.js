import React, { useState } from 'react'

import A4Size from './creatorViews/A4Size'
import ViewHeader from './creatorViews/ViewHeader'

import useStyles from './styles'


const CreatorView = ({ postData }) => {
    const [sheetStyle, setSheetStyle] = useState('default')
    const [color, setColor] = useState('default')

    const classes = useStyles()

    return (
        <div className={classes.viewContainer}>
            <ViewHeader sheetStyle={sheetStyle} setSheetStyle={setSheetStyle} color={color} setColor={setColor}/>
            <A4Size postData={postData} />
        </div >
    )
}

export default CreatorView
