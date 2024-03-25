import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Navigation from '../../components/Navigation'
import '/style/Tourism.css'

const Beach = () => {
  return (
    <div>
       <Header/> 
       <Navigation/>
        
        <article id='beachArticle'>
        <div id='beachBackground'>
        </div>
        <h1>05 Praias Portuguesas</h1>
        <p>Portugal é conhecido por suas praias deslumbrantes, que oferecem uma variedade de paisagens, desde falésias dramáticas até areias douradas e águas cristalinas. O lugar perfeito para desfrutar da natureza e estar mais perto da calmaria e longe da vida urbana. Aqui estão cinco das melhores praias de Portugal!</p>

        <h1>Praia da Marinha</h1>
        <span>Algarve</span>
        
        <p>
          A Praia da Marinha é uma das praias mais famosas e pitorescas do Algarve, em Portugal. Localizada perto da cidade de Lagoa, esta praia é conhecida pela sua beleza natural deslumbrante, com falésias douradas, formações rochosas impressionantes e águas cristalinas.
          A praia em si é relativamente pequena, mas é cercada por formações rochosas únicas, algumas das quais apresentam arcos naturais e cavernas que podem ser exploradas durante a maré baixa. Estas características criam uma paisagem dramática e cenários espetaculares para os visitantes desfrutarem.
          As águas da Praia da Marinha são geralmente tranquilas e ideais para nadar, mergulhar e praticar snorkeling. A área é também um ótimo local para explorar a vida marinha, com uma grande diversidade de peixes, ouriços-do-mar, estrelas-do-mar e até mesmo polvos.
          A Praia da Marinha tem recebido reconhecimento internacional pela sua beleza natural, tendo sido classificada como uma das praias mais bonitas do mundo em várias ocasiões. Devido à sua popularidade, especialmente durante os meses de verão, é aconselhável chegar cedo para garantir um lugar na praia e desfrutar plenamente das suas paisagens deslumbrantes e águas cristalinas. Além disso, a área circundante oferece trilhas para caminhadas ao longo das falésias, proporcionando vistas panorâmicas espetaculares da costa do Algarve.
      </p>

        <div className='tourismArticlesImg'>
          <div id='marinhaBeach1' ></div>
          <div id='marinhaBeach2'></div>
        </div>

        <h2>Praia de Benagil</h2>
        <span>Algarve</span>
        <p>
          A Praia de Benagil é outra joia do Algarve, famosa principalmente pelo seu icônico Algar de Benagil, uma impressionante caverna marinha em forma de catedral, com uma abertura no topo que permite a entrada da luz solar. Esta formação rochosa é uma das atrações mais emblemáticas da região e pode ser alcançada através de barco ou mesmo de caiaque a partir da própria praia.
          A praia em si é pequena e tranquila, com areias douradas e águas calmas e cristalinas. É um local popular para nadar, fazer snorkeling e explorar as grutas marinhas próximas. Além do Algar de Benagil, os visitantes também podem desfrutar de outras formações rochosas impressionantes ao longo da costa, como arcos naturais e grutas escondidas.
        </p>
        <div id='benagilBeach3'></div>
        <p>
          A área ao redor da Praia de Benagil é bastante pitoresca, com falésias escarpadas cobertas de vegetação mediterrânica. Existem trilhas para caminhadas que oferecem vistas deslumbrantes da costa e do oceano Atlântico, tornando-a uma ótima opção para os amantes da natureza.
          Durante os meses de verão, a Praia de Benagil pode ficar bastante movimentada, especialmente devido ao grande número de turistas que vêm visitar o Algar de Benagil. Portanto, é aconselhável chegar cedo para garantir um lugar na praia e evitar as multidões. No entanto, mesmo nos períodos mais movimentados, a beleza natural e a atmosfera tranquila da Praia de Benagil continuam a encantar os visitantes.
        </p>

        <div className='tourismArticlesImg'>
          <div id='benagilBeach1' ></div>
          <div id='benagilBeach2'></div>
        </div>

        <h3>Praia da Ursa</h3>
        <span>Sintra</span>
        <p>
          A Praia da Ursa é uma das praias mais selvagens e intocadas do Algarve, situada perto da cidade de Sintra, em Portugal. É conhecida pela sua beleza natural deslumbrante, com formações rochosas dramáticas e uma atmosfera tranquila e isolada.
          O acesso à Praia da Ursa não é tão fácil quanto outras praias mais populares do Algarve. Para chegar lá, os visitantes precisam seguir uma trilha íngreme e um tanto desafiadora, que serpenteia através de uma paisagem de vegetação exuberante e falésias impressionantes. No entanto, a recompensa ao final da trilha é uma das praias mais deslumbrantes e intocadas da região.
          A praia em si é pequena e isolada, com areia dourada e águas cristalinas. As formações rochosas ao redor da praia criam uma paisagem dramática e pitoresca, com enormes pilares de pedra erguendo-se do mar. Uma das características mais distintivas da Praia da Ursa é uma enorme rocha em forma de urso, que deu nome à praia.
          Devido ao seu acesso desafiador e à falta de infraestrutura turística, a Praia da Ursa tende a atrair visitantes que buscam uma experiência mais tranquila e próxima da natureza. É um ótimo local para relaxar, nadar e apreciar a beleza natural intocada do litoral português.
          Devido à sua natureza remota e à falta de instalações, os visitantes devem estar preparados e trazer consigo tudo o que precisam para a sua visita, incluindo água, comida e protetor solar. Além disso, é importante lembrar-se de respeitar o ambiente natural e deixar a praia tão intocada quanto a encontraram.
        </p>

        <div className='tourismArticlesImg'>
          <div id='ursaBeach1' ></div>
          <div id='ursaBeach2'></div>
        </div>

        <h4>Praia da Rocha</h4>
        <span>Portimão</span>
        
        <p>
          A Praia da Rocha é uma das praias mais populares e icônicas de Portugal, situada na cidade de Portimão, na região do Algarve. Esta praia deslumbrante é conhecida por suas falésias de arenito dourado, extensa faixa de areia e águas cristalinas do Atlântico.
          Com cerca de um quilômetro de extensão, a Praia da Rocha oferece amplo espaço para os visitantes desfrutarem do sol e do mar. A sua localização próxima a uma variedade de hotéis, restaurantes, bares e lojas torna-a uma escolha popular entre os turistas que procuram uma mistura de relaxamento na praia e atividades de lazer.
        </p>
        <div id='rochaBeach3'></div>
        <p>
          Além de nadar e tomar sol, os visitantes da Praia da Rocha podem participar de uma variedade de atividades aquáticas, como surf, stand-up paddle, jet ski e passeios de barco pelas grutas marinhas próximas. Há também uma calçadão animado ao longo da praia, repleto de bares, restaurantes e lojas, tornando-o um local vibrante tanto de dia quanto de noite.
          A paisagem ao redor da Praia da Rocha é impressionante, com falésias escarpadas que proporcionam vistas panorâmicas deslumbrantes da costa do Algarve. Há também trilhas para caminhadas ao longo das falésias que oferecem oportunidades para explorar ainda mais a beleza natural da região.
          Durante os meses de verão, a Praia da Rocha pode ficar bastante movimentada, especialmente nos fins de semana e feriados. No entanto, mesmo nos períodos de maior afluência, a sua beleza natural e atmosfera animada continuam a atrair visitantes de todo o mundo.
        </p>

        <div className='tourismArticlesImg'>
          <div id='rochaBeach1' ></div>
          <div id='rochaBeach2'></div>
        </div>

        <h5>Praia do Guincho</h5>
        
        <p>
          A Praia do Guincho é uma das praias mais conhecidas e espetaculares da região de Cascais, em Portugal. Localizada a cerca de 5 km a oeste do centro de Cascais, esta praia é amplamente reconhecida pelas suas ondas consistentes e ventos fortes, tornando-se um paraíso para os amantes de esportes aquáticos, em especial o surf e o windsurf.
          A Praia do Guincho possui uma vasta extensão de areia dourada, ladeada por dunas e falésias imponentes, proporcionando um cenário naturalmente belo e selvagem. As ondas aqui podem ser vigorosas, o que atrai surfistas e bodyboarders experientes em busca de desafios emocionantes.
          Além do surf, o Guincho é um local popular para praticar windsurf e kitesurf, devido aos fortes ventos que sopram consistentemente ao longo da costa. As condições aqui são ideais para iniciantes e profissionais desses esportes, tornando-o um dos principais destinos para os entusiastas de esportes aquáticos em Portugal.
        </p>
        <div id='guinchoBeach3'></div>
        <p>
          Além das atividades aquáticas, a Praia do Guincho também é um ótimo local para relaxar ao sol, fazer caminhadas ao longo da costa ou simplesmente apreciar a paisagem deslumbrante. Há uma variedade de restaurantes e cafés à beira-mar onde os visitantes podem desfrutar de refeições deliciosas, com destaque para os pratos de peixe e marisco frescos da região.
          A Praia do Guincho também possui uma importante ligação cultural, sendo mencionada no filme de James Bond "On Her Majesty's Secret Service" e no filme "Shadows in the Sun", o que contribuiu para a sua popularidade internacional.
          Devido à sua beleza natural e condições ideais para esportes aquáticos, a Praia do Guincho atrai visitantes de todo o mundo durante todo o ano. No entanto, é importante estar ciente de que as condições do mar podem ser desafiadoras, e os banhistas devem sempre estar atentos às orientações dos salva-vidas e respeitar as advertências sobre as correntes e as condições do mar.
        </p>

        <div className='tourismArticlesImg'>
          <div id='guinchoBeach1' ></div>
          <div id='guinchoBeach2'></div>
        </div>

        <p>Essas são apenas algumas das muitas praias incríveis que Portugal tem a oferecer, cada uma com sua própria beleza e charme distintos.</p>
        </article>
    </div>
  )
}

export default Beach