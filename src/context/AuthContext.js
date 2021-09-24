import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../firebase'
import { initialState } from '../components/creator/cvCreator/variables'

const AuthContext = React.createContext()

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState('')
    const [loading, setLoading] = useState(true)
    const [sheetStyle, setSheetStyle] = useState('style 1')
    const [color, setColor] = useState('#000C66')
    const [postData, setPostData] = useState(initialState(currentUser))
    const [skills, setSkills] = useState([])
    const [education, setEducation] = useState([])
    const [work, setWork] = useState([])
    const [languages, setLanguages] = useState([])
    const [courses, setCourses] = useState([])
    const [hobbys, setHobbys] = useState([])
    const [links, setLinks] = useState([])
    const [consent, setConsent] = useState([])
    const [description, setDescription] = useState([])

    const signup = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    const login = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password)
    }

    const logout = () => {
        return auth.signOut()
    }

    const resetPassword = (email) => {
        return auth.sendPasswordResetEmail(email)
    }

    const updateEmail = (email) => {
        return currentUser.updateEmail(email)
    }

    const updatePassword = (password) => {
        return currentUser.updatePassword(password)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe
    }, [])

    useEffect(() => {
        if (currentUser === null || undefined || '') {
            localStorage.setItem('currentUser', '')
        } else {
            localStorage.setItem('currentUser', currentUser.email)
            setPostData({ ...postData, currentUser: currentUser })
        }
    }, [])

    // if (currentUser !== null || undefined || '') {
    //     console.log(currentUser.email);
    // } else { console.log('currentUser.email- nie istnieje'); }

    const value = {
        skills, setSkills,
        education, setEducation,
        work, setWork,
        languages, setLanguages,
        courses, setCourses,
        hobbys, setHobbys,
        links, setLinks,
        consent, setConsent,
        postData, setPostData,
        sheetStyle, setSheetStyle,
        color, setColor,
        /////////////
        currentUser,
        login,
        signup,
        logout,
        resetPassword,
        updateEmail,
        updatePassword
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
