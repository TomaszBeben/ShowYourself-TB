export const initialState = (currentUser) => {

    return {
        // currentUser: !currentUser ? null : currentUser.email,
        // currentUser: currentUser ? currentUser.email : null,
        opt3:[],
        currentUser: 'currentUser.email',
        name: '',
        surname: '',
        role: '',
        description: '',
        dateOfBirth: '',
        file: '',
        country: '',
        city: '',
        phone: '',
        email: '',
        zipCode: '',
        education: [],
        work: [],
        skills: [],
        languages: [],
        courses: [],
        hobbys: [],
        links: [],
        consent: [],
        opt1:[],
        opt2:[],
    }
}

export const paths = [
    {
        path: '/cvcreator/basics',
        label: 'Basics',
    },
    {
        path: '/cvcreator/description',
        label: 'Description',
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