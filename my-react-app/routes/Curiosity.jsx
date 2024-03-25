import React from 'react'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import '/style/Curiosity.css'

const Curiosity = () => {

    function showCuriosity1() {
        const curiosity1 = document.getElementById('curiosity1')

        curiosity1.classList.toggle('active')
    }

    function showCuriosity2() {
        const curiosity2 = document.getElementById('curiosity2')

        curiosity2.classList.toggle('active')
    }

    function showCuriosity3() {
        const curiosity3 = document.getElementById('curiosity3')

        curiosity3.classList.toggle('active')
    }

    function showCuriosity4() {
        const curiosity4 = document.getElementById('curiosity4')

        curiosity4.classList.toggle('active')
    }

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
        <section id='curiositySection'>
            <div className='container' onClick={showCuriosity1} id='container1'>
                <h2>O que que são T0, T1, T2, etc?</h2>
                <div className='curiosity' id='curiosity1'>
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
            <div className='container' onClick={showCuriosity2} id='container2'>
                <h2>O que é casa de banho?</h2>
                <div className='curiosity' id='curiosity2'>
                    <p>
                        A casa de banho em Portugal é o mesmo que banheiro no Brasil. Esse nome deve-se ao fato de que, antigamente, os banheiros ficavam no exterior das residências, sendo assim uma segunda 'casa'. Atualmente, mesmo após a integração dos banheiros dentro de casa, o termo casa de banho ainda existe. Mas algumas pessoas preferem dizer 'quarto de banho'.
                    </p>
                </div>
            </div>
            <div className='container' onClick={showCuriosity3} id='container3'>
                <h2>Quando surgiu a CPLP?</h2>
                <div className='curiosity' id='curiosity3'>
                    <p>
                    A Comunidade dos Países de Língua Portuguesa foi criada em 17 de julho de 1996, durante uma cúpula realizada em Lisboa. A organização foi estabelecida com o objetivo de promover a cooperação entre os países que compartilham o idioma português como língua oficial. Desde então, a CPLP tem trabalhado para fortalecer os laços políticos, econômicos, culturais e sociais entre seus membros.
                    </p>
                </div>
            </div>
            <div className='container' onClick={showCuriosity4} id='container4'>
                <h2>Maior ponte da Europa?</h2>
                <div className='curiosity' id='curiosity4'>
                    <p>
                    Inaugurada em 1998, a Ponte Vasco da Gama é a mais longa da Europa, com cerca de 17,2 km de comprimento, incluindo viadutos e acessos.
                    A construção da Ponte Vasco da Gama foi motivada pela necessidade de aliviar o tráfego na Ponte 25 de Abril, outra importante ponte sobre o rio Tejo. A nova ponte foi projetada para conectar as áreas urbanas de Lisboa e a região de Setúbal, proporcionando uma ligação mais rápida e eficiente entre as duas margens do rio.
                    </p>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Curiosity