import React from 'react'

import A4Size from './creatorViews/A4Size'
import ViewHeader from './creatorViews/ViewHeader'
import { useAuth } from '../../../context/AuthContext'

import creatorViewStyles from './styles/creatorViewStyles'


const CreatorView = ({ postData }) => {
    const { color, setColor, sheetStyle, setSheetStyle } = useAuth()

    const classes = creatorViewStyles()

    return (
            <div className={classes.viewContainer}>
                <ViewHeader sheetStyle={sheetStyle} setSheetStyle={setSheetStyle} color={color} setColor={setColor} />
                <A4Size postData={postData} color={color} sheetStyle={setSheetStyle} />
            </div >
    )
}

export default CreatorView
