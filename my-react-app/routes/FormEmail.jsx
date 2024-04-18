import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import '../style/Form.css'
import { useNavigate } from 'react-router-dom'
import Title from '../components/Title'
import Animation from '../components/Animation'

const FormEmail = () => {
  
  const navigate = useNavigate()
  
  function saveEmail(e) {
    
    e.preventDefault()
    const user = document.querySelector('#userEmail')
    const userEmail = String(user.value)
    localStorage.setItem('userEmail', userEmail)

    navigate('/form-name')
    window.scrollTo(0, 0);
  }

  function navigateTop() {
    window.scrollTo(0, 0);
  }
  
  return (
    <div className='formAll'>
      <Title/>
      <form id='form' onSubmit={saveEmail} >
          <h1 className='question'>
            Olá! Qual o seu Email?
          </h1>
          <input className='form-control' type="email" name="userEmail" id="userEmail" placeholder='Digite seu email' required/>
          <div className='buttons'>
                <Link to={'/'}><button className='btn btn-danger' onClick={navigateTop}>Voltar</button></Link> <br /> <br /><button className='btn btn-dark form-control'>Confirmar</button>
            </div>   
      </form>
      <section className='curiosities'>
        <p>
          <strong>Esse é o seu primeiro passo para a organização da mudança!</strong>
        </p>
      </section>
    </div>
  )
}

export default FormEmail