import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Count from './Count'
import ToogleText from './ToggleText'
import ApiData from './ApiData'
import Zahid from './zahid'

const data = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())


function App() {

  return (
    <>
      <Count></Count>
      <ToogleText></ToogleText>
      <ApiData data={data}></ApiData>
      <Zahid></Zahid>
    </>
  )
}

export default App
