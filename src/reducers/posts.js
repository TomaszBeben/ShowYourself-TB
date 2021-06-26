/* eslint-disable import/no-anonymous-default-export */
import { FETCH_ALL, CREATE, UPDATE, DELETE} from '../constants/actionTypes'

export default (posts = [], action) =>{
    switch(action.type) {
        case FETCH_ALL:
            return action.payloads
        case CREATE:
            return [...posts, action.payloads]
        case UPDATE:
            return posts.map((post) => post._id === action.payloads._id ? action.payloads : post)
            case DELETE:
                return posts.filter((post) => post._id !== action.payloads)
        default:
            return posts
    }
}