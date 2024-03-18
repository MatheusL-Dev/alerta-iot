import React from 'react';
import RadarChartExample from './RadarPanel';
import PieChartWithNeedle from './FirePanel';

const App = () => {

  return (
    <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gridTemplateColumns: '1fr 1fr', height: '100vh' }}>
      <div style={{ gridColumn: 'span 2', gridRow: 'span 2', padding: '20px', textAlign: 'center' }}>
        <h1>Painel de Controle de Incêndios</h1>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
        <PieChartWithNeedle />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
        <RadarChartExample />
      </div>
    </div>
  );
};

export default App;
