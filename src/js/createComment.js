// Додавання коментаря до поста
const BASE_URL = 'http://localhost:3000/posts';

async function createComment(id, comment) {
    try {
        await axios.delete(`${BASE_URL}/${id}`)
    } catch (error) {
        console.error(error);
    }
}
