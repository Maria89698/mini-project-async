import { getPosts } from "./getPosts";
import posts from "./test.handlebars";
const BASE_URL = 'http://localhost:3000/posts';

// Оновлення відображення постів на сторінці
function renderPosts(posts) {

};

// Обробник події для створення поста
document.getElementById('createPostForm').addEventListener('submit', cb);


// Обробник події для редагування поста
document.addEventListener('click', cb);


// Обробник події для видалення поста
document.addEventListener('click', cb);


// Обробник події для додавання коментаря
document.addEventListener('submit', cb);


// Запуск додатку
async function startApp() {
    const posts = await getPosts();
    renderPosts(posts);
}
startApp();

posts: [
    {
        id: 1,
        title: '',
        description: ''
    },
    {
        id: 1,
        title: '',
        description: ''
    },
    {
        id: 1,
        title: '',
        description: ''
    }
]