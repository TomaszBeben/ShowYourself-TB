import React, { useRef } from 'react'

import { Button, Paper } from '@material-ui/core'
import useStyles from '../components/creator/cvCreator/styles'

import ReactToPrint from 'react-to-print';
// import { ComponentToPrint } from './ComponentToPrint';

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
                    <Paper ref={ref} className={`scaling ${classes.A4Paper}`}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, adipisci nulla impedit eum dolorem velit recusandae nesciunt autem nobis possimus ex libero enim illum. Dolor aliquam odio provident exercitationem rerum!
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime quis magni nemo sit culpa provident iusto placeat eum, debitis expedita dolore beatae sed eaque numquam dolorum consectetur. Facere, sequi a!
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime quis magni nemo sit culpa provident iusto placeat eum, debitis expedita dolore beatae sed eaque numquam dolorum consectetur. Facere, sequi a!
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime quis magni nemo sit culpa provident iusto placeat eum, debitis expedita dolore beatae sed eaque numquam dolorum consectetur. Facere, sequi a!
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime quis magni nemo sit culpa provident iusto placeat eum, debitis expedita dolore beatae sed eaque numquam dolorum consectetur. Facere, sequi a!
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime quis magni nemo sit culpa provident iusto placeat eum, debitis expedita dolore beatae sed eaque numquam dolorum consectetur. Facere, sequi a!
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime quis magni nemo sit culpa provident iusto placeat eum, debitis expedita dolore beatae sed eaque numquam dolorum consectetur. Facere, sequi a!
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime quis magni nemo sit culpa provident iusto placeat eum, debitis expedita dolore beatae sed eaque numquam dolorum consectetur. Facere, sequi a!
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime quis magni nemo sit culpa provident iusto placeat eum, debitis expedita dolore beatae sed eaque numquam dolorum consectetur. Facere, sequi a!
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime quis magni nemo sit culpa provident iusto placeat eum, debitis expedita dolore beatae sed eaque numquam dolorum consectetur. Facere, sequi a!
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime quis magni nemo sit culpa provident iusto placeat eum, debitis expedita dolore beatae sed eaque numquam dolorum consectetur. Facere, sequi a!
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime quis magni nemo sit culpa provident iusto placeat eum, debitis expedita dolore beatae sed eaque numquam dolorum consectetur. Facere, sequi a!
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime quis magni nemo sit culpa provident iusto placeat eum, debitis expedita dolore beatae sed eaque numquam dolorum consectetur. Facere, sequi a!
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime quis magni nemo sit culpa provident iusto placeat eum, debitis expedita dolore beatae sed eaque numquam dolorum consectetur. Facere, sequi a!
                    </Paper>
                </div>
            </div>
        </>
    )
}

export default Test
