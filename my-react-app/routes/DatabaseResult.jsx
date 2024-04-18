import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import Title from '../components/Title';
import '../style/Result.css'

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

const DatabaseResult = () => {
  const [userEmail, setUserEmail] = useState('');
  const [accessAllowed, setAccessAllowed] = useState(false);
  const [userData, setUserData] = useState(null);


  const handleChange = (e) => {
    setUserEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userDocRef = doc(db, 'Users', userEmail);
      const userDocSnap = await getDoc(userDocRef);

      if (userDocSnap.exists()) {
        setAccessAllowed(true);
        setUserData(userDocSnap.data());
      } else {
        setAccessAllowed(false);
        setUserData(null);
      }
    } catch (error) {
      console.error('Erro ao buscar no Firestore:', error);
    }
  };

  return (
    <div id='databaseResultPage'>
      <Title/>
      <div id='databaseResultBackground'></div>
      <form onSubmit={handleSubmit}>
        <p>Digite o email que você usou para calcular os custos na página principal:</p>
        <input type="email" className='form-control' placeholder='Digite o seu email' value={userEmail} onChange={handleChange}/>
        <button className='btn btn-dark' type="submit">Verificar Acesso</button>
      </form>
      {accessAllowed && userData && (
        <div>
          <section id='resultSection'>
            <h1 className='question'>Aqui estão os resultados:</h1>
                <p id='resultText'>
                    Baseado nas suas escolhas, <i>{userData.Name}</i>, se você mudar-se para Portugal para morar <i>{userData.People}</i> em um <i>{userData.Rent}</i> <i>{userData.Local}</i> <i>{userData.City}</i>, usando <i>{userData.Vehicle}</i>, você terá uma despesa total de aproximadamente <i>{userData.TotalCosts}€.</i> Lembrando que os valores usados nestes cálculos são baseados em valores praticados no mercado atual, no primeiro trimestre de 2024, podendo sofrer alterações por diversos fatores.
                </p>

                <table border="1">
                <thead>
                    <tr>
                    <th colSpan="2">Detalhes das Despesas</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Cidade </td>
                    <td><i>{userData.City}</i></td>
                    </tr>
                    <tr>
                    <td>Arrendamento</td>
                    <td><i>{userData.RentPrice}€</i></td>
                    </tr>
                    <tr>
                    <td>Alimentação</td>
                    <td><i>{userData.FoodBudget}€</i></td>
                    </tr>
                    <tr>
                    <td>Transporte</td>
                    <td><i>{userData.VehicleBudget}€</i></td>
                    </tr>
                    <tr>
                    <td>Despesas fixas</td>
                    <td><i>{userData.FixedExpenses}€</i></td>
                    </tr>
                    <tr>
                        <td>Valor final das Despesas:  
                        </td>
                        <td>
                        <strong>{userData.TotalCosts}€</strong>
                        </td>
                    </tr>
                </tbody>
                </table>
                <div className='note'>
                    <span>*Arrendamentos de quartos, normalmente incluem despesas fixas como água, luz e gás <br /> <br />*O preço do serviço de internet não foi calculado, pois depende de vários fatores, como operadora contratada e plano escolhido</span>
                </div>
            </section>
        </div>
      )}
      {!accessAllowed && <p className='warning'>Adicione um email válido.</p>}
    </div>
  );
};

export default DatabaseResult;
