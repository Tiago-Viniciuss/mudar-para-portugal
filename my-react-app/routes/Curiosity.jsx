import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import '/style/Curiosity.css';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const Curiosity = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const firebaseConfig = {
        apiKey: "AIzaSyAjrPk-AWBVj45M9zCMfCGdKIxcxDBnBGU",
        authDomain: "mudar-para-portugal.firebaseapp.com",
        projectId: "mudar-para-portugal",
        storageBucket: "mudar-para-portugal.appspot.com",
        messagingSenderId: "442612081698",
        appId: "1:442612081698:web:63cb0dbf6ebca3328c167b",
        measurementId: "G-1SHVGRQSZR"
      };

      const app = initializeApp(firebaseConfig);
      const db = getFirestore(app);
      const articlesCollection = collection(db, 'artigos');
      const data = await getDocs(articlesCollection);
      setArticles(data.docs.map((doc) => doc.data()));
    };

    fetchArticles();
  }, []);

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
            <button className={filter === 'language' ? 'active' : ''}  onClick={() => {setFilter('language'); showCuriosity('language')}}>Linguagem</button>
            <button className={filter === 'food' ? 'active' : ''}  onClick={() => {setFilter('food'); showCuriosity('food')}}>Comida</button>
            <button className={filter === 'history' ? 'active' : ''}  onClick={() => {setFilter('history'); showCuriosity('history')}}>História</button>
            <button className={filter === 'law' ? 'active' : ''} onClick={() => {setFilter('law'); showCuriosity('law')}}>Legislação</button>
            <button className={filter === 'sport' ? 'active' : ''} onClick={() => {setFilter('sport'); showCuriosity('sport')}}>Esportes</button>
        </div>
        <section id='curiositySection'>
        <div id='databaseCuriosities'>
      {articles.map((artigos, index) => (
        <div key={index} className={`container ${artigos.classe}`}>
          <h2>{artigos.title}</h2>
          <p>{artigos.content}</p>
        </div>
      ))}
    </div>
      <div className='container law'>
        <h2>Quando surgiu a CPLP?</h2>
          <p>
            A Comunidade dos Países de Língua Portuguesa foi criada em 17 de julho de 1996, durante uma cúpula realizada em Lisboa. A organização foi estabelecida com o objetivo de promover a cooperação entre os países que compartilham o idioma português como língua oficial. Desde então, a CPLP tem trabalhado para fortalecer os laços políticos, econômicos, culturais e sociais entre seus membros. Os países membros são: Angola, Brasil, Cabo Verde, Guiné-Bissau, Guiné Equatorial, Portugal, Moçambique, São Tomé e Príncipe e Timor-Leste. Em 2023 foi criada uma iniciativa que facilita a mobilidade de cidadãos entre os países membros e que permite que os cidadãos desses países possam residir temporariamente ou permanentemente em outros países membros, com base em acordos bilaterais e multilaterais entre os países da CPLP. Esta iniciativa visa promover a integração, cooperação e intercâmbio entre os países lusófonos. 
          </p>
      </div>
      <div className='container language'>
        <h2>O que é casa de banho?</h2>
          <p>
            A casa de banho em Portugal é o mesmo que banheiro no Brasil. Esse nome deve-se ao fato de que, antigamente, os banheiros ficavam no exterior das residências, sendo assim uma segunda 'casa'. Atualmente, mesmo após a integração dos banheiros dentro de casa, o termo casa de banho ainda existe. Mas algumas pessoas preferem dizer 'quarto de banho'. Portanto, quando quiser ir ao banheiro, pergunte onde fica a 'casa de banho'
          </p>
      </div>
      <div className='container food'>
        <h2>Pastel de Nata ou de Belém?</h2>
          <p>
          O Pastel de Nata* é uma das mais deliciosas e icônicas sobremesas de Portugal e sua história remonta ao século XIX, quando monges do Mosteiro dos Jerónimos, em Lisboa, começaram a vender esta iguaria para gerar renda durante um período de crise. A receita original foi mantida em segredo por muitos anos, até que em meados do século XX, a família que adquiriu a confeitaria onde os monges faziam os pastéis começou a produzi-los em maior escala e os tornou amplamente disponíveis ao público. Na região de Belém, em Lisboa, surgiu o famoso Pastel de Belém, que é um pastel de nata feito de forma local. Ou seja, todo Pastel de Belém, é de nata, mas nem todo Pastel de Nata é de Belém.
          <br /> <br />
          *Nata em Portugal é o mesmo que o creme de leite no Brasil
          </p>
      </div>
      <div className='container language'>
        <h2>O que são T1, T2, T3, etc?</h2>
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
      <div className='container history'>
        <h2>O que foi o 25 de Abril?</h2>
          <p>
          Também conhecido como 'A Revolução dos Cravos', o 25 de Abril de 1974 foi um momento decisivo na história de Portugal, onde um golpe militar liderado por jovens oficiais do exército derrubou o regime ditatorial do Estado Novo, que governava o país desde 1933. Este golpe foi marcado pela não violência e pelo amplo apoio popular. O evento abriu caminho para a democratização de Portugal, com a realização de eleições livres e multipartidárias, a redação de uma nova constituição e o estabelecimento de um sistema político democrático.
          </p>
      </div>
      <div className='container food'>
        <h2>Qual é o prato mais típico do norte?</h2>
          <p>
          O prato mais típico do Norte de Portugal é frequentemente considerado a Francesinha. Este prato é especialmente popular na região do Porto, embora tenha se espalhado por todo o país. A Francesinha é uma sanduíche de várias camadas, composta por fatias de pão, linguiça, salsicha fresca, carne de vaca ou de porco, presunto, queijo derretido e coberta com um molho picante de tomate e cerveja. É frequentemente acompanhada por batatas fritas.
          Existem várias teorias sobre a origem do nome. Uma das mais aceitas é que o prato foi criado na década de 1960, por um imigrante português que havia retornado de França e se inspirou no famoso Croque-monsieur francês, adaptando-o aos gostos portugueses. Como uma homenagem à influência francesa na culinária, deu-lhe o nome 'Francesinha'.
         </p>
      </div>
      <div className='container law'>
        <h2>O que é IRS?</h2>
          <p>
          IRS é a sigla para "Imposto sobre o Rendimento de Pessoas Singulares". É um imposto aplicado sobre os rendimentos das pessoas físicas em muitos países, incluindo Portugal. Em outras palavras, é o imposto que as pessoas pagam sobre o dinheiro que ganham através de salários, honorários, lucros de negócios, juros de poupança, ganhos de investimento e outros tipos de rendimentos.O IRS é um imposto progressivo, o que significa que as taxas de imposto aumentam à medida que os rendimentos aumentam. Em muitos países, incluindo Portugal, os contribuintes têm que fazer uma declaração de imposto anualmente para informar o governo sobre seus rendimentos e despesas, e com base nessa declaração, é calculado o valor do imposto a pagar ou a restituir.O dinheiro arrecadado com o IRS é usado pelo governo para financiar serviços públicos, como saúde, educação, segurança social e infraestrutura.
          </p>
      </div>
      <div className='container sport'>
        <h2>Quais os maiores clubes do fubebol português?</h2>
          <p>
          Os maiores clubes do futebol português são geralmente considerados o Sport Lisboa e Benfica, comumente chamado de Benfica, o Futebol Clube do Porto, conhecido como Porto e o Sporting Clube de Portugal, conhecido como Sporting. Esses três clubes têm uma longa história de sucesso no futebol português e uma base de fãs bastante significativa. Eles dominaram historicamente o cenário do futebol em Portugal e têm uma rivalidade intensa entre si, conhecida como "O Clássico" quando Porto enfrenta Benfica e "O Derby" quando Sporting enfrenta Benfica ou Porto. Além desses três, há outros clubes notáveis em Portugal, como o Sporting Clube de Braga, o Vitória Sport Clube de Guimarães e o Boavista Futebol Clube, entre outros.
          </p>
      </div><div className='container food'>
        <h2>você sabe pedir um café em Portugal?</h2>
          <p>
          Em Portugal, há várias maneiras de pedir um café, e a escolha pode variar desde o tipo de café que você prefere até mesmo se quer a xícara fria ou quente. Veja estes exemplos:
         </p>
         <ul>
            <li>Chávena: Antes de começar, saiba que 'chávena' signfica 'xícara'.</li>
            <li>Bica: Uma bica é um café expresso curto, forte e encorpado.</li>
            <li>Café: Se você quiser um café expresso mais longo, pode simplesmente pedir um 'café'.</li>
            <li>Café Pingado: Este é um café expresso que é "pingado" com um pouco de leite.</li>
            <li>Café Cheio: Um café expresso cheio até a borda da xícara.</li>
            <li>Galão: Trata-se de 30% de café expresso mais 70% de leite.</li>
         </ul>
      </div>

      <div className='container language'>
        <h2>O que é algo 'Giro'?</h2>
          <p>
          Giro é uma expressão comum em Portugal, que significa 'algo bonito', 'algo agradável', 'algo interessante' ou 'algo divertido'. A palavra 'giro' é frequentemente usada para descrever algo que é visualmente atraente, emocionante ou que desperta sentimentos positivos. Por exemplo, uma pessoa pode dizer que uma roupa é 'gira' para indicar que achou a peça bonita ou que uma experiência foi 'gira' para expressar que foi divertida ou agradável.
          </p>
      </div>
      <div className='container history'>
        <h2>Quem foi o primeiro rei de Portugal?</h2>
          <p>
          O primeiro rei de Portugal foi Dom Afonso I, mais conhecido como Afonso Henriques. Ele governou Portugal de 1139 até sua morte em 1185. Afonso Henriques foi o responsável por proclamar a independência de Portugal em relação ao Reino de Leão, tornando-se o primeiro monarca do novo reino independente. Ele é frequentemente chamado de "Afonso I de Portugal" em referência ao seu papel como fundador da nação portuguesa.
          </p>
      </div>
      <div className='container language'>
        <h2>O que é uma passadeira?</h2>
          <p>
          Passadeira se refere a uma faixa de pedestres, que é uma área marcada na via pública, geralmente com listras brancas, destinada à passagem segura de pedestres. As passadeiras são especialmente importantes em áreas urbanas e perto de escolas, cruzamentos e outros locais onde há grande circulação de pedestres e veículos. O termo "passadeira" é amplamente utilizado em Portugal para descrever essa infraestrutura de trânsito, que é essencial para garantir a segurança dos pedestres nas ruas e estradas.
          </p>
      </div>
      <div className='container food'>
        <h2>Conhece as castas de uva portuguesas?</h2>
          <p>
          Portugal possui uma grande variedade de castas de uvas utilizadas na produção de vinho. Estima-se que existam mais de 250 castas de uvas nativas em Portugal, o que contribui para a diversidade e singularidade dos vinhos produzidos no país. Algumas das castas mais conhecidas incluem Touriga Nacional, Alvarinho, Baga, Trincadeira, Castelão, Touriga Franca, entre outras. Cada região vinícola de Portugal tem suas próprias castas tradicionais e características específicas, resultando em uma riqueza de vinhos distintos e de alta qualidade.
          </p>
      </div>
      <div className='container history'>
        <h2>Qual foi a primeira embarcação portuguesa?</h2>
          <p>
          A primeira embarcação portuguesa de que se tem conhecimento é o "Barco Rabelo". Essas embarcações tradicionais eram utilizadas para transportar vinho pelo rio Douro, uma das principais regiões vinícolas de Portugal. Os Barcos Rabelos eram robustos e de fundo chato, projetados especificamente para navegar nas águas do rio Douro, e desempenharam um papel fundamental no comércio do vinho do Porto durante séculos. Embora não seja uma embarcação de exploração marítima, os Barcos Rabelos são considerados uma parte importante da história marítima e comercial de Portugal.
          </p>
      </div>
      <div className='container sport'>
        <h2>Quem foi o maior jogador do futebol português?</h2>
          <p>
          O maior jogador de futebol português é amplamente considerado Cristiano Ronaldo. Nascido em 5 de fevereiro de 1985, na Ilha da Madeira, Portugal, Cristiano Ronaldo é um dos jogadores mais talentosos e bem-sucedidos da história do futebol. Ele começou sua carreira profissional no Sporting Clube de Portugal, antes de se transferir para o Manchester United em 2003, onde alcançou grande sucesso, ganhando vários títulos, incluindo a Liga dos Campeões da UEFA. Em 2009, ele se juntou ao Real Madrid, onde se tornou o artilheiro histórico do clube e conquistou inúmeros títulos, incluindo quatro Ligas dos Campeões. Ele é o artilheiro de todos os tempos da seleção portuguesa e liderou a equipe à vitória na Euro 2016, onde foi fundamental para o sucesso de Portugal.  Ele acumulou inúmeros prêmios individuais ao longo de sua carreira, incluindo cinco prêmios de Melhor Jogador do Mundo da FIFA.
          </p>
      </div>
      <div className='container food'>
        <h2>O que é a Sopa da Pedra?</h2>
          <p>
          A Sopa de Pedra é uma sopa rica e reconfortante, feita com uma base de feijão, geralmente feijão-manteiga ou feijão-vermelho, acrescida de carne de porco, como chouriço, entrecosto ou toucinho, além de vegetais como batata, cenoura e couve. O nome peculiar do prato vem da história folclórica associada a ele: reza a lenda que um monge faminto bateu às portas de uma aldeia pedindo comida, e, ao ser recusado, decidiu fazer uma sopa de pedra. Ele convenceu os moradores a contribuírem com ingredientes adicionais, como carne, vegetais e especiarias, para enriquecer a sopa. No final, adicionou uma pedra limpa e fervida à sopa, dizendo que era para dar sabor, e, após provar, os moradores ficaram impressionados com o sabor delicioso da sopa de pedra. A Sopa de Pedra é uma parte importante da tradição culinária de Lisboa e de Portugal como um todo, representando a riqueza da cozinha portuguesa e a criatividade em transformar ingredientes simples em pratos deliciosos.
         </p>
      </div>
        </section>
    </div>
  )
}

export default Curiosity
