import React, { useState, useEffect } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';


const RadarChartExample = (props) => {
  const { isOn, value } = props;
  const [data, setData] = useState({});

  useEffect(() => {
    if (isOn) {
      setData(value);
    } else {
      setData([
        { "sala": "Área Comercial", "quantidade": 0 },
        { "sala": "Área Gerencial", "quantidade": 0 },
        { "sala": "Área Administrativa", "quantidade": 0 },
        { "sala": "T.I.", "quantidade": 0 },
      ]);
    }
  }, [isOn, value]);

  return (
    <RadarChart cx={250} cy={250} outerRadius={150} width={500} height={500} data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="sala" />
      <PolarRadiusAxis angle={30} domain={[0, 'dataMax']} />
      <Radar name="Quantidade de Pessoas" dataKey="quantidade" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
    </RadarChart>
  );
};

export default RadarChartExample;
