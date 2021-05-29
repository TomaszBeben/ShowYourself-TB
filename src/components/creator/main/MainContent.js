import React from 'react'
// import image from '../../../images/github.jpg'


const MainContent = () => {
    return (
        <div className='main-page__content--container'>
            <div className='main-page__content--shape main-page__content--shape-first'>
                <a href="/"><div className='main-page__content--image main-page__content--image-github'></div></a>
            </div>
            <div className='main-page__content--shape main-page__content--shape-second'>
                <a href="/"><div className='main-page__content--image main-page__content--image-creator'></div></a>
            </div>
            <div className='main-page__content--shape main-page__content--shape-third'>
                <a href="/"><div className='main-page__content--image main-page__content--image-unidentify'></div></a>
            </div>
        </div>
    )
}

export default MainContent
