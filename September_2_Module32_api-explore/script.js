const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
}

// const loadButton = () => {
//     const url = 'https://jsonplaceholder.typicode.com/posts';
//     fetch(url)
//     .then(res => res.json())
//     .then(json => displayPost(json))
// }

// const displayPost = (posts) => {
//     posts.forEach(element => {
//         console.log(element);
//     });
// }