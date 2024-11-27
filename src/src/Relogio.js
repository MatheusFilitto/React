import React, { useState, useEffect } from 'react';

function Relogio() {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(new Date().toLocaleTimeString());
    }, 1000); // Atualiza a cada segundo

    return () => clearInterval(intervalo); // Limpa o intervalo ao desmontar o componente
  }, []);

  return (
    <div>
      <h1>{hora}</h1>
    </div>
  );
}

export default Relogio;
