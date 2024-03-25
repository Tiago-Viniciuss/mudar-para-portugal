import React from 'react'
import '../style/Header.css'
import { Link } from 'react-router-dom'

const Header = () => {

  function openNav() {
    const nav = document.querySelector('#nav')
    nav.classList.toggle('active')
  }

  function navigateTop() {
     window.scrollTo(0, 0);
  }

  return (
    <div>
        <header id='header'>
          <div>
            <button className='material-symbols-outlined' onClick={openNav}>
                menu
            </button>
            <Link to={'/'}>
              <h1 onClick={navigateTop}>
                  Mudar Para Portugal
              </h1>
            </Link>
          </div>
        </header>
    </div>
  )
}

export default Header