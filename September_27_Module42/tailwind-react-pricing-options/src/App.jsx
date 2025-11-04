import { Suspense } from 'react'
import './App.css'
import Calender from './Calender'
import DaisyNav from './components/DaisyNav'
import NavBar from './NavBar/NavBar'
import PricingOptions from './components/PricingOption/PricingOptions'
import ResultChart from './components/ResultChart/ResultChart'
import axios from 'axios'
import ResultBar from './components/ResultChart/ResultBar'

const pricingPromise = fetch('pricingData.json').then(res => res.json());
const studentPromise = axios.get('studentData.json')

function App() {


  return (
    <>
      <NavBar></NavBar>
      {/* <DaisyNav></DaisyNav> */}

      <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>
        <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
      </Suspense>
      <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>
      <ResultBar studentPromise = {studentPromise}></ResultBar>
      </Suspense>
      <ResultChart></ResultChart>
    </>
  )
}

export default App
