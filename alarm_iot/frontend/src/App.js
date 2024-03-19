import React from 'react';
import RadarPanel from './components/RadarPanel';
import FirePanel from './components/FirePanel';
import Button from './components/Button'
import Sirene from './components/Sirene'


const App = () => {
  return (
    <>
      <h1 style={{ gridColumn: '1 / span 2', textAlign: 'center' }}>🔥 ALARME CONTRA INCÊNDIO</h1>
      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
        <Sirene />
        <Button />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 2fr', maxHeight: '100vh', maxWidth: '100vw' }}>
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', border: '1px solid gray' }}>
          <h2>Nível do Gás</h2>
          <h1>Value</h1>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', border: '1px solid gray' }}>
          <h2>Presença</h2>
          <h1>ON</h1>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid gray' }}><FirePanel /></div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid gray' }}><RadarPanel /></div>
      </div>
    </>
  );
}

export default App;