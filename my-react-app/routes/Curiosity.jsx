import {React, useEffect, useState} from 'react'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import '/style/Curiosity.css'

const Curiosity = () => {

  const [filter, setFilter] = useState('all'); 

  const showCuriosity = (categoryId) => {
    const curiosities = document.getElementsByClassName('container');
    for (let curiosity of curiosities) {
      curiosity.style.display = 'none';
    }
    const filteredCuriosities = document.getElementsByClassName(categoryId);
    for (let curiosity of filteredCuriosities) {
      curiosity.style.display = 'flex';
    }

    
  };

  

  return (
    <div>
        <Header/>
        <Navigation/>
        <h1>
            Curiosidades
        </h1>
        <p>
            Nesta seção, você conhecerá um pouco mais da cultura portuguesa e poderá tirar algumas dúvidas frequentes relacionadas a termos e expressões usadas em Portugal, mas que podem soar estranhas para os brasileiros. Coisas como 'autocarro', 'meia de leite', 'abatanado', 'casa de banho', 'giro', 'passadeira', entre outras. Conhecer a cultura portuguesa, as palavras usadas e seus diferentes significados, é um grande primeiro passo para intergrar-se à cultura local
        </p>
        <div id='buttonContainer'>
            <button className={filter === 'all' ? 'active' : ''} onClick={() => {setFilter('all'); showCuriosity('container')}}>Todos</button>
            <button className={filter === 'house' ? 'active' : ''}  onClick={() => {setFilter('house'); showCuriosity('house')}}>Coisas de Casa</button>
            <button className={filter === 'food' ? 'active' : ''}  onClick={() => {setFilter('food'); showCuriosity('food')}}>Comida</button>
            <button className={filter === 'law' ? 'active' : ''} onClick={() => {setFilter('law'); showCuriosity('law')}}>Legislação</button>
        </div>
        <section id='curiositySection'>
        <div className='container house'>
        <h2>O que é casa de banho?</h2>
        <div className='house'>
          <p>
            A casa de banho em Portugal é o mesmo que banheiro no Brasil. Esse nome deve-se ao fato de que, antigamente, os banheiros ficavam no exterior das residências, sendo assim uma segunda 'casa'. Atualmente, mesmo após a integração dos banheiros dentro de casa, o termo casa de banho ainda existe. Mas algumas pessoas preferem dizer 'quarto de banho'.
          </p>
        </div>
      </div>
      <div className='container law'>
        <h2>Quando surgiu a CPLP?</h2>
        <div className='law'>
          <p>
            A Comunidade dos Países de Língua Portuguesa foi criada em 17 de julho de 1996, durante uma cúpula realizada em Lisboa. A organização foi estabelecida com o objetivo de promover a cooperação entre os países que compartilham o idioma português como língua oficial. Desde então, a CPLP tem trabalhado para fortalecer os laços políticos, econômicos, culturais e sociais entre seus membros. Os países membros são: Angola, Brasil, Cabo Verde, Guiné-Bissau, Guiné Equatorial, Portugal, Moçambique, São Tomé e Príncipe e Timor-Leste. 
          </p>
        </div>
      </div>
      <div className='container food'>
        <h2>Pastel de Nata ou de Belém?</h2>
        <div className='food'>
          <p>
          O Pastel de Nata* é uma das mais deliciosas e icônicas sobremesas de Portugal e sua história remonta ao século XIX, quando monges do Mosteiro dos Jerónimos, em Lisboa, começaram a vender esta iguaria para gerar renda durante um período de crise. A receita original foi mantida em segredo por muitos anos, até que em meados do século XX, a família que adquiriu a confeitaria onde os monges faziam os pastéis começou a produzi-los em maior escala e os tornou amplamente disponíveis ao público. Na região de Belém, em Lisboa, surgiu o famoso Pastel de Belém, que é um pastel de nata feito de forma local. Ou seja, todo Pastel de Belém, é de nata, mas nem todo Pastel de Nata é de Belém.
          <br /> <br />
          *Nata em Portugal é o mesmo que o creme de leite no Brasil
          </p>
        </div>
      </div>
      <div className='container house'>
        <h2>O que são T1, T2, T3, etc?</h2>
        <div className='house'>
          <p>
            Essa nomenclatura é usada para distinguir a tipologia de cada apartamento de acordo com o número de quartos. Normalmente, um T0 não tem sala e se tiver um único cômodo, chama-se estúdio
         </p>
         <ul>
            <li>T0: Apartamento com 01 quarto</li>
            <li>T1: Apartamento com 01 quarto e sala</li>
            <li>T2: Apartamento com 02 quartos</li>
            <li>T3: Apartamento com 03 quartos</li>
            <li>E assim, sucessivamente...</li>
         </ul>
        </div>
      </div>
        </section>
           {/*
           
           
            
            
      
      
      
      
        
           
           
           
           */}
    </div>
  )
}

export default Curiosity
