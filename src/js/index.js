import axios from 'axios';
import posts from "../test.handlebars";
import { startApp } from "./startApp";
import { createPost } from 'createPost';

const BASE_URL = 'http://localhost:3000/posts';

const form = document.getElementById('createPostForm')


// Обробник події для створення поста
form.addEventListener('submit', async (event)=>{
    event.preventDefault()
    const title = event.currentTarget.elements.title.value
    const text = event.currentTarget.elements.text.value
    createPost(title,text)
    event.currentTarget.reset()
    const posts = await getPosts();
    renderPosts(posts);
   });


// Обробник події для редагування поста
document.addEventListener('click', cb);


// Обробник події для видалення поста
document.addEventListener('click', cb);


// Обробник події для додавання коментаря
document.addEventListener('submit', cb);




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