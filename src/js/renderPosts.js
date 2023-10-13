// Оновлення відображення постів на сторінці
export function renderPosts(posts) {
    postBoxEl.innerHTML = postTpl(posts);
}
