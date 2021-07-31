export const initialState = (currentUser) => {
    return {
        currentUser: currentUser.email,
        name: '',
        surname: '',
        dateOfBirth: '',
        file: '',
        country: '',
        city: '',
        phone: '',
        email: currentUser.email,
        zipCode: '',
        education: {
            first: {
                degree: '',
                school: '',
                city: '',
                start: '',
                end: '',
                description: ''
            },
            second: {
                degree: '',
                school: '',
                city: '',
                start: '',
                end: '',
                description: ''
            },
            third: {
                degree: '',
                school: '',
                city: '',
                start: '',
                end: '',
                description: ''
            }
        },
        skills: []
    }
}