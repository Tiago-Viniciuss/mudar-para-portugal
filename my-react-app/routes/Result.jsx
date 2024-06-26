import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import '../style/Result.css'
import Title from '../components/Title'

import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";

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
const firestore = getFirestore(app);

const Result = () => {

    function navigateTop() {
        window.scrollTo(0, 0);
     }

     const [userEmail, setUserEmail] = useState('')
    useEffect(()=> {
        const storedUserEmail = localStorage.getItem('userEmail')
        setUserEmail(storedUserEmail)
    })

    const [userName, setUserName] = useState('')
    useEffect(()=> {
        const storedUserName = localStorage.getItem('userName')
        setUserName(storedUserName)
    })

    const [userYear, setUserYear] = useState('')
    useEffect(()=> {
        const storedUserYear = localStorage.getItem('birthYear')
        setUserYear(storedUserYear)
    })

    const [userCity, setUserCity] = useState('')
    useEffect(()=> {
        const storedUserCity = localStorage.getItem('userCity')
        setUserCity(storedUserCity)
    })

    const [userPeople, setUserPeople] = useState('')
    useEffect(()=> {
        const storedUserPeople = localStorage.getItem('userPeople')
        setUserPeople(storedUserPeople)
    })

    const [userRent, setUserRent] = useState('')
    useEffect(()=> {
        const storedUserRent = localStorage.getItem('userRent')
        setUserRent(storedUserRent)
    })

    const [userLocal, setUserLocal] = useState('')
    useEffect(()=> {
        const storedUserLocal = localStorage.getItem('userLocal')
        setUserLocal(storedUserLocal)
    })

    const [userVehicle, setUserVehicle] = useState('')
    useEffect(()=> {
        const storedUserVehicle = localStorage.getItem('userVehicle')
        setUserVehicle(storedUserVehicle)
    })

    /* 
    
        Cáuculos do Aluguel ----------------------------------

    */

    const [rentPrice, setRentPrice] = useState('')
    const [finalPrice, setfinalPrice] = useState('')

    useEffect(()=> {
        const storedCity = localStorage.getItem('userCity')
        const storedLocal = localStorage.getItem('userLocal')
        const storedRent = localStorage.getItem('userRent')

        if(storedCity == 'Albufeira' && storedRent == 'quarto individual') {
            setRentPrice(350)
        } else if (storedCity == 'Albufeira' && storedRent == 'quarto de casal') {
            setRentPrice(450)
        } else if (storedCity == 'Albufeira' && storedRent == 'estúdio') {
            setRentPrice(650)
        } else if (storedCity == 'Albufeira' && storedRent == 'apartamento de 01 quarto') {
            setRentPrice(850)
        } else if (storedCity == 'Albufeira' && storedRent == 'apartamento de 02 quartos') {
            setRentPrice(1100)
        } else if (storedCity == 'Albufeira' && storedRent == 'apartamento de 03 quartos') {
            setRentPrice(1600)
        } else if (storedCity == 'Albufeira' && storedRent == 'apartamento maior que 04 quartos') {
            setRentPrice(1900)
        }

        if(storedCity == 'Almada' && storedRent == 'quarto individual') {
            setRentPrice(370)
        } else if (storedCity == 'Almada' && storedRent == 'quarto de casal') {
            setRentPrice(500)
        } else if (storedCity == 'Almada' && storedRent == 'estúdio') {
            setRentPrice(700)
        } else if (storedCity == 'Almada' && storedRent == 'apartamento de 01 quarto') {
            setRentPrice(900)
        } else if (storedCity == 'Almada' && storedRent == 'apartamento de 02 quartos') {
            setRentPrice(1100)
        } else if (storedCity == 'Almada' && storedRent == 'apartamento de 03 quartos') {
            setRentPrice(1400)
        } else if (storedCity == 'Almada' && storedRent == 'apartamento maior que 04 quartos') {
            setRentPrice(1900)
        }    


        if(storedCity == 'Aveiro' && storedRent == 'quarto individual') {
            setRentPrice(370)
        } else if (storedCity == 'Aveiro' && storedRent == 'quarto de casal') {
            setRentPrice(450)
        } else if (storedCity == 'Aveiro' && storedRent == 'estúdio') {
            setRentPrice(650)
        } else if (storedCity == 'Aveiro' && storedRent == 'apartamento de 01 quarto') {
            setRentPrice(850)
        } else if (storedCity == 'Aveiro' && storedRent == 'apartamento de 02 quartos') {
            setRentPrice(1100)
        } else if (storedCity == 'Aveiro' && storedRent == 'apartamento de 03 quartos') {
            setRentPrice(1600)
        } else if (storedCity == 'Aveiro' && storedRent == 'apartamento maior que 04 quartos') {
            setRentPrice(1900)
        }

        if(storedCity == 'Braga' && storedRent == 'quarto individual') {
            setRentPrice(325)
        } else if (storedCity == 'Braga' && storedRent == 'quarto de casal') {
            setRentPrice(400)
        } else if (storedCity == 'Braga' && storedRent == 'estúdio') {
            setRentPrice(750)
        } else if (storedCity == 'Braga' && storedRent == 'apartamento de 01 quarto') {
            setRentPrice(900)
        } else if (storedCity == 'Braga' && storedRent == 'apartamento de 02 quartos') {
            setRentPrice(1350)
        } else if (storedCity == 'Braga' && storedRent == 'apartamento de 03 quartos') {
            setRentPrice(1600)
        } else if (storedCity == 'Braga' && storedRent == 'apartamento maior que 04 quartos') {
            setRentPrice(2000)
        }

        if(storedCity == 'Bragança' && storedRent == 'quarto individual') {
            setRentPrice(200)
        } else if (storedCity == 'Bragança' && storedRent == 'quarto de casal') {
            setRentPrice(200)
        } else if (storedCity == 'Bragança' && storedRent == 'estúdio') {
            setRentPrice(350) 
        } else if (storedCity == 'Bragança' && storedRent == 'apartamento de 01 quarto') {
            setRentPrice(500)
        } else if (storedCity == 'Bragança' && storedRent == 'apartamento de 02 quartos') {
            setRentPrice(650)
        } else if (storedCity == 'Bragança' && storedRent == 'apartamento de 03 quartos') {
            setRentPrice(1100)
        } else if (storedCity == 'Bragança' && storedRent == 'apartamento maior que 04 quartos') {
            setRentPrice(1400)
        }

        if(storedCity == 'Cascais' && storedRent == 'quarto individual') {
            setRentPrice(450)
        } else if (storedCity == 'Cascais' && storedRent == 'quarto de casal') {
            setRentPrice(600)
        } else if (storedCity == 'Cascais' && storedRent == 'estúdio') {
            setRentPrice(900) 
        } else if (storedCity == 'Cascais' && storedRent == 'apartamento de 01 quarto') {
            setRentPrice(1100)
        } else if (storedCity == 'Cascais' && storedRent == 'apartamento de 02 quartos') {
            setRentPrice(1550)
        } else if (storedCity == 'Cascais' && storedRent == 'apartamento de 03 quartos') {
            setRentPrice(1850)
        } else if (storedCity == 'Cascais' && storedRent == 'apartamento maior que 04 quartos') {
            setRentPrice(2500)
        }

        if(storedCity == 'Castelo Branco' && storedRent == 'quarto individual') {
            setRentPrice(200)
        } else if (storedCity == 'Castelo Branco' && storedRent == 'quarto de casal') {
            setRentPrice(200)
        } else if (storedCity == 'Castelo Branco' && storedRent == 'estúdio') {
            setRentPrice(350) 
        } else if (storedCity == 'Castelo Branco' && storedRent == 'apartamento de 01 quarto') {
            setRentPrice(500)
        } else if (storedCity == 'Castelo Branco' && storedRent == 'apartamento de 02 quartos') {
            setRentPrice(650)
        } else if (storedCity == 'Castelo Branco' && storedRent == 'apartamento de 03 quartos') {
            setRentPrice(1100)
        } else if (storedCity == 'Castelo Branco' && storedRent == 'apartamento maior que 04 quartos') {
            setRentPrice(1400)
        }

        if(storedCity == 'Coimbra' && storedRent == 'quarto individual') {
            setRentPrice(370)
        } else if (storedCity == 'Coimbra' && storedRent == 'quarto de casal') {
            setRentPrice(450)
        } else if (storedCity == 'Coimbra' && storedRent == 'estúdio') {
            setRentPrice(700) 
        } else if (storedCity == 'Coimbra' && storedRent == 'apartamento de 01 quarto') {
            setRentPrice(900)
        } else if (storedCity == 'Coimbra' && storedRent == 'apartamento de 02 quartos') {
            setRentPrice(1350)
        } else if (storedCity == 'Coimbra' && storedRent == 'apartamento de 03 quartos') {
            setRentPrice(1600)
        } else if (storedCity == 'Coimbra' && storedRent == 'apartamento maior que 04 quartos') {
            setRentPrice(2000)
        }

        if(storedCity == 'Faro' && storedRent == 'quarto individual') {
            setRentPrice(350)
        } else if (storedCity == 'Faro' && storedRent == 'quarto de casal') {
            setRentPrice(450)
        } else if (storedCity == 'Faro' && storedRent == 'estúdio') {
            setRentPrice(650) 
        } else if (storedCity == 'Faro' && storedRent == 'apartamento de 01 quarto') {
            setRentPrice(850)
        } else if (storedCity == 'Faro' && storedRent == 'apartamento de 02 quartos') {
            setRentPrice(1100)
        } else if (storedCity == 'Faro' && storedRent == 'apartamento de 03 quartos') {
            setRentPrice(1600)
        } else if (storedCity == 'Faro' && storedRent == 'apartamento maior que 04 quartos') {
            setRentPrice(1900)
        }

        if(storedCity == 'Funchal' && storedRent == 'quarto individual') {
            setRentPrice(350)
        } else if (storedCity == 'Funchal' && storedRent == 'quarto de casal') {
            setRentPrice(450)
        }
        else if (storedCity == 'Funchal' && storedRent == 'estúdio') {
            setRentPrice(650) 
        } else if (storedCity == 'Funchal' && storedRent == 'apartamento de 01 quarto') {
            setRentPrice(850)
        } else if (storedCity == 'Funchal' && storedRent == 'apartamento de 02 quartos') {
            setRentPrice(1250)
        } else if (storedCity == 'Funchal' && storedRent == 'apartamento de 03 quartos') {
            setRentPrice(1600)
        } else if (storedCity == 'Funchal' && storedRent == 'apartamento maior que 04 quartos') {
            setRentPrice(1900)
        }

        if(storedCity == 'Guimarães' && storedRent == 'quarto individual') {
            setRentPrice(300)
        } else if (storedCity == 'Guimarães' && storedRent == 'quarto de casal') {
            setRentPrice(400)
        } else if (storedCity == 'Guimarães' && storedRent == 'estúdio') {
            setRentPrice(700)
        } else if (storedCity == 'Guimarães' && storedRent == 'apartamento de 01 quarto') {
            setRentPrice(900)
        } else if (storedCity == 'Guimarães' && storedRent == 'apartamento de 02 quartos') {
            setRentPrice(1150)
        } else if (storedCity == 'Guimarães' && storedRent == 'apartamento de 03 quartos') {
            setRentPrice(1400)
        } else if (storedCity == 'Guimarães' && storedRent == 'apartamento maior que 04 quartos') {
            setRentPrice(1700)
        }

        if(storedCity == 'Leiria' && storedRent == 'quarto individual') {
            setRentPrice(250)
        } else if (storedCity == 'Leiria' && storedRent == 'quarto de casal') {
            setRentPrice(325)
        } else if (storedCity == 'Leiria' && storedRent == 'estúdio') {
            setRentPrice(550)
        } else if (storedCity == 'Leiria' && storedRent == 'apartamento de 01 quarto') {
            setRentPrice(650)
        } else if (storedCity == 'Leiria' && storedRent == 'apartamento de 02 quartos') {
            setRentPrice(750)
        } else if (storedCity == 'Leiria' && storedRent == 'apartamento de 03 quartos') {
            setRentPrice(900)
        } else if (storedCity == 'Leiria' && storedRent == 'apartamento maior que 04 quartos') {
            setRentPrice(1250)
        }


        if(storedCity == 'Lisboa' && storedRent == 'quarto individual') {
            setRentPrice(550)
        } else if (storedCity == 'Lisboa' && storedRent == 'quarto de casal') {
            setRentPrice(650)
        } else if (storedCity == 'Lisboa' && storedRent == 'estúdio') {
            setRentPrice(950)
        } else if (storedCity == 'Lisboa' && storedRent == 'apartamento de 01 quarto') {
            setRentPrice(1150)
        } else if (storedCity == 'Lisboa' && storedRent == 'apartamento de 02 quartos') {
            setRentPrice(1550)
        } else if (storedCity == 'Lisboa' && storedRent == 'apartamento de 03 quartos') {
            setRentPrice(2200)
        } else if (storedCity == 'Lisboa' && storedRent == 'apartamento maior que 04 quartos') {
            setRentPrice(2600)
        }

        if(storedCity == 'Nazaré' && storedRent == 'quarto individual') {
            setRentPrice(250)
        } else if (storedCity == 'Nazaré' && storedRent == 'quarto de casal') {
            setRentPrice(325)
        } else if (storedCity == 'Nazaré' && storedRent == 'estúdio') {
            setRentPrice(550)
        } else if (storedCity == 'Nazaré' && storedRent == 'apartamento de 01 quarto') {
            setRentPrice(750)
        } else if (storedCity == 'Nazaré' && storedRent == 'apartamento de 02 quartos') {
            setRentPrice(950)
        } else if (storedCity == 'Nazaré' && storedRent == 'apartamento de 03 quartos') {
            setRentPrice(1250)
        } else if (storedCity == 'Nazaré' && storedRent == 'apartamento maior que 04 quartos') {
            setRentPrice(1450)
        }

        if(storedCity == 'Porto' && storedRent == 'quarto individual') {
            setRentPrice(550)
        } else if (storedCity == 'Porto' && storedRent == 'quarto de casal') {
            setRentPrice(650)
        } else if (storedCity == 'Porto' && storedRent == 'estúdio') {
            setRentPrice(950)
        } else if (storedCity == 'Porto' && storedRent == 'apartamento de 01 quarto') {
            setRentPrice(1150)
        } else if (storedCity == 'Porto' && storedRent == 'apartamento de 02 quartos') {
            setRentPrice(1550)
        } else if (storedCity == 'Porto' && storedRent == 'apartamento de 03 quartos') {
            setRentPrice(2200)
        } else if (storedCity == 'Porto' && storedRent == 'apartamento maior que 04 quartos') {
            setRentPrice(2600)
        }

        if(storedCity == 'Ponta Delgada' && storedRent == 'quarto individual') {
            setRentPrice(300)
        } else if (storedCity == 'Ponta Delgada' && storedRent == 'quarto de casal') {
            setRentPrice(425)
        }
        else if (storedCity == 'Ponta Delgada' && storedRent == 'estúdio') {
            setRentPrice(650) 
        } else if (storedCity == 'Ponta Delgada' && storedRent == 'apartamento de 01 quarto') {
            setRentPrice(850)
        } else if (storedCity == 'Ponta Delgada' && storedRent == 'apartamento de 02 quartos') {
            setRentPrice(1100)
        } else if (storedCity == 'Ponta Delgada' && storedRent == 'apartamento de 03 quartos') {
            setRentPrice(1600)
        } else if (storedCity == 'Ponta Delgada' && storedRent == 'apartamento maior que 04 quartos') {
            setRentPrice(1900)
        }

        if(storedCity == 'Setúbal' && storedRent == 'quarto individual') {
            setRentPrice(300)
        } else if (storedCity == 'Setúbal' && storedRent == 'quarto de casal') {
            setRentPrice(400)
        }
        else if (storedCity == 'Setúbal' && storedRent == 'estúdio') {
            setRentPrice(750) 
        } else if (storedCity == 'Setúbal' && storedRent == 'apartamento de 01 quarto') {
            setRentPrice(900)
        } else if (storedCity == 'Setúbal' && storedRent == 'apartamento de 02 quartos') {
            setRentPrice(1300)
        } else if (storedCity == 'Setúbal' && storedRent == 'apartamento de 03 quartos') {
            setRentPrice(1600)
        } else if (storedCity == 'Setúbal' && storedRent == 'apartamento maior que 04 quartos') {
            setRentPrice(1900)
        }

        if(storedCity == 'Sintra' && storedRent == 'quarto individual') {
            setRentPrice(370)
        } else if (storedCity == 'Sintra' && storedRent == 'quarto de casal') {
            setRentPrice(450)
        } else if (storedCity == 'Sintra' && storedRent == 'estúdio') {
            setRentPrice(700) 
        } else if (storedCity == 'Sintra' && storedRent == 'apartamento de 01 quarto') {
            setRentPrice(900)
        } else if (storedCity == 'Sintra' && storedRent == 'apartamento de 02 quartos') {
            setRentPrice(1350)
        } else if (storedCity == 'Sintra' && storedRent == 'apartamento de 03 quartos') {
            setRentPrice(1600)
        } else if (storedCity == 'Sintra' && storedRent == 'apartamento maior que 04 quartos') {
            setRentPrice(2000)
        }

        if(storedCity == 'Vila Franca de Xira' && storedRent == 'quarto individual') {
            setRentPrice(300)
        } else if (storedCity == 'Vila Franca de Xira' && storedRent == 'quarto de casal') {
            setRentPrice(400)
        }
        else if (storedCity == 'Vila Franca de Xira' && storedRent == 'estúdio') {
            setRentPrice(750) 
        } else if (storedCity == 'Vila Franca de Xira' && storedRent == 'apartamento de 01 quarto') {
            setRentPrice(900)
        } else if (storedCity == 'Vila Franca de Xira' && storedRent == 'apartamento de 02 quartos') {
            setRentPrice(1200)
        } else if (storedCity == 'Vila Franca de Xira' && storedRent == 'apartamento de 03 quartos') {
            setRentPrice(1450)
        } else if (storedCity == 'Vila Franca de Xira' && storedRent == 'apartamento maior que 04 quartos') {
            setRentPrice(1700)
        }

        if(storedCity == 'Viseu' && storedRent == 'quarto individual') {
            setRentPrice(250)
        } else if (storedCity == 'Viseu' && storedRent == 'quarto de casal') {
            setRentPrice(325)
        } else if (storedCity == 'Viseu' && storedRent == 'estúdio') {
            setRentPrice(550)
        } else if (storedCity == 'Viseu' && storedRent == 'apartamento de 01 quarto') {
            setRentPrice(750)
        } else if (storedCity == 'Viseu' && storedRent == 'apartamento de 02 quartos') {
            setRentPrice(950)
        } else if (storedCity == 'Viseu' && storedRent == 'apartamento de 03 quartos') {
            setRentPrice(1250)
        } else if (storedCity == 'Viseu' && storedRent == 'apartamento maior que 04 quartos') {
            setRentPrice(1450)
        }

        if(storedLocal == 'no centro da cidade de') {
            setfinalPrice(rentPrice)
        } else if(storedLocal == 'a 10 minutos do centro de') {
            setfinalPrice(rentPrice - rentPrice*25/100)
        } else if (storedLocal == 'a 30 minutos do centro de') {
            setfinalPrice(rentPrice - rentPrice*35/100)
        } else if (storedLocal == 'no interior de') {
            setfinalPrice(rentPrice - rentPrice*45/100)
        }
    })



    /* 
    
        Cáuculos da alimentação -------------------------------

    */

        const [foodBudget, setFoodBudget] = useState('')

        useEffect(()=> {
            const storedUserPeople = localStorage.getItem('userPeople')

            if(storedUserPeople == 'sozinho') {
                setFoodBudget(110)
            } else if (storedUserPeople == 'com mais uma pessoa') {
                setFoodBudget(190)
            } else if (storedUserPeople == 'com mais duas pessoas') {
                setFoodBudget(250)
            } else if (storedUserPeople == 'com mais três pessoas') {
                setFoodBudget(280)
            } else if (storedUserPeople == 'com mais de quatro pessoas') {
                setFoodBudget(320)
            }
        })


        /* 
    
        Cáuculos do transporte -------------------------------

        */

        const [vehicleBudget, setVehicleBudget] = useState('')

        useEffect(()=> {
            const storedUserVehicle = localStorage.getItem('userVehicle')

            if(storedUserVehicle == 'transporte público') {
                setVehicleBudget(30)
            } else if (storedUserVehicle == 'moto própria') {
                setVehicleBudget(40)
            } else if (storedUserVehicle == 'carro próprio') {
                setVehicleBudget(70)
            } 
        })

        /* 
    
        Cáuculos de despesas fixas ---------------------------

        */

        const [fixedExpenses, setFixedExpenses] = useState('')

        useEffect(()=> {
            const storedRent = localStorage.getItem('userRent')

            if(storedRent == 'quarto individual' || storedRent == 'quarto de casal') {
                setFixedExpenses(0)
            } else {
                setFixedExpenses(85)
            }
        })

        const [totalCosts, setTotalCosts] = useState('')

        useEffect(()=> {
            setTotalCosts(finalPrice + foodBudget + vehicleBudget + fixedExpenses)
            localStorage.setItem('totalCosts', totalCosts)
        })

        const saveInfo = async (e) => {
    
            e.preventDefault()
    
            try {
              const usersCollectionRef = collection(firestore, 'Users');
        
              await setDoc(doc(usersCollectionRef, userEmail), { Name: userName,
                Birth: userYear,
                City: userCity,
                Local: userLocal,
                People: userPeople,
                Rent: userRent,
                Vehicle: userVehicle,
                RentPrice: finalPrice,
                FoodBudget: foodBudget,
                VehicleBudget: vehicleBudget,
                FixedExpenses: fixedExpenses,
                TotalCosts: totalCosts
              });
        
            } catch (error) {
              console.error('Erro ao adicionar usuário:', error);
            }
          }


  return (
    <div id='result'>
        <Title/>
        <div>
            <section id='resultSection'>
            <h1 className='question'>Aqui estão os resultados:</h1>
                <p id='resultText'>
                    Baseado nas suas escolhas, <i>{userName}</i>, se você mudar-se para Portugal para morar <i>{userPeople}</i> em um <i>{userRent}</i> <i>{userLocal}</i> <i>{userCity}</i>, usando <i>{userVehicle}</i>, você terá uma despesa total de aproximadamente <i>{finalPrice + foodBudget + vehicleBudget + fixedExpenses}€.</i> Lembrando que os valores usados nestes cálculos são baseados em valores praticados no mercado atual, no primeiro trimestre de 2024, podendo sofrer alterações por diversos fatores.
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
                    <td><i>{userCity}</i></td>
                    </tr>
                    <tr>
                    <td>Arrendamento</td>
                    <td><i>{finalPrice}€</i></td>
                    </tr>
                    <tr>
                    <td>Alimentação</td>
                    <td><i>{foodBudget}€</i></td>
                    </tr>
                    <tr>
                    <td>Transporte</td>
                    <td><i>{vehicleBudget}€</i></td>
                    </tr>
                    <tr>
                    <td>Despesas fixas</td>
                    <td><i>{fixedExpenses}€</i></td>
                    </tr>
                    <tr>
                        <td>Valor final das Despesas:  
                        </td>
                        <td>
                        <strong>{finalPrice + foodBudget + vehicleBudget + fixedExpenses}€</strong>
                        </td>
                    </tr>
                </tbody>
                </table>
                <div className='note'>
                    <p>*Arrendamentos de quartos, normalmente incluem despesas fixas como água, luz e internet <br /> <br /> *O preço do serviço de internet não foi calculado,  pois depende de vários fatores, como operadora contratada e plano escolhido</p>
                </div>
            </section>
            <p>Se quiser acessar os resultados em uma futura ocasião, salve-os e poderá revê-los usando o seu email na seção 'Meus Resultados' do Menu.</p>
            <button onClick={saveInfo} className='btn btn-dark'>Salvar Dados</button>
            <Link to={'/'}><button className='btn btn-dark' onClick={navigateTop}>Voltar à página principal</button></Link>
        </div>
    </div>
  )
}

export default Result