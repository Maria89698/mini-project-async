// Створення нового поста
import axios from "axios";

const BASE_URL = 'http://localhost:3000/posts';

async function createPost(title, text) {
    try {
        const newPost = await axios.post(BASE_URL, {
            title,
            text
        })
        return newPost
    } catch (error) {
        console.error(error);
    }
}
