import {useState, useEffect, React} from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import '../style/Form.css'
import Title from '../components/Title'

const FormRent = () => {

    const navigate = useNavigate()

    function saveRent(e) {

        const rent = document.querySelector('#rent')

        const userRent = String(rent.value)

        localStorage.setItem('userRent', userRent)

        e.preventDefault()
        
        navigate('/form-local')
        window.scrollTo(0, 0);
      }

      function navigateTop() {
        window.scrollTo(0, 0);
      }

  return (
    <div className='formAll'>
        <Title/>
        <form onSubmit={saveRent} id='formRent'>
            <h1 className='question'>Que tipo de moradia está buscando?</h1>
            <select name="rent" id="rent" className='form-control'>
                <optgroup>
                    <option value="none" disabled>-- Escolha aqui --</option>
                    <option value="quarto individual">Quarto individual</option>
                    <option value="quarto de casal">Quarto de casal</option>
                    <option value="estúdio">Estúdio</option>
                    <option value="apartamento de 01 quarto">Apartamento de 01 quarto</option>
                    <option value="apartamento de 02 quartos">Apartamento de 02 quartos</option>
                    <option value="apartamento de 03 quartos">Apartamento de 03 quartos</option>
                    <option value="apartamento maior que 04 quartos">Maior que 04 quartos</option>
                </optgroup>
            </select>
            <div className='buttons'>
                <Link to={'/form-people'}><button className='btn btn-danger' onClick={navigateTop}>Voltar</button></Link> <br /> <br /><button className='btn btn-dark form-control'>Confirmar</button>
            </div>
        </form>
        <section className='curiosities'>
        <p>
          <strong>A culinária portuguesa é rica e variada, com pratos tradicionais que refletem a diversidade regional do país, bem como suas influências históricas e culturais. De norte a sul, delicie-se com pratos únicos da culinária lusitana.</strong>
        </p>
      </section>
    </div>
  )
}

export default FormRent