import {useState, useEffect, React} from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import '../style/Form.css'
import Title from '../components/Title'

const FormCity = () => {

  const navigate = useNavigate()


  function saveCity(e) {
    e.preventDefault()
    const city = document.querySelector('#city')
    const userCity = String(city.value)
    localStorage.setItem('userCity', userCity)
    navigate('/form-people')
    window.scrollTo(0, 0);
  }

  function navigateTop() {
    window.scrollTo(0, 0);
  }

    const [rentPrice, setRentPrice] = useState(600)

    useEffect(()=>{
      const storedUserCity = localStorage.getItem('userCity')
      if(storedUserCity == 'Aveiro') {
        setRentPrice(600)
      }
    })

  
    return (

    

    <div className='formAll'>
      <Title/>
          <div>
            <form onSubmit={saveCity}>
            <h1 className='question'>Em que cidade pretende viver?</h1>
                <select name="city" id="city" className='form-control'>
                  <optgroup>
                    <option value="none" disabled>-- Escolha aqui --</option>
                      <option value="Albufeira">Albufeira</option>
                      <option value="Almada">Almada</option>
                      <option value="Aveiro">Aveiro</option>
                      <option value="Braga">Braga</option>
                      <option value="Bragança">Bragança</option>
                      <option value="Cascais">Cascais</option>
                      <option value="Castelo Branco">Castelo Branco</option>
                      <option value="Coimbra">Coimbra</option>
                      <option value="Faro">Faro</option>
                      <option value="Funchal">Funchal</option>
                      <option value="Guimarães">Guimarães</option>
                      <option value="Leiria">Leiria</option>
                      <option value="Lisboa">Lisboa</option>
                      <option value="Nazaré">Nazaré</option>
                      <option value="Ponta Delgada">Ponta Delgada</option>
                      <option value="Porto">Porto</option>
                      <option value="Setúbal">Setúbal</option>
                      <option value="Sintra">Sintra</option>
                      <option value="Vila Franca de Xira">Vila Franca de Xira</option>
                      <option value="Viseu">Viseu</option>
                  </optgroup>
                </select>
                <div className='buttons'>
                  <Link to={'/form-year'}><button className='btn btn-danger' onClick={navigateTop}>Voltar</button></Link> <br /> <br /><button className='btn btn-dark form-control'>Confirmar</button>
              </div>
            </form>
          </div>
          <section className='curiosities'>
        <p>
          <strong>Portugal é dividido em 18 distritos e 2 regiões autônomas, os arquipélagos dos Açores e da Madeira. Cada distrito é composto por vários municípios, totalizando 308 municípios em todo o país. Esses municípios são as unidades administrativas de base em Portugal, cada um com sua própria governança local, prefeitura e assembleia municipal.</strong>
        </p>
      </section>
    </div>
  )
}

export default FormCity