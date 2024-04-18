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
    const list = document.getElementById('list')

    nav.classList.toggle('active')
    list.classList.toggle('active')

  }

  return (
    <nav id='nav'>
        <ul id='list'>
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
            <Link to={'/database-result'} onClick={navigateTop}>
              <li>Meus Resultados</li>
            </Link>
            <a href="#footer" onClick={closeNav}>
              <li>Contato</li>
            </a>
            <Link to={'/creator-page'} onClick={navigateTop}>
              <li>Modo Admin</li>
            </Link>
        </ul>
    </nav>
  )
}

export default Navigation