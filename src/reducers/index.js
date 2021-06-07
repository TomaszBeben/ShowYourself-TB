import { combineReducers } from 'redux'

const posts = (posts = [], action) =>{
    switch(action.type) {
        case 'FETCH_ALL':
            return action.payloads
        case 'CREATE':
            return [...posts, action.payloads]
        default:
            return posts
    }

}

export default combineReducers({ posts })