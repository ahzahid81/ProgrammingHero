

const data = async() => {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    const json = await data.json();
    console.log(json);
    console.log("Hello");
    console.log(true)
}


data();
