// Creator.jsx
import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";
import Header from '../components/Header';
import Navigation from '../components/Navigation';

const CreatorPage = () => {
    const [accessAllowed, setAccessAllowed] = useState(false);
    const [adminEmail, setAdminEmail] = useState('');
    const [adminPassword, setAdminPassword] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [classe, setClasse] = useState('');
    const [db, setDb] = useState(null); // State para armazenar a instância do Firestore
  
    // Configuração do Firebase
    const firebaseConfig = {
      apiKey: "AIzaSyAjrPk-AWBVj45M9zCMfCGdKIxcxDBnBGU",
      authDomain: "mudar-para-portugal.firebaseapp.com",
      projectId: "mudar-para-portugal",
      storageBucket: "mudar-para-portugal.appspot.com",
      messagingSenderId: "442612081698",
      appId: "1:442612081698:web:63cb0dbf6ebca3328c167b",
      measurementId: "G-1SHVGRQSZR"
    };
  
    useEffect(() => {
      // Inicialize o Firebase e obtenha a instância do Firestore quando o componente for montado
      const app = initializeApp(firebaseConfig);
      const firestore = getFirestore(app);
      setDb(firestore);
    }, []); // O array vazio assegura que este efeito é executado apenas uma vez
  
    const handleSubmitAccess = async (e) => {
      e.preventDefault();
      // Verifica se o email e a senha correspondem aos credenciais do administrador
      if (adminEmail === 'tiagovinicyus1996@gmail.com' && adminPassword === '91692tvJ#') {
        setAccessAllowed(true); // Se correspondem, permite o acesso
      }
    };
  
    const submitArticle = async (artigo) => {
      try {
        const artigosCollectionRef = collection(db, 'artigos');
        await setDoc(doc(artigosCollectionRef), {
          title: title,
          content: content,
          classe: classe
        });
      } catch (error) {
        console.error('Erro ao adicionar artigo:', error);
      }
    };
  
    const handleSubmitArticle = (e) => {
      e.preventDefault();
      submitArticle({ title, content, classe });
      setTitle('');
      setContent('');
      setClasse('');
    };
  
    return (
      <div>
        <Header/>
        <Navigation/>
        {!accessAllowed ? (
          <form onSubmit={handleSubmitAccess} id='adminForm'>
            <h5>ACESSO EXCLUSIVO DO ADMINISTRADOR</h5>
            <input
              type="email"
              className='form-control'
              placeholder='Digite o email do admin'
              value={adminEmail}
              onChange={(e) => setAdminEmail(e.target.value)} autoComplete='email'
            />
            <input
              type="password"
              name="password"
              className='form-control'
              placeholder='Digite a senha do admin'
              value={adminPassword}
              onChange={(e) => setAdminPassword(e.target.value)}
              autoComplete='current-password'
            />
            <button className='btn btn-dark' type="submit">Verificar Acesso</button>
          </form>
        ) : (
          <form onSubmit={handleSubmitArticle} id='createCuriosity'>
            <h5>Criar uma nova curiosidade:</h5>
            <input
              type="text"
              placeholder="Título"
              value={title}
              onChange={(e) => setTitle(e.target.value)} className='form-control'
            />
            <textarea
              rows={8}
              placeholder="Conteúdo"
              value={content}
              onChange={(e) => setContent(e.target.value)} className='form-control'
            ></textarea>
            <input
              type="text"
              placeholder="Classe: food, law, language, sport"
              value={classe}
              onChange={(e) => setClasse(e.target.value)} className='form-control'
            />
            <button type="submit" className='btn btn-dark'>Enviar</button>
          </form>
        )}
      </div>
    );
  };
  
  export default CreatorPage;
  