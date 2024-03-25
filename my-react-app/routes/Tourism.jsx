import React from 'react'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import '../style/Tourism.css'
import { Link } from 'react-router-dom'

const Tourism = () => {

  function navigateTop() {
    window.scrollTo(0, 0);
  }

  return (
    <div>
        <Header/>
        <Navigation/>
        <h1>Turismo em Portugal</h1>
        <div id='articlesContainer' onClick={navigateTop}>
            <Link to={'/beach'}>
                <div id='article1'>
                  <p className='articlesTitle'>As 05 melhores praias de Portugal</p>
                </div>
            </Link>
            <Link to={'/pastel-de-nata'} onClick={navigateTop}>
              <div id='article2'>
                  <p className='articlesTitle'>Você conhece o pastel de nata?</p>
              </div>
            </Link>
        </div>
    </div>
  )
}

export default Tourism