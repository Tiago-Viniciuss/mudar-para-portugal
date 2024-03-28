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
        <h1 id='h1'>Turismo em Portugal</h1>
        <p>
          O turismo em Portugal pode ser explorado por diversos ângulos e diferentes regiões. Podendo oferecer história das cidades, dos monumentos, castelos, igrejas, passando pelos mais variados cenários de praias e rios, até mesmo a montanhas com neve. Tudo isso regado a um bom vinho e boa comida tradicional, que é rica em tempero e história. Nesta seção, confira um pouco do que pode ser visto em terras lusitanas.
        </p>
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