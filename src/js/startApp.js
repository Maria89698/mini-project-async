import { getPosts } from "./getPosts";
import { renderPosts } from "./renderPosts";

// Запуск додатку
export async function startApp() {
    const posts = await getPosts();
    renderPosts(posts);
}
startApp();