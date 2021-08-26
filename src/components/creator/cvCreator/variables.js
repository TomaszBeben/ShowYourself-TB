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
        education: [],
        work: [],
        skills: [],
        languages: [],
        courses: [],
        hobby: [],
        links: [],
        consent: [],
        style:[]
    }
}