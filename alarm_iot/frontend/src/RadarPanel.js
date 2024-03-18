import React, { useState, useEffect } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

const RadarChartExample = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://127.0.0.1:8000/people/');
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="sala" />
      <PolarRadiusAxis angle={30} domain={[0, 'dataMax']} />
      <Radar name="Quantidade de Pessoas" dataKey="quantidade" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
    </RadarChart>
  );
};

export default RadarChartExample;
