// Отримання списку постів
import axios from "axios";

async function getPosts() {
    try {
      const posts = await axios.get(BASE_URL)
      return await posts.json()
    } catch (error) {
        console.error(error)
    }
}
console.log(getPosts())