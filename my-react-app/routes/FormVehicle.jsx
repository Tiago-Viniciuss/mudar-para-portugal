import {useState, useEffect, React} from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import '../style/Form.css'
import Title from '../components/Title'

const FormVehicle = () => {

    const navigate = useNavigate()

    function saveVehicle(e) {

        const vehicle = document.querySelector('#vehicle')

        const userVehicle = String(vehicle.value)

        localStorage.setItem('userVehicle', userVehicle)

        e.preventDefault()
        
        navigate('/result')

        window.scrollTo(0, 0);
      }

      function navigateTop() {
        window.scrollTo(0, 0);
      }

  return (
    <div>
        <Title/>
        <form onSubmit={saveVehicle} id='formVehicle'>
            <h1 className='question'>Como pretende se locomover?</h1>
            <select name="vehicle" id="vehicle" className='form-control'>
                <optgroup>
                    <option value="none" disabled>-- Escolha aqui --</option>
                    <option value="transporte público">Transporte Público</option>
                    <option value="moto própria">Moto Própria</option>
                    <option value="carro próprio">Carro Próprio</option>
                </optgroup>
            </select>
            <div className='buttons'>
                <Link to={'/form-local'}><button className='btn btn-danger' onClick={navigateTop}>Voltar</button></Link> <br /> <br /><button className='btn btn-dark form-control'>Confirmar</button>
            </div>
        </form>
        <section className='curiosities'>
        <p>
          <strong>O primeiro português a desbravar os oceanos em uma expedição notável foi o Infante Dom Henrique, conhecido como o Navegador. 
          Embora ele próprio não tenha realizado viagens marítimas, foi ele quem desencadeou e promoveu os esforços de exploração marítima que resultaram nas grandes descobertas portuguesas durante a Era dos Descobrimentos.</strong>
          </p>
      </section>
    </div>
  )
}

export default FormVehicle