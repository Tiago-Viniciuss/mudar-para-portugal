import React, { useState, useEffect } from 'react';
import '../style/Animation.css'

const Animation = () => {

  const [mostrarDiv, setMostrarDiv] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMostrarDiv(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []); // Executa o useEffect apenas uma vez, quando o componente é montado

  return (
    <div id='container'>
      {mostrarDiv && (
        <div id='element'>
          <p id='avatarText'>Qual o seu email?</p>
        </div>
      )}
    </div>
  );
};

export default Animation;
