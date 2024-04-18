import {useState, useEffect, React} from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import '../style/Form.css'
import Title from '../components/Title'

const FormVehicle = () => {

    const userEmail = localStorage.getItem('userEmail')
    const userName = localStorage.getItem('userName')
    const userPeople = localStorage.getItem('userPeople')
    const userLocal = localStorage.getItem('userLocal')
    const userRent = localStorage.getItem('userRent')
    const userCity = localStorage.getItem('userCity')
    const birthYear = localStorage.getItem('birthYear')
    


    const navigate = useNavigate()

    const saveVehicle = async (e) => {

        const vehicle = document.querySelector('#vehicle')

        const userVehicle = String(vehicle.value)

        e.preventDefault()
        
        navigate('/result')

        localStorage.setItem('userVehicle', userVehicle)
         
        } 

      function navigateTop() {
        window.scrollTo(0, 0);
      }

  return (
    <div className='formAll'>
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