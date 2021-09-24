import React from 'react'
import Footer from './footer/Footer'

import Header from './header/Header'
import MainContent from './main/MainContent'

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
