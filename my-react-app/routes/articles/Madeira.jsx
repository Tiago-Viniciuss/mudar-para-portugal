import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Navigation from '../../components/Navigation'
import '/style/Tourism.css'

const Madeira = () => {

  function navigateTop() {
    window.scrollTo(0, 0);
  }


  return (
    <div>
       <Header/> 
       <Navigation/>
        
        <article id='madeiraArticle'>
        <div id='madeiraBackground' className='backgroundImg'>
        <h1>ILHA DA MADEIRA</h1>
        </div>
        <p className='introText'>Localizada no Oceano Atlântico, a Ilha da Madeira é um verdadeiro paraíso tropical conhecido por suas paisagens deslumbrantes, clima ameno durante todo o ano, uma rica herança cultural, e está situada a cerca de 1.000 km a sudoeste de Lisboa. Com uma área de aproximadamente 740 km², a ilha oferece uma variedade de atrações que atraem visitantes de todo o mundo.  <br /> <strong>O clima subtropical da Madeira, com temperaturas amenas durante todo o ano e uma abundância de vegetação exuberante, deu-lhe o apelido de "Ilha das Flores".</strong> <br />Neste artigo, exploraremos os pontos turísticos mais impressionantes, atividades emocionantes e experiências únicas que esta ilha encantadora tem a oferecer.</p>

        <h3>Funchal</h3>
        
        <p>
        A capital da ilha, Funchal, é um dos destinos mais populares da Madeira. Esta cidade vibrante oferece uma mistura de história, cultura e beleza natural. Algumas das atrações imperdíveis em Funchal incluem o Mercado dos Lavradores, onde você pode experimentar frutas tropicais frescas e artesanato local, o Jardim Botânico, com uma vasta coleção de plantas exóticas, e o Teleférico do Funchal, que oferece vistas panorâmicas deslumbrantes sobre a cidade e o oceano.
      </p>

        <div className='tourismArticlesImg'>
          <div id='funchal1' ></div>
          <div id='funchal2'></div>
        </div>

        <h3>Pico do Arieiro</h3>
        <p>
        Localizado a cerca de 1.800 metros acima do nível do mar, o Pico do Arieiro é o terceiro pico mais alto da ilha. A estrada que leva ao topo oferece vistas espetaculares das montanhas circundantes e do oceano Atlântico. Os visitantes podem fazer caminhadas desafiadoras até o Pico Ruivo, o pico mais alto da Madeira, ou simplesmente desfrutar das vistas panorâmicas no mirante.
        </p>
        <div id='arieiro1'></div>
        <p>
        É importante estar preparado para o clima no Pico do Arieiro, já que as condições meteorológicas podem mudar rapidamente, especialmente em altitudes mais elevadas. Mesmo nos meses mais quentes, pode haver ventos fortes e temperaturas mais frias no topo das montanhas. Portanto, é aconselhável vestir-se em camadas e trazer proteção contra o vento e o sol.
        </p>

        <div className='tourismArticlesImg'>
          <div id='arieiro2'></div>
          <div id='arieiro3'></div>
        </div>

        <h3>Cabo Girão</h3>
        <p>
        Cabo Girão é uma das falésias mais altas da Europa, com uma altura impressionante de 580 metros. Um mirante de vidro foi construído nesta falésia, proporcionando uma experiência única e emocionante para os visitantes. De lá, você pode desfrutar de vistas deslumbrantes sobre o oceano e as vilas costeiras abaixo.
        </p>

        <div className='tourismArticlesImg'>
          <div id='girao1' ></div>
          <div id='girao2'></div>
        </div>

        <h3>Porto Moniz</h3>
        
        <p>
        Porto Moniz é conhecido por suas piscinas naturais de origem vulcânica, que oferecem uma experiência única de natação em águas cristalinas. Além das piscinas naturais, esta área também é famosa por suas formações rochosas dramáticas e paisagens costeiras espetaculares.
        </p>
        <div id='portomoniz1'></div>
        <p>
        A vila de Porto Moniz também oferece uma bela promenade à beira-mar, perfeita para passeios relaxantes e contemplativos. Ao longo desta promenade, os visitantes podem desfrutar de vistas panorâmicas do oceano Atlântico, bem como de cafés, restaurantes e lojas locais que oferecem iguarias regionais e artesanato tradicional. Além de nadar nas piscinas naturais, os visitantes de Porto Moniz também podem desfrutar de uma variedade de atividades ao ar livre, como caminhadas ao longo dos trilhos costeiros, passeios de barco para observação de baleias e golfinhos, e até mesmo surf nas ondas do Atlântico.
        </p>

        <div className='tourismArticlesImg'>
          <div id='portomoniz2' ></div>
          <div id='portomoniz3'></div>
        </div>

        <h3>Santuário da Nossa Senhora da Paz</h3>
        <p>
        Localizado no topo de uma colina com vista para a cidade de Machico, o Santuário da Nossa Senhora da Paz é um local de peregrinação religiosa e oferece vistas panorâmicas deslumbrantes sobre o litoral leste da ilha. O santuário abriga uma estátua da Virgem Maria esculpida em mármore branco, que é uma das maiores do mundo.
        </p>
        <div id='santuario1'></div>
        <p>
        O Santuário da Nossa Senhora da Paz foi construído em 1927 em homenagem a Nossa Senhora da Paz, padroeira da cidade de Machico. A estátua da Virgem Maria, esculpida em mármore branco, é uma das maiores do mundo e domina a paisagem do santuário. O local atrai peregrinos de toda a ilha, que vêm para prestar homenagem, fazer orações e buscar a paz espiritual.
        </p>

        <div className='tourismArticlesImg'>
          <div id='santuario2' ></div>
          <div id='santuario3'></div>
        </div>

        <p>A Ilha da Madeira é um destino verdadeiramente especial, repleto de beleza natural, história fascinante e uma rica cultura. Com uma variedade de locais para visitar e atividades para desfrutar, esta ilha encantadora oferece algo para todos os gostos. Se você está em busca de aventura ao ar livre, relaxamento à beira-mar ou experiências culturais únicas, a Madeira certamente não irá decepcionar. Venha explorar as maravilhas da Ilha da Madeira e descobrir por que ela é considerada um dos destinos mais encantadores de Portugal.</p>
        </article>
        <aside>
          <h2>Confira também:</h2>
          <section>
              <Link to={'/beach'} onClick={navigateTop}>
                    <div id='article1'>
                      <p className='articlesTitle'><span>Turismo</span>As 05 melhores praias de Portugal</p>
                    </div>
                </Link>
              <Link to={'/pastel-de-nata'} onClick={navigateTop}>
                  <div id='article2'>
                      <p className='articlesTitle'><span>Culinária</span>Você conhece o pastel de nata?</p>
                  </div>
                </Link>
          </section>
        </aside>
    </div>
  )
}

export default Madeira