import {useState, useEffect, React} from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import '../style/Form.css'
import Title from '../components/Title'
import ReactHtmlParser from 'react-html-parser'


const FormPeople = () => {

  const [userName, setUserName] = useState('')

    useEffect(()=> {
        const storedName = localStorage.getItem('userName')
        setUserName(storedName)
    })

    const [userCity, setUserCity] = useState('')

    useEffect(()=> {
    const storedCity = localStorage.getItem('userCity')
    setUserCity(storedCity)
    })

    const navigate = useNavigate()

    function savePeopleData(e) {
        e.preventDefault()
        const people = document.querySelector('#people')
        const userPeople = String(people.value)
        localStorage.setItem('userPeople', userPeople)
        navigate('/form-rent')
        window.scrollTo(0, 0);
      }
      
      function navigateTop() {
        window.scrollTo(0, 0);
      }

      const [aboutCity, setAboutCity] = useState('')

      useEffect(()=> {
        const storedCity = localStorage.getItem('userCity')
        const storedName = localStorage.getItem('userName')
        if(storedCity === 'Albufeira') {
          setAboutCity(`<strong>Albufeira é uma das cidades mais populares entre os turistas que visitam o Algarve, conhecida por suas praias deslumbrantes, vida noturna animada e ambiente acolhedor. Ótima escolha, ${storedName}!</strong> <br /> <br />`)
        } else if(storedCity === 'Almada') {
          setAboutCity(`<strong>${storedName}, Almada está situada na margem sul do rio Tejo, em frente a Lisboa. Com uma história rica e uma localização estratégica, Almada remonta à época romana, quando era conhecida como "Almadena" e desempenhou um papel importante na região ao longo dos séculos.</strong>`)
        } else if(storedCity === 'Aveiro') {
          setAboutCity(`<strong>Aveiro, conhecida como a "Veneza de Portugal", é uma cidade encantadora no centro de Portugal, famosa por seus canais e barcos coloridos chamados moliceiros. Rica em história e cultura, Aveiro oferece arquitetura encantadora, gastronomia deliciosa, praias deslumbrantes e uma atmosfera acolhedora. Ótima escolha, ${storedName}!</strong>`)
        } else if(storedCity === 'Braga') {
          setAboutCity(`<strong>${storedName}, Braga é uma cidade histórica no norte de Portugal, conhecida como o "coração do Minho". É famosa por sua rica herança religiosa, com muitas igrejas e monumentos barrocos impressionantes, incluindo a majestosa Sé Catedral de Braga. Além disso, Braga oferece uma atmosfera animada, com ruas de paralelepípedos, praças charmosas e uma vida cultural vibrante, especialmente durante eventos como a Semana Santa e as festas populares.</strong>`)
        } else if(storedCity === 'Bragança') {
          setAboutCity(`<strong>Bragança é uma cidade histórica localizada no nordeste de Portugal, próxima à fronteira com a Espanha. É conhecida por seu magnífico castelo medieval, que domina a paisagem da cidade, e por suas ruas de paralelepípedos e arquitetura tradicional. Ideal para quem busca uma atmosfera tranquila e autêntica. Esta é a sua vibe, ${storedName}?</strong>`)
        } else if(storedCity === 'Cascais') {
          setAboutCity(`<strong>${storedName}, Cascais é uma encantadora cidade costeira localizada a oeste de Lisboa. Conhecida por suas praias deslumbrantes, marina pitoresca, ruas charmosas e clima ameno, Cascais é um destino popular para turistas em busca de paisagens deslumbrantes, história rica e uma atmosfera descontraída. A cidade também oferece uma variedade de atividades, como surf, golfe, compras e uma vibrante vida noturna.</strong>`)
        } else if(storedCity === 'Castelo Branco') {
          setAboutCity(`<strong>${storedName}, Castelo Branco é uma cidade histórica localizada no interior de Portugal, na região da Beira Baixa. Conhecida pelo seu castelo medieval, que oferece vistas panorâmicas da cidade, Castelo Branco é também famosa pelos seus jardins, como o Jardim do Paço Episcopal, e pela sua arquitetura tradicional. Além disso, a cidade é conhecida pela produção de têxteis e bordados, que são apreciados localmente e exportados para todo o mundo.</strong>`)
        } else if(storedCity === 'Coimbra') {
          setAboutCity(`<strong>${storedName}, Coimbra, localizada no centro de Portugal, é conhecida por sua Universidade centenária, uma das mais antigas da Europa. Com seu centro histórico encantador, a cidade oferece uma rica atmosfera cultural, destacada pelo Fado de Coimbra, uma expressão musical única. Além disso, as margens do Rio Mondego proporcionam belas paisagens e atividades ao ar livre.</strong>`)
        } else if(storedCity === 'Faro') {
          setAboutCity(`<strong>${storedName}, Faro, no sul de Portugal, é conhecida por suas praias deslumbrantes, centro histórico encantador e cultura vibrante. Com acesso à bela Ilha da Culatra e à reserva natural da Ria Formosa, é um destino popular para quem busca sol, mar e gastronomia deliciosa, especialmente frutos do mar frescos. Além disso, como o principal ponto de entrada para o Algarve, o Aeroporto de Faro torna a cidade uma porta de entrada conveniente para a região.</strong>`)
        } else if(storedCity === 'Funchal') {
          setAboutCity(`<strong>${storedName}, o Funchal é a capital da ilha da Madeira e é conhecido por seu clima subtropical, jardins exuberantes e paisagens montanhosas. A cidade é famosa por seu centro histórico encantador, repleto de ruas de paralelepípedos, mercados coloridos e edifícios históricos.</strong>`)
        } else if(storedCity === 'Guimarães') {
          setAboutCity(`<strong>${storedName}, Guimarães é uma cidade histórica no norte de Portugal, frequentemente chamada de "berço da nação" por seu papel na formação de Portugal como país. Possui um centro histórico bem preservado, classificado como Patrimônio Mundial pela UNESCO, com ruas de paralelepípedos, praças pitorescas e edifícios medievais. Guimarães também é conhecida por seu Castelo de Guimarães e pelo Palácio dos Duques de Bragança, ambos importantes marcos históricos.</strong>`)
      } else if(storedCity === 'Leiria') {
          setAboutCity(`<strong>${storedName}, Leiria é uma cidade localizada na região central de Portugal, conhecida por seu castelo medieval, sua localização estratégica entre a serra e o mar e também por seus eventos culturais, como o Festival Internacional de Chocolate de Leiria e o Festival de Música Estoril, que atraem visitantes de todo o país.</strong>`)
        } else if(storedCity === 'Leiria') {
          setAboutCity(`<strong>${storedName}, Leiria é uma cidade localizada na região central de Portugal, conhecida por seu castelo medieval, sua localização estratégica entre a serra e o mar e também por seus eventos culturais, como o Festival Internacional de Chocolate de Leiria e o Festival de Música Estoril, que atraem visitantes de todo o país.</strong>`)
        } else if(storedCity === 'Lisboa') {
          setAboutCity(`<strong>${storedName}, Lisboa é a capital de Portugal, conhecida por sua rica história, arquitetura encantadora e atmosfera cosmopolita. A cidade oferece uma mistura única de tradição e modernidade, com seus bairros históricos, como Alfama e Bairro Alto, contrastando com suas áreas mais contemporâneas, como o Parque das Nações. Além disso, Lisboa é famosa por seus pontos turísticos icônicos, como a Torre de Belém, o Mosteiro dos Jerónimos e o Castelo de São Jorge.</strong>`)
        } else if(storedCity === 'Nazaré') {
          setAboutCity(`<strong>${storedName}, Nazaré é uma pitoresca vila de pescadores localizada na costa central de Portugal, famosa por suas ondas gigantes e tradições culturais. A Praia do Norte, em Nazaré, atrai surfistas de todo o mundo durante o inverno devido às suas impressionantes ondas. Além disso, Nazaré possui um charmoso centro histórico, com ruas estreitas, lojas de artesanato e restaurantes de frutos do mar frescos.</strong>`)
        } else if(storedCity === 'Ponta Delgada') {
          setAboutCity(`<strong>${storedName}, Ponta Delgada é a principal cidade e o centro económico da ilha de São Miguel, nos Açores, Portugal. Conhecida pelas suas ruas pitorescas, arquitetura histórica e porto movimentado, Ponta Delgada é um destino popular para turistas que desejam explorar a beleza natural e as atividades ao ar livre oferecidas pela ilha. Além disso, a cidade é famosa pelos seus pratos de peixe e marisco frescos, bem como pela sua cultura rica e festivais tradicionais açorianos.
          </strong>`)
        } else if(storedCity === 'Porto') {
          setAboutCity(`<strong>${storedName}, O Porto é a segunda maior cidade de Portugal e é conhecida por seu vinho do Porto, arquitetura histórica e atmosfera animada. Às margens do rio Douro, o Porto possui uma série de atrações notáveis, incluindo a Ponte Dom Luís I, a Torre dos Clérigos e a Sé do Porto. Além disso, a cidade é famosa por sua gastronomia, com pratos tradicionais como a francesinha e o bacalhau à brás.</strong>`)
        }  else if(storedCity === 'Setúbal') {
          setAboutCity(`<strong>${storedName}, Setúbal é uma cidade costeira localizada na região de Lisboa, em Portugal. Conhecida por suas praias deslumbrantes e pela proximidade com o Parque Natural da Arrábida, Setúbal é um destino popular para quem busca paisagens naturais impressionantes e uma atmosfera tranquila à beira-mar. A cidade também é famosa por sua gastronomia, especialmente o peixe fresco e o delicioso prato tradicional "choco frito".
          </strong>`)
        } else if(storedCity === 'Sintra') {
          setAboutCity(`<strong>${storedName}, Sintra é uma encantadora vila situada nas colinas a oeste de Lisboa, em Portugal. Reconhecida como Patrimônio Mundial da UNESCO, Sintra é famosa pelos seus palácios deslumbrantes, como o Palácio da Pena e o Palácio Nacional de Sintra, pelas suas mansões e jardins exuberantes, e pela sua atmosfera romântica e misteriosa.
          </strong>`)
        } else if(storedCity === 'Vila Franca de Xira') {
          setAboutCity(`<strong>${storedName}, Vila Franca de Xira é uma cidade situada na região de Lisboa, conhecida por suas tradições culturais e eventos folclóricos. A cidade é famosa pelo seu mercado de agricultores, onde os visitantes podem encontrar uma variedade de produtos frescos e locais. Além disso, Vila Franca de Xira é conhecida pelo seu Festival de Colete Encarnado, uma celebração anual que homenageia a cultura e a herança da região.
          </strong>`)
        } else if(storedCity === 'Viseu') {
          setAboutCity(`<strong>${storedName}, Viseu é uma cidade histórica localizada na região centro de Portugal, conhecida por seu patrimônio cultural e arquitetônico. A cidade possui uma impressionante catedral gótica e uma série de igrejas e museus que refletem sua rica história. Viseu também é famosa por sua gastronomia tradicional, com pratos como o "virado à beira", uma refeição à base de feijão, carne e couve, e o famoso vinho do Dão, produzido na região.
          </strong>`)
        } 
      }, [])

  return (
    <div className='formAll'>
      <Title/>
        <form onSubmit={savePeopleData}>
            <h1 className='question'>Quantas pessoas viverão em {userCity}, no total?</h1 >
            <select name="people" id="people" className='form-control'>
                <optgroup>
                  <option value="none" disabled>-- Escolha aqui --</option>
                  <option value="sozinho">Somente eu</option>
                  <option value="com mais uma pessoa">Duas pessoas</option>
                  <option value="com mais duas pessoas">Três pessoas</option>
                  <option value="com mais três pessoas">Quatro pessoas</option>
                  <option value="com mais de quatro pessoas">Acima de cinco pessoas</option>
                </optgroup>
              </select>
              <div className='buttons'>
                <Link to={'/form-city'}><button className='btn btn-danger' onClick={navigateTop}>Voltar</button></Link> <br /> <br /><button className='btn btn-dark form-control'>Confirmar</button>
            </div>
        </form>
        <section className='curiosities'>
        <p>{ReactHtmlParser(aboutCity)}
          
        </p>
      </section>
    </div>
  )
}

export default FormPeople