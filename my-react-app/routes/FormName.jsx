import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import '../style/Form.css'
import { useNavigate } from 'react-router-dom'
import Title from '../components/Title'
import Animation from '../components/Animation'

const FormName = () => {
  
  const navigate = useNavigate()
  
  function saveName(e) {
    
    e.preventDefault()
    const user = document.querySelector('#userName')
    const userName = String(user.value)
    localStorage.setItem('userName', userName)

    navigate('/form-year')
    window.scrollTo(0, 0);
  }

  function navigateTop() {
    window.scrollTo(0, 0);
  }



  
  return (
    <div className='formAll' id='formName'>
      <Title/>
      <div id='container'>
        
      </div>
      <form id='form' onSubmit={saveName} >
          <h1 className='question'>
            Como posso te chamar?
          </h1>
          <input className='form-control' type="text" name="userName" id="userName" placeholder='Digite seu nome ou apelido' required/>
          <div className='buttons'>
                <Link to={'/form-email'}><button className='btn btn-danger' onClick={navigateTop}>Voltar</button></Link> <br /> <br /><button className='btn btn-dark form-control'>Confirmar</button>
            </div>   
      </form>
      <section className='curiosities'>
        <p>
          <strong>Você sabia que a língua portuguesa começou a ser desenvolvida na região que hoje é conhecida como Portugal durante a Idade Média?
          A evolução do português a partir do latim vulgar começou por volta do século IX, com influências de várias línguas, incluindo o latim, árabe e línguas germânicas. 
          A partir do século XII, o português antigo começou a se distinguir como uma língua distinta, especialmente através da poesia trovadoresca.
          O português moderno, como o conhecemos hoje, começou a se consolidar durante o século XV, com o período dos Descobrimentos Portugueses.</strong>
        </p>
      </section>
    </div>
  )
}

export default FormName