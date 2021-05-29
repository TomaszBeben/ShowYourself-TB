import React from 'react'
import { Link } from 'react-router-dom'


const MainContent = () => {
    return (
        <div className='main-page__content--container'>
            <div className='main-page__content--shape main-page__content--shape-first'>
                <a href="https://github.com/TomaszBeben/ShowYourself-TB">
                    <div className='main-page__content--image main-page__content--image-github'>
                    </div>
                </a>
            </div>
            <div className='main-page__content--shape main-page__content--shape-second'>
                <Link to="/cvcreator">
                    <div className='main-page__content--image main-page__content--image-creator'>
                    </div>
                </Link>
            </div>
            <div className='main-page__content--shape main-page__content--shape-third'>
                <a href="/">
                    <div className='main-page__content--image main-page__content--image-unidentify'>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default MainContent
