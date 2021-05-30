import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className='main-page__footer--container'>
                <div className='main-page__footer__container--left'>
                        <a href='https://tbebenportfolio.web.app/#/'>
                            <div className='main-page__footer--elem footer-portfolio'></div>
                        </a>
                        <a href='https://github.com/TomaszBeben'>
                            <div className='main-page__footer--elem footer-github'></div>
                        </a>
                        <a href='https://www.linkedin.com/in/tomasz-b%C4%99ben-1944021a2/'>
                            <div className='main-page__footer--elem footer-linkedin'></div>
                        </a>
                </div>
                <div className='main-page__footer__container--right'>
                    <div className='main-page__footer--elem'></div>
                </div>
            </div>
        </div>
    )
}

export default Footer
