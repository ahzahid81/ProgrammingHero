import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React Core Concepts</h1>
      <Student></Student>
      <Student></Student>
      <Person></Person>
      <Developer name = "Mozumder" tech = "JS"></Developer>
      <Developer name = "Rajon" tech = "python"></Developer>
      <Developer name = "Shabana" ></Developer>
      <Player name="tamim" runs = "5000"></Player>
      <Player name="Mushi" runs = "5000"></Player>
      <Salami event="Roja Eid" amount = "20"></Salami>
      <Salami event="Graduation" amount = "500"></Salami>

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