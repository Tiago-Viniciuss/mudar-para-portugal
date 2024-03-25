import React from 'react'
import '../style/Header.css'
import { Link } from 'react-router-dom'

const Title = () => {
  return (
    <div>
        <header id='title'>
            <h1>
                <Link to={'/'}>#MudarParaPortugal</Link>
            </h1>
        </header>
    </div>
  )
}

export default Title