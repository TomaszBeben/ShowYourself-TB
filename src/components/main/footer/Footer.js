import React, {useState} from 'react'
import Mailing from './Mailing'

const Footer = () => {
    const [mailBoxVisibility, setMailBoxVisibility] = useState('mail-box-hide')
    const toggle = () => mailBoxVisibility === 'mail-box-hide' ? setMailBoxVisibility('main-page__footer__mailing--container') : setMailBoxVisibility('mail-box-hide');
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
                    <div onClick={()=> toggle()} className='main-page__footer--elem footer-mailing'></div>
                    <Mailing exitButton={()=> toggle()} visibility={mailBoxVisibility}/>
                </div>
            </div>
        </div>
    )
}

export default Footer
