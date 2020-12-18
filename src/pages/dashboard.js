import React, { PureComponent } from 'react';
import {
  BarChart, Bar, XAxis, YAxis,Tooltip, LabelList, 
} from 'recharts';
import './dashboard.css'
import Card from 'react-bootstrap/Card'
import SimpleCard from './card';
import { yellow } from '@material-ui/core/colors';
import Overlay from 'react-bootstrap/Overlay';
import TooltipBtsp from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
console.log(TooltipBtsp)

const data = [
  {name: '1', pv: 10, amt: 2400},
  {name: '2', pv: 100, amt: 2210},
  {name: '3', pv: 200, amt: 2290},
  {name: '4',pv: 400, amt: 2000},
  {name: '5',  pv: 500, amt: 2181},
  {name: '6', pv: 600, amt: 2500},
  {name: '7',pv: 800, amt: 2100},
  {name: '8',pv: 900, amt: 2100},
  {name: '9',pv: 1000, amt: 2100},
];
const renderShape = (key, pixel = 10) => ({ height, width, fill, x, y, ...rest }) => {
  const xpercent = Math.trunc((pixel * 100) / Math.trunc(height || 1));
  return (
    <svg x={x} y={y} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={key} x1="0%" y1="0%" x2="0%" y2={`${xpercent}%`}>
          <stop offset="50%" stopColor="blue" />
          <stop offset="50%" stopColor={fill} stopOpacity="0.5" />
          <stop offset="50%" stopColor={fill} stopOpacity="1" />
        </linearGradient>
      </defs>
      <rect fill={`url(#${key})`} width={width} height={height} />
    </svg>
  )}
const renderCustomizedLabel = (props) => {
  const {
    x, width, value,
  } = props;

  return (
    <g>
      <text x={x + width / 2} fill="#fff" textAnchor="middle" dominantBaseline="middle">
        {value.split(' ')[1]}
      </text>
    </g>
  );
};

export default class Example extends PureComponent {
 
  render() {
    return (
      <div>
        
          <div className = "recharts-wrapper">
        <BarChart
       barCategoryGap = "25%"
       width={700}
       height={400}
       data={data}
       margin={{
         top: 5, right: 30, left: 20, bottom: 5,
       }}
     >
      
       <XAxis dataKey="name" axisLine={false} />
       <YAxis axisLine={false} />
      <Tooltip />
       <Bar
       fill="blue"
       stackId="1"
       shape={renderShape('pv')}
      dataKey="pv"  minPointSize={5}>
         <LabelList dataKey="name" content={renderCustomizedLabel} />
       </Bar> 
     </BarChart>
     </div>
     <SimpleCard/>
    </div>
    );
  }

}
