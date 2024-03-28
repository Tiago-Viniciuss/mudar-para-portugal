import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Navigation from '../../components/Navigation'
import '/style/Tourism.css'

const PastelNata = () => {

  function navigateTop() {
    window.scrollTo(0, 0);
  }

  return (
    <div>
       <Header/> 
       <Navigation/>
        
        <article id='beachArticle'>
        <div id='pastelNataBackground'>
          <h1>O Famoso Pastel de Nata</h1>
        </div>
        
        <p className='introText'>
            O pastel de nata é uma das mais deliciosas e icônicas sobremesas de Portugal. Também conhecido como pastel de Belém ou pastel de Lisboa, este pequeno doce é uma verdadeira delícia para os amantes de sobremesas em todo o mundo. <br />
            <strong>O pastel de nata é composto por uma massa folhada crocante e uma cremosa mistura de ovos, açúcar, farinha de trigo, leite e baunilha, que são cuidadosamente preparados e cozidos até atingirem uma textura macia e delicada. A sua superfície é polvilhada com uma fina camada de açúcar e canela, o que adiciona um toque extra de sabor e aroma.</strong> <br />
            Simplesmente irresistível!
        </p>
        <div className='tourismArticlesImg'>
          <div id='pasteldeNata1' ></div>
        </div>
        <p>
        A história do pastel de nata remonta ao século XIX, quando monges do Mosteiro dos Jerónimos, em Lisboa, começaram a vender esta iguaria para gerar renda durante um período de crise. A receita original foi mantida em segredo por muitos anos, até que em meados do século XX, a família que adquiriu a confeitaria onde os monges faziam os pastéis começou a produzi-los em maior escala e os tornou amplamente disponíveis ao público.
        Hoje em dia, os pastéis de nata são uma atração gastronômica imperdível para os turistas que visitam Portugal, sendo vendidos em padarias, confeitarias e cafés por todo o país. No entanto, alguns estabelecimentos são particularmente renomados pela qualidade dos seus pastéis, como a famosa Fábrica dos Pastéis de Belém, localizada em Lisboa, onde é possível saborear os pastéis de nata de acordo com a receita original dos monges.
        O pastel de nata é frequentemente servido ainda quente, acompanhado de uma chávena de café ou chá, sendo uma verdadeira tentação para quem gosta de doces. A sua combinação única de texturas crocantes e cremosas, juntamente com o sabor rico e reconfortante, torna-o uma sobremesa absolutamente irresistível e uma verdadeira representação da rica tradição gastronômica de Portugal.
        </p>
        <h2>Pastéis de Belém</h2>
        <span>Belém, Lisboa</span>
        <div id='pasteisBelem'></div>
        <p>
        O Pastel de Belém é uma variação específica do pastel de nata, com uma história e uma receita únicas associadas a uma confeitaria específica em Lisboa, Portugal, chamada "Antiga Confeitaria de Belém", também conhecida como "Fábrica dos Pastéis de Belém". Ele é feito de acordo com uma receita guardada a sete chaves desde meados do século XIX, quando os monges do Mosteiro dos Jerónimos, em Belém, Lisboa, criaram a receita e começaram a vendê-la para gerar renda. A receita original foi passada para os proprietários da confeitaria, que a mantiveram em segredo até hoje.
        O Pastel de Belém é distinto do pastel de nata comum por causa de sua origem e pela fidelidade à receita original da confeitaria "Antiga Confeitaria de Belém". Enquanto os pastéis de nata podem ser encontrados em todo Portugal e muitas vezes têm variações nas receitas, o Pastel de Belém é exclusivo da confeitaria que o originou e é considerado um símbolo da doçaria portuguesa.
        A confeitaria "Antiga Confeitaria de Belém" atrai milhares de visitantes todos os anos, que fazem fila para provar este doce tradicional e autêntico. Além do Pastel de Belém, a confeitaria oferece uma variedade de outras iguarias, mantendo viva a tradição gastronômica de Portugal e o sabor único da sua herança culinária.
        </p>
        </article>
        <aside>
          <h2>Confira também:</h2>
          <Link to={'/beach'}  onClick={navigateTop}>
                <div id='article1'>
                  <p className='articlesTitle'>As 05 melhores praias de Portugal</p>
                </div>
            </Link>
        </aside>
    </div>
  )
}

export default PastelNata