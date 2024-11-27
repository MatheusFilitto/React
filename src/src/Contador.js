import React, { useState } from 'react';
import imagemMenino from './img/imagem.png';
import imagemMenina from './img/menina.png';

function CounterApp() {
  const [maleCount, setMaleCount] = useState(0);
  const [femaleCount, setFemaleCount] = useState(0);

  const updateTotal = () => maleCount + femaleCount;

  const handleMaleAdd = () => {
    setMaleCount(prev => prev + 1);
  };

  const handleMaleRemove = () => {
    if (maleCount > 0) setMaleCount(prev => prev - 1);
  };

  const handleFemaleAdd = () => {
    setFemaleCount(prev => prev + 1);
  };

  const handleFemaleRemove = () => {
    if (femaleCount > 0) setFemaleCount(prev => prev - 1);
  };

  const handleReset = () => {
    setMaleCount(0);
    setFemaleCount(0);
  };

  return (
    <div style={styles.app}>
      <div style={styles.totalContainer}>
        <h2>Total</h2>
        <div style={styles.totalCount}>{updateTotal()}</div>
        <button style={styles.resetButton} onClick={handleReset}>&#x21bb;</button>
      </div>

      <div style={styles.row}>
        {/* Homens */}
        <div style={styles.section}>
        <img src={imagemMenino} alt="Menino" style={styles.img} />
          <div style={styles.counter}>{maleCount}</div>
          <div style={styles.buttons}>
            <button style={styles.addButton} onClick={handleMaleAdd}>+</button>
            <button style={styles.removeButton} onClick={handleMaleRemove}>-</button>
          </div>
          <p>Homens</p>
        </div>

        {/* Mulheres */}
        <div style={styles.section}>
        <img src={imagemMenina} alt="Menina" style={styles.img} />
          <div style={styles.counter}>{femaleCount}</div>
          <div style={styles.buttons}>
            <button style={styles.addButton} onClick={handleFemaleAdd}>+</button>
            <button style={styles.removeButton} onClick={handleFemaleRemove}>-</button>
          </div>
          <p>Mulheres</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  img: {
    width: '100px',
    height: '100px',

    },
  app: {
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '350px',
    textAlign: 'center',
  },
  totalContainer: {
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
  },
  totalCount: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  resetButton: {
    width: '40px',
    height: '40px',
    fontSize: '18px',
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
    backgroundColor: '#f0f0f0',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '20px',
  },
  section: {
    textAlign: 'center',
    flex: '1',
  },

  counter: {
    marginTop: '5px',
    fontSize: '20px',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    marginTop: '10px',
  },
  addButton: {
    width: '40px',
    height: '40px',
    fontSize: '18px',
    fontWeight: 'bold',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '50%',
    backgroundColor: 'green',
    color: 'white',
  },
  removeButton: {
    width: '40px',
    height: '40px',
    fontSize: '18px',
    fontWeight: 'bold',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '50%',
    backgroundColor: 'red',
    color: 'white',
  },
};

export default CounterApp;

