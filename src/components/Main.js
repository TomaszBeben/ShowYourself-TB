import React from 'react'
import Footer from './creator/footer/Footer'

import Header from './creator/header/Header'
import MainContent from './creator/main/MainContent'

const Main = () => {
    return (
        <div className='main-page'>
            <Header/>
            <MainContent/>
            <Footer/>
            
        </div>
    )
}

export default Main
