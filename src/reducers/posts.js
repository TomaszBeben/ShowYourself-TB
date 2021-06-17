/* eslint-disable import/no-anonymous-default-export */
export default (posts = [], action) =>{
    switch(action.type) {
        case 'UPDATE':
            return posts.map((post) => post._id === action.payloads._id ? action.payloads : post)
        case 'FETCH_ALL':
            return action.payloads
        case 'CREATE':
            return [...posts, action.payloads]
        default:
            return posts
    }
}