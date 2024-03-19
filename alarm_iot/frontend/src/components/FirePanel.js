import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const RADIAN = Math.PI / 180;
const data = [
  { name: 'A', value: 80, color: '#00ff00' },
  { name: 'B', value: 45, color: '#ffff00' },
  { name: 'C', value: 25, color: '#ff0000' },
];

const cx = 250;
const cy = 320;
const iR = 50;
const oR = 150;

const needle = (value, cx, cy, iR, oR, color) => {
  const angle = 180 - (value / 100) * 180;
  const length = (iR + 2 * oR) / 3;
  const sin = Math.sin(-RADIAN * angle);
  const cos = Math.cos(-RADIAN * angle);
  const x0 = cx;
  const y0 = cy;
  const xp = x0 + length * cos;
  const yp = y0 + length * sin;

  return [
    <path key="needle" d={`M${x0} ${y0} L${xp} ${yp}`} stroke={color} strokeWidth="2" fill="none" />,
  ];
};

const PieChartWithNeedle = () => {
  const [value, setValue] = useState(50);
  const labels = ['Baixo', 'Médio', 'Alto'];

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://127.0.0.1:8000/gas/');
      const data = await response.json();
      setValue(data);
    };
    fetchData();
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <PieChart width={500} height={500}>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data}
            cx={cx}
            cy={cy}
            innerRadius={iR}
            outerRadius={oR}
            fill="#8884d8"
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          {needle(value, cx, cy, iR, oR, '#d0d000')}
        </PieChart>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1px' }}>
        {data.map((entry, index) => (
          <div key={`label-${index}`} style={{ display: 'flex', alignItems: 'center', margin: '5px' }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: entry.color, marginRight: '5px' }}></div>
            <span>{labels[index]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartWithNeedle;
