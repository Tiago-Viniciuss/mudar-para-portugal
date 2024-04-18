import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Title from '../components/Title'

const FormYear = () => {

    const [userName, setUserName] = useState('')

    useEffect(()=> {
        const storedName = localStorage.getItem('userName')
        setUserName(storedName)
    })

    const navigate = useNavigate()
  
    
    function saveYear(e) {
        e.preventDefault()
        const birth = document.querySelector('#birthYear')
        const birthYear = String(birth.value)

       
        localStorage.setItem('birthYear', birthYear)
        navigate('/form-city')
        window.scrollTo(0, 0);
      }

      function navigateTop() {
        window.scrollTo(0, 0);
      }
    

  return (
    <div className='formAll'>
      <Title/>
        <form onSubmit={saveYear}>
          <h1 className='question'>Em que ano você nasceu?</h1>
          <input className='form-control' type="number" name="birthYear" id="birthYear" required placeholder='Exemplo: 1984' min="1930"/>
          <div className='buttons'>
                <Link to={'/form-name'} onClick={navigateTop}><button className='btn btn-danger'>Voltar</button></Link> <br /> <br /><button className='btn btn-dark form-control'>Confirmar</button>
            </div>
        </form>
        <section className='curiosities'>
        <p>
          <strong>{userName}, o Castelo de São Jorge é uma das atrações mais emblemáticas e históricas de Lisboa. Localizado no topo de uma colina na região central da cidade, oferece vistas deslumbrantes do rio Tejo e das áreas circundantes.
          A sua história remonta ao século XI, quando foi construído pelos mouros, embora haja evidências de ocupação humana nessa colina desde tempos pré-históricos.
          Durante a Idade Média, o castelo desempenhou um papel estratégico na defesa da cidade e foi conquistado pelos cristãos em 1147, durante a Reconquista Cristã de Portugal.</strong>
        </p>
      </section>
    </div>
  )
}

export default FormYear