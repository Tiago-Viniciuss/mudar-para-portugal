import React, { useState } from 'react'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import '../style/PortugalHistory.css'

const PortugalHistory = () => {
  return (
    <div>
        <Header/>
        <Navigation/>
        <div id='portugueseFlag'></div>
        <h1>Portugal: Como Tudo Começou</h1>
        <article>
            <p>A história de Portugal é longa e rica, começando com os primeiros assentamentos humanos na região há milhares de anos.</p>

            <p>A região que hoje é Portugal foi habitada por povos pré-históricos, como os Celtas e os Lusitanos. 
            Os Celtas eram um povo indo-europeu que se estabeleceu na Península Ibérica por volta do primeiro milênio a.C. Eles eram conhecidos por sua habilidade em metalurgia, especialmente em trabalhar com ferro, e por sua cultura artística, que incluía a produção de objetos como joias e armas elaboradas. Os Celtas também desenvolveram uma religião pagã, que adorava deidades da natureza e realizava rituais em locais sagrados. <br /> <br />
            Já os Lusitanos eram uma tribo indo-europeia que habitava a região central e norte da Península Ibérica, correspondente ao que é hoje Portugal central e partes da Espanha. Eles eram conhecidos por sua bravura e resistência contra as invasões romanas durante o período da conquista romana da Península Ibérica. Liderados por líderes como Viriato, os Lusitanos conseguiram resistir por muitos anos antes de finalmente serem subjugados pelos romanos. <br /> <br />
            </p>
            <div id='oldPeople' className='articleImg'></div>
            <p data-anime="left">Ambos os grupos, Celtas e Lusitanos, deixaram uma marca significativa na história e na cultura de Portugal. Suas influências podem ser vistas em elementos da cultura portuguesa moderna, como tradições folclóricas, nomes de lugares e até mesmo em alguns aspectos da língua portuguesa. Apesar de terem sido assimilados pela cultura romana durante a conquista romana, o legado dos Celtas e Lusitanos ainda é lembrado e celebrado em Portugal até os dias de hoje.
            </p>
            
            <p>No século V, com a queda do Império Romano, a Península Ibérica foi invadida por povos germânicos, como os Visigodos e os Suevos. No entanto, no século VIII, a região foi conquistada pelos Mouros islâmicos, que estabeleceram o domínio muçulmano na Península Ibérica por vários séculos. A partir do século XI, os reinos cristãos do norte da Península Ibérica começaram a reconquistar as terras ocupadas pelos Mouros, em um período conhecido como Reconquista. Em 1139, Afonso Henriques proclamou-se rei de Portugal após a vitória na Batalha de São Mamede, estabelecendo o Reino de Portugal como uma nação independente.</p>
            <div id='castleGuimaraes' className='articleImg'></div>
            <p>No século XV, Portugal emergiu como uma potência marítima com a Era dos Descobrimentos. Sob o reinado de Henrique, o Navegador, os portugueses exploraram e estabeleceram rotas marítimas para a África, Ásia e América, tornando-se líderes no comércio de especiarias e abrindo caminho para a colonização.Nos séculos XVI e XVII, Portugal construiu um vasto império colonial que se estendia do Brasil à Índia, África e Ásia. No entanto, no século XVIII, o poder português começou a declinar, especialmente após o terremoto de Lisboa em 1755. No século XIX, Portugal passou por convulsões políticas, incluindo as invasões napoleônicas e a instabilidade política interna. No século XX, Portugal foi governado por uma ditadura sob António de Oliveira Salazar, até a Revolução dos Cravos em 1974, que trouxe a democracia ao país.</p>
            <div id='revolution' className='articleImg'></div>
            <p>Desde a Revolução dos Cravos, Portugal tornou-se uma democracia estável e aderiu à União Europeia em 1986. O país tem desempenhado um papel ativo na UE e na cena internacional, enquanto continua a se adaptar aos desafios da globalização e da economia moderna.</p>
            <div id='euFlag' className='articleImg'></div>
        </article>
    </div>
  )
}

export default PortugalHistory