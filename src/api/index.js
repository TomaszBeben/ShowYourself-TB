import axios from 'axios'

const url = 'http://localhost:5000/posts'

const fetchPosts = () => axios.get(url)
const sendPost = (newPost) => axios.post(url, newPost)

export const getPost = () => async (dispatch) => {
    try {
        const { data } = await fetchPosts()
        dispatch({ type: 'FETCH_ALL', payloads: data })
    } catch (error) {
        console.log(error.message);
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await sendPost(post)

        dispatch({type: 'CREATE', payloads: data})
    } catch (error) {
        console.log(error.message);
    }
}
