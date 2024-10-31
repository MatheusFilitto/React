import React, { useState, useEffect } from 'react';

function Letreiro() {
  const texto = "bem vindo a fatec";
  const [letreiro, setLetreiro] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      if (index < texto.length) {
        setLetreiro(prev => prev + texto.charAt(index));
        setIndex(prevIndex => prevIndex + 1);
      } else {
        // Reseta o letreiro e o índice para recomeçar
        setLetreiro('');
        setIndex(0);
      }
    }, 300); // Tempo em milissegundos entre as letras

    return () => clearInterval(intervalo); // Limpa o intervalo ao desmontar o componente
  }, [index]); // Executa o efeito sempre que 'index' muda

  return (
    <div>
      <h1>{letreiro}</h1>
    </div>
  );
}

export default Letreiro;
