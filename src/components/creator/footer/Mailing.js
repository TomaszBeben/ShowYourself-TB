import React, { useState } from 'react'
import { useAuth } from '../../../context/AuthContext'
import emailjs from 'emailjs-com';
import { mailJsService, mailJsTemplate, mailJsUser } from '../../../ignore/emailAPI.js'

const Mailing = (props) => {
    const notLogIn = 'Want to send me a message? Please Log In :)'
    const { currentUser } = useAuth()
    const [message, setMessage] = useState('')
    const [messageForUser, setMessageForUser] = useState('')

    const sendEmail = (e) => {
        e.preventDefault()
        let err = ''

        if (message.length < 5) {
            err = ('Your message is to short')
        } else if (currentUser.email === -1) {
            err = ('You have to logged in to write me a message !')
        }

        if (err === '') {
            setMessage('')
            setMessageForUser('Thanks for your message, i will respond as soon as possible')
            console.log(err)
            emailjs.sendForm(
                mailJsService,
                mailJsTemplate,
                e.target,
                mailJsUser
            )
                .then((result) => {
                    console.log(result.text)
                }, (error) => {
                    console.log(error.text)
                })
        } else { alert(err) }
    };

    return (
        <div className={props.visibility}>
            <div onClick={props.exitButton} className='main-page__footer__mailing--exit-button'></div>
            {currentUser !== null ?
                <>
                    {/* <div onClick={props.exitButton} className='main-page__footer__mailing--exit-button'></div> */}
                    <form className='main-page__footer__mailing' onSubmit={sendEmail}>
                        <input type='hidden' name='contact_number' />
                        <input type='hidden' value={currentUser.email} name='user_name' />
                        <h2 className='main-page__footer__mailing--current-user'>{currentUser.email}</h2>
                        <textarea className='main-page__footer__mailing--textarea' placeholder={'message'} value={message} name='message' onChange={e => setMessage(e.target.value)} />
                        <input className='main-page__footer__mailing--button' type="submit" value={'SEND'} />
                        <h1 className='main-page__footer__mailing--for-user'>{messageForUser}</h1>
                    </form>
                </>
                : <h2 className='main-page__footer__mailing--for-user'>{notLogIn}</h2>
            }
        </div>
    )
}

export default Mailing
