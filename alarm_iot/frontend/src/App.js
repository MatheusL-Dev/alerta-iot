import React from 'react';
import RadarPanel from './components/RadarPanel';
import FirePanel from './components/FirePanel';
import Button from './components/Button'
import Sirene from './components/Sirene'

const App = () => {

  return (
    <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gridTemplateColumns: '1fr 1fr', height: '100vh' }}>
      <div style={{ gridColumn: 'span 2', gridRow: 'span 2', padding: '20px', textAlign: 'center' }}>
        <h1>Painel de Controle de Incêndios</h1>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
        <Button />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
        <Sirene />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
        <FirePanel />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
        <RadarPanel />
      </div>
    </div>
  );
};

export default App;
