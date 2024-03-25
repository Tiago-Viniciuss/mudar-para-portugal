import { useState } from 'react'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import Main from '../components/Main'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style/Home.css'

function Home() {
  return (
      <div>
        <Header/>
        <Navigation/>
        <Main/>
      </div> 
  )
}

export default Home
