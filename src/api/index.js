import axios from 'axios'
import { url } from '../ignore/urlAPI'
import { FETCH_ALL, CREATE, UPDATE, DELETE, RESET} from '../constants/actionTypes'

//API's

const currentUser = localStorage.getItem('currentUser')
// console.log(currentUser);
// const fetchPosts = () => axios.get(url)
// const sendPost = (newPost) => axios.post(url, newPost)
const fetchPosts = () => axios.get(`${url}/${currentUser}`)
const sendPost = (newPost) => axios.post(`${url}/${currentUser}`, newPost)
const updatedPost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost)
const deletedPost = (id) => axios.delete(`${url}/${id}`)



//Actions
export const resetView = () => async (dispatch) =>{
    try {
        const { data } = await fetchPosts()
        dispatch({type: RESET, payloads: data})
    } catch (error) {
        console.log(error.message);
    }
}

export const getPost = () => async (dispatch) => {
    try {
        const { data } = await fetchPosts()
        dispatch({ type: FETCH_ALL, payloads: data })
    } catch (error) {
        console.log(error.message);
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await sendPost(post)

        dispatch({ type: CREATE, payloads: data })
    } catch (error) {
        console.log(error.message)
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await updatedPost(id, post)
        dispatch({ type: UPDATE, payloads: data })
    } catch (error) {
        console.log(error.message);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await deletedPost(id)
        dispatch({ type: DELETE, payloads: id })
    } catch (error) {
        console.log(error.message)
    }

}

