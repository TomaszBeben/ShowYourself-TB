import React, { useRef } from 'react'
import useStyles from '../components/creator/cvCreator/styles'

import ReactToPrint from 'react-to-print';

const Test = () => {
    const classes = useStyles()

    const ref = useRef()

    return (
        <>
            <ReactToPrint
                trigger={() => <button>Print this out!</button>}
                content={() => ref.current}
            />
            <div className='cvPreview-container'>

                <div>
                    <div ref={ref} className={classes.A4Paper}>
                        test
                    </div>
                </div>
            </div>
        </>
    )
}

export default Test
