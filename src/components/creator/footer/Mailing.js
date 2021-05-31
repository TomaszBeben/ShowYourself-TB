import React, { useState, useEffect } from 'react'
import { useAuth } from '../../../context/AuthContext'
import emailjs from 'emailjs-com';
import { emailAPI } from '../../../ignore/emailAPI.js'

const Mailing = (props) => {
    const notLogIn = 'Want to send me a message? Please Log In :)'
    const { currentUser } = useAuth()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [messageForUser, setMessageForUser] = useState('')

    const sendEmail = (e) => {
        e.preventDefault()
        let err = ''

        // if (name.length < 3 || email.length < 3 || email.indexOf('@') === -1 || email.indexOf('.') === -1) {
        //     err = ('ERROR')
        //   }

        if (err === '') {
            setEmail('')
            setMessage('')
            // setMessageForUser('Thanks for your message, i will respond as soon as possible')
            console.log(err)
            emailjs.sendForm(
                emailAPI(e)// this is data from emailJS service
            )
                .then((result) => {
                    console.log(result.text)
                }, (error) => {
                    console.log(error.text)
                })
        } else { alert(err) }
    };

    // const [user, setUser] = useState(notLogIn)

    // useEffect(() => {
    //     if (currentUser !== null) {
    //         setUser(currentUser.email)
    //     } else {
    //         setUser(notLogIn)
    //     }
    // }, [currentUser])

    return (
        <div className={props.visibility}>
            not working for now
            {/* {currentUser !== null ?
                <div>
                    <div className=''>
                        <form className="" onSubmit={sendEmail}>
                            <input type="hidden" name="contact_number" />
                            <input className='' type='hidden' value={currentUser.email} name="user_name"/>
                            <h2>{currentUser.email}</h2>
                            <textarea className='' placeholder={'message'} value={message} name="message" onChange={e => setMessage(e.target.value)} />
                            <input className='main-page__header--user--auth-button' type="submit" value={'SEND'} />
                            <h1 className=''>{messageForUser}</h1>
                        </form>
                    </div>

                </div>
                : notLogIn
            } */}
        </div>
    )
}

export default Mailing
