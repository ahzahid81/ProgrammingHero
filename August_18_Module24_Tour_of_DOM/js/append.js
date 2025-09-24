const mainContainer = document.getElementById('main-container');
console.log(mainContainer);

const placeSection = document.createElement('section');

const h1 = document.createElement('h1');
h1.innerText = 'Places I want to visit';

placeSection.appendChild(h1);

const ul = document.createElement('ul');

const li1 = document.createElement('li');
li1.innerText = 'bandorbon';

ul.appendChild(li1);
placeSection.appendChild(ul);


mainContainer.appendChild(placeSection);


const bookSection = document.createElement('section');

bookSection.innerHTML = `
<h1> Books I need to read </h1>
<ul>
    <li> Physics </li>
    <li> Chemistry </li>
    <li> Math </li>
    <li> Biology </li>
</ul>
`

mainContainer.appendChild(bookSection);