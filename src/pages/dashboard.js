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
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Actions from '../Components/actions';
import {Row,Col} from 'react-bootstrap';

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
const AxisLabel = ({ axisType, x, y, width, height, stroke, children }) => {
  const isVert = axisType === 'yAxis';
  const cx = isVert ? x : x + (width / 2);
  const cy = isVert ? (height / 2) + y : y + height + 10;
  const rot = isVert ? `270 ${cx} ${cy}` : 0;
  return (
    <foreignObject>
      <div>
        hello
      </div>
    </foreignObject>
  );
};

export default function Dashboard(props){

   console.log("dashboard" ,props.isOpen) 
    return (
      <div>
    
        <Row noGutters = {true}>
        {props.isOpen ?  <Col xs={2}></Col> : " "}
       
       <Col className = "p-3">
       <div className = " border pb-5">
       <Row className="justify-content-center fs-large p-1">
        Annual Projection
      </Row>
        <BarChart
       barCategoryGap = "25%"
       width={600}
       height={400}
       data={data}
      

     >
      
       <XAxis label ="year" padding = {{top:200}} height = {60} dataKey="name" axisLine={false} />
       <YAxis label={<AxisLabel axisType='yAxis'>Cost / Customer</AxisLabel>}  axisLine={false} />
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
     <div>
       <SimpleCard/>
      </div>
       </Col>
       <Col xs = {2}>
        <Actions className = "mt-2"></Actions>
        </Col>
    </Row>
      </div>
     
      
    );
  
function customizeLabel(){
    return (
      <foreignObject>
      <div style = {{transform:"rotate(-90deg)",transformOrigin: "center"}}>Asset Balance</div>

      </foreignObject>
    )
    
}
}
