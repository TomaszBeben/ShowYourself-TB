import axios from 'axios'

const url = 'http://localhost:5000/posts'

const fetchPosts = () => axios.get(url)
const sendPost = (newPost) => axios.post(url, newPost)

export const getPost = () => async () => {
    try {
        const { data } = await fetchPosts()
    } catch (error) {
        
    }
}
