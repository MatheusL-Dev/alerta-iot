import React, { useState, useEffect } from 'react';
import RadarPanel from './components/RadarPanel';
import FirePanel from './components/FirePanel';
import Button from './components/Button'
import Sirene from './components/Sirene'


const App = () => {
  const [isOn, setIsOn] = useState(false);
  const [nivelGas, setNivelGas] = useState(0);
  const [sensorPessoas, setSensorPessoas] = useState([]);

  const handleClick = () => {
    setIsOn(!isOn);
  };

  useEffect(() => {

    const fetchData = async () => {

      const response = await fetch('http://127.0.0.1:8000/sensores/');
      const data = await response.json();

      setNivelGas(data.nivel_gas);
      setSensorPessoas(data.salas);

    };

    const intervalData = setInterval(() => {
      isOn && fetchData();
    }, 1000); //1 Segundos

    isOn && fetchData();

    return () => {
      clearInterval(intervalData);
    };

  }, [isOn]);

  return (
    <>
      <h1 style={{ gridColumn: '1 / span 2', textAlign: 'center' }}>🔥 ALARME CONTRA INCÊNDIO</h1>
      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
        <Sirene isOn={isOn} value={nivelGas} />
        <Button handleClick={handleClick} isOn={isOn} />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 2fr', maxHeight: '100vh', maxWidth: '100vw' }}>
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', border: '1px solid gray' }}>
          <h2>Nível do Gás</h2>
          <h1>{isOn ? nivelGas : '0'}</h1>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', border: '1px solid gray' }}>
          <h2>Presença</h2>
          <h1>{isOn && sensorPessoas.find((a) => a.quantidade > 0) ? 'ON' : 'OFF'}</h1>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid gray' }}><FirePanel isOn={isOn} value={nivelGas} /></div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid gray' }}><RadarPanel isOn={isOn} value={sensorPessoas} /></div>
      </div>
    </>
  );
}

export default App;