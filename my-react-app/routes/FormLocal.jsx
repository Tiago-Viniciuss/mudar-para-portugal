import {useState, useEffect, React} from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import '../style/Form.css'
import Title from '../components/Title'

const FormLocal = () => {

  const navigate = useNavigate()


  function saveLocal(e) {
    e.preventDefault()
    const local = document.querySelector('#local')
    const userLocal = String(local.value)
    localStorage.setItem('userLocal', userLocal)
    navigate('/form-vehicle')
    window.scrollTo(0, 0);
  }

  function navigateTop() {
    window.scrollTo(0, 0);
  }

  return (
    <div>
      <Title/>
          <form onSubmit={saveLocal}>
          <h1 className='question'>A que distância prefere viver?</h1>
              <select name="local" id="local" className='form-control'>
                <optgroup>
                  <option value="none" disabled>-- Escolha aqui --</option>
                  <option value="no centro da cidade de">Centro da Cidade</option>
                  <option value="a 10 minutos do centro de">A 10 minutos do centro</option>
                  <option value="a 30 minutos do centro de">A 30 minutos do centro</option>
                  <option value="no interior de">No interior</option>
                </optgroup>
              </select>
              <div className='buttons'>
                <Link to={'/form-people'}><button className='btn btn-danger' onClick={navigateTop}>Voltar</button></Link> <br /> <br /><button className='btn btn-dark form-control'>Confirmar</button>
            </div>
          </form>
          <section className='curiosities'>
        <p>
          <strong>Guimarães é conhecida como "a cidade berço" de Portugal, pois foi lá que o primeiro rei de Portugal, Dom Afonso Henriques, nasceu e foi proclamado como tal. 
          Em 1128, ocorreu a famosa Batalha de São Mamede nas proximidades de Guimarães, onde Dom Afonso Henriques emergiu vitorioso, consolidando sua posição como líder e iniciando o processo de independência de Portugal do Reino de Leão.</strong>
        </p>
      </section>
    </div>
  )
}

export default FormLocal