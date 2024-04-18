import { useState, useEffect } from 'react';
import '../style/Main.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Carousel from '../components/Carousel';
import Animation from './Animation';

const Main = () => {
  const [showButton, setShowButton] = useState(false);
  const storage = localStorage.length;
  const navigate = useNavigate();

  useEffect(() => {
    if (storage >= 8) {
      setShowButton(true);
    }
  }, [storage]);

  function seeResults() {
    navigate('/result');
    window.scrollTo(0, 0);
    
  }

  function navigateTop() {
        window.scrollTo(0, 0);
      }

  return (
    <div id='main'>
        <div id='carousel'>
          <Carousel />
          <h2>Calcule aqui os custos para mudar-se para Portugal<br /> 
          <span><i>#MudarParaPortugal</i></span>
          </h2>
        </div>
       <div id='text'>
          <h2>Calcule aqui os custos para mudar-se para Portugal<br /> 
          <span><i>#MudarParaPortugal</i></span>
          </h2>
        </div>
       <p>
            O sonho de imigrar para outro país pode ser realizado ainda mais rápido se houver planejamento. E isso pode ser feito desde a busca pela localização que pretende viver até o tipo de trabalho que pretende encontrar. Pensando nisso, decidimos ajudar no seu processo com uma coisa que é primordial: <strong>Planejamento Financeiro</strong>. E o nosso algoritmo vai lhe orientar passo-a-passo para que não lhe restem dúvidas.
          </p>
      <div id='mainButtons'>
        <Link to={'/form-email'}>
          <button className='btn btn-dark' onClick={navigateTop}>Quero começar agora!</button>
        </Link>
        {showButton && <button onClick={seeResults} className='btn btn-success' id='seeResults'>Ver meus resultados!</button>}
      </div>
    </div>
  );
};

export default Main;
