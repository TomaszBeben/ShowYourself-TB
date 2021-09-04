export const initialState = (currentUser) => {
    return {
        currentUser: currentUser ? currentUser.email : null ,
        name: '',
        surname: '',
        dateOfBirth: '',
        file: '',
        country: '',
        city: '',
        phone: '',
        email: currentUser ? currentUser.email : null,
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

export const paths = [
    {
        path: '/cvcreator/basics',
        label: 'Basics',
    },
    {
        path: '/cvcreator/edu',
        label: 'Education',
    },
    {
        path: '/cvcreator/work',
        label: 'Work',
    },
    {
        path: '/cvcreator/skills',
        label: 'Skills',
    },
    {
        path: '/cvcreator/languages',
        label: 'Languages',
    },
    {
        path: '/cvcreator/courses',
        label: 'Courses',
    },
    {
        path: '/cvcreator/hobby',
        label: 'Hobby',
    },
    {
        path: '/cvcreator/links',
        label: 'Links',
    },
    {
        path: '/cvcreator/consent',
        label: 'Consent',
    },
]