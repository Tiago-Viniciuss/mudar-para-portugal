import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer.jsx'

function App() {
  return (
      <div> 
        <Outlet/>
        <Footer/>
      </div> 
  )
}

export default App
