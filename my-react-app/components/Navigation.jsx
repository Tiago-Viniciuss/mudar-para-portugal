import React from 'react'
import '../style/Header.css'
import { Link } from 'react-router-dom'

const Navigation = () => {

  function navigateTop() {
    const nav = document.getElementById('nav')
    window.scrollTo(0, 0);

    nav.classList.toggle('active')
  }

  function closeNav() {
    const nav = document.getElementById('nav')

    nav.classList.toggle('active')
  }

  return (
    <nav id='nav'>
        <ul>
            <Link to={'/'} onClick={navigateTop}>
              <li>Home</li>
            </Link>
            <Link to={'/portugal-history'} onClick={navigateTop}>
              <li>História de Portugal</li>
            </Link>
            <Link to={'/tourism'} onClick={navigateTop}>
              <li>Turismo</li>
            </Link>
            <Link to={'/curiosity'} onClick={navigateTop}>
              <li>Curiosidades</li>
            </Link>
            <a href="#footer" onClick={closeNav}>
              <li>Contato</li>
            </a>
        </ul>
    </nav>
  )
}

export default Navigation