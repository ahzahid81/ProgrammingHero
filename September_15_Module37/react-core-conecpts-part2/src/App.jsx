import { Suspense } from 'react';
import './App.css'
import Batsman from './Batsman';
import Counter from './Counter';
import Users from './Users';
import Friends from './Friends';
import Players from './Players';

const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())

const fetchFriends = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
}


function App() {

  const friendsPromise = fetchFriends();

  function handleClick(){
    alert('I am clicked.')
  }

  const handleClick3 = () => alert("Clicked 3");

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  }

  return (
    <>
      <h3>Vite + React</h3>
      <Players></Players>
      <Suspense fallback={<h3>Loading Data</h3>}>
        <Users fetchUsers = {fetchUsers}></Users>
      </Suspense>

      <Suspense fallback={<h3>Friends are coming for treat ....</h3>}>
      <Friends friendsPromise = {friendsPromise}></Friends>

      </Suspense>
      
      <Batsman></Batsman>
      <Counter></Counter>
      {/* <button onClick="handleClick()">Click Me</button> */}
      <button onClick={handleClick}>Click Me</button>
      <button onClick={function handleClick2(){
        alert('Clicked 2')
      }}>Click Me 2</button>

      <button onClick={handleClick3}>Click Me 3</button>

      <button onClick={() => handleAdd5(10)}>Click Add 5</button>
    </>
  )
}

export default App
