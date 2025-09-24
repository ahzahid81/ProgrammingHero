const loadPost = () => {
    const url = "https://jsonplaceholder.typicode.com/posts"
    fetch(url)
    .then(res => res.json())
    .then(data => {
        displayPosts(data);
    })
}

const displayPosts = (posts) =>{
    // 1. get the container
    const postContainer = document.getElementById("post-container");
    postContainer.innerHTML = "";
  
    posts.forEach(element => {
        const postCard = document.createElement("div");
        postCard.innerHTML=`<div class="post-card">
            <h2>${element.title}</h2>
            <p>${element.body}</p>

        </div>`;
    
        postContainer.append(postCard);
    });
}

loadPost();