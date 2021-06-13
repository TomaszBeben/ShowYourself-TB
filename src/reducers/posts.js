/* eslint-disable import/no-anonymous-default-export */
export default (posts = [], action) =>{
    switch(action.type) {
        case 'FETCH_ALL':
            return action.payloads
        case 'CREATE':
            return [...posts, action.payloads]
        default:
            return posts
    }
}