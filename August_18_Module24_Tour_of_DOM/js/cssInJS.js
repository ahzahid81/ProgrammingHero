// const sections = document.getElementsByTagName('section');
const sections = document.querySelectorAll('section');
// console.log(sections);

// for(const section of sections){
//     console.log(section);
//     section.style.backgroundColor = 'lightblue'
// }


for(const section of sections){
    section.classList.add('section-card')
}