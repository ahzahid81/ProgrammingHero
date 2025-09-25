import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDo from './Todo'
import Actor from './actor'
import Singer from './Singer'

function App() {
  const actors = ['Bappa Raj', 'Omar Sunny', 'Salaman Shah', 'Jasim', 'Anwar'];

  const singers = [
    {id: 1, name: 'Dr Mahfuz', age: 68},
    {id: 2, name: 'Tahsan', age: 45},
    {id: 3, name: 'Shuvro Deb', age: 57},
  ]

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <h1>React Core Concepts</h1>
{/* 
      {
        singers.map(singer => <Singer></Singer> )
      } */}
      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }


      {
        actors.map(actor => <Actor actor = {actor}></Actor>)
      }
      {/* <ToDo task="Learn React" isDone = {true}></ToDo>
      <ToDo task="Revise JS" isDone = {true}></ToDo>
      <ToDo task="Take a shower" isDone = {false}></ToDo> */}
      {/* <Student></Student>
      <Student></Student>
      <Person></Person>
      <Developer name = "Mozumder" tech = "JS"></Developer>
      <Developer name = "Rajon" tech = "python"></Developer>
      <Developer name = "Shabana" ></Developer>
      <Player name="tamim" runs = "5000"></Player>
      <Player name="Mushi" runs = "5000"></Player>
      <Salami event="Roja Eid" amount = "20"></Salami>
      <Salami event="Graduation" amount = "500"></Salami> */}

    </>
  )
}

function Salami({event, amount}){
  return (
    <div className='student'>
      <p>Salami For: {event} </p>
      <p>Amount : {amount} </p>
    </div>
  )
}

// const {name, tech} = {name: 'Mozumder', tech: 'JS'}

function Player({name, runs}){
  return (
    <div className='student'>
      <h3>Name: {name} </h3>
      <p>Runs: {runs}</p>

    </div>
  )
}

const personStyle = {
  color: 'red',
  textAlign : 'right',
}

function Developer(props){
  return (
    <div style={{
      border: '2px solid green',
      borderRadius: '20px'
    }}>
      <h3>Developer: {props.name}</h3>
      <p>Technology: {props.tech}</p>
    </div>
  )
}



function Person () {
  const age = 17;
  const name = 'Jolil'
  return (
    <p style={personStyle}>I am a Person: {name} {age}</p>
  );
}

function Sports(){
  return(
    <div>
      <h3>Cricket</h3>
      <ul>
        <li>Kola</li>
        <li>Komla</li>
      </ul>
      <p>Playing and Losing</p>
    </div>
  )

}


function Student(){
  return(
    <div className='student'>
      <p>Name: </p>
      <p>Department: </p>

    </div>
  )
}

export default App