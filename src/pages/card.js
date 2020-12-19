import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import './card.css'
import * as GiIcons from 'react-icons/gi';
import {Row,Col} from "react-bootstrap"
import * as RiIcons from 'react-icons/ri';
import * as BiIcons from 'react-icons/bi';
import {GiRockingChair} from 'react-icons/gi';

export default function SimpleCard() {
  
  return (
    <div className = "p-5">
      <Row className = "p-1">
      <Col xs = {4}className ="mb-2" >
      <div className="border card rounded">
       <Row noGutters = {true} className = "p-1 pb-3 text-blue border-bottom">
         Asset Balance
       </Row>
       <Col noGutters = {true} >
         <Row noGutters = {true} className = "p-1" >
            Enter Amount
         </Row>
         <Row noGutters = {true} className = "p-1" >
           <Col>
           <Row  noGutters = {true} className = "bg-skyBlue mb-2 mt-2 p-1 rounded">
             $dollar
           </Row>
           <Row  noGutters = {true} className = "pb-3">
             Last updated
           </Row>
           </Col>
           <Col className = "d-flex justify-content-end h1 ">
             <div >
           <RiIcons.RiHomeGearLine color="#111a48" />
           </div>
           </Col>
         </Row>
       </Col>
      </div>
      </Col>
     
    <Col xs = {4}><div className="border card rounded ">
       <Row noGutters = {true} className = "p-1 pb-3 text-even border-bottom">
         Growth Rate
       </Row>
       <Col noGutters = {true} >
         <Row noGutters = {true} className = "p-1" >
            Enter Growth rate
         </Row>
         <Row noGutters = {true} className = "p-1" >
           <Col>
           <Row  noGutters = {true} className = "border-even mb-2 mt-2 p-1 rounded">
             %10
           </Row>
           <Row  noGutters = {true} className = "pb-3">
           Inflation
           </Row>
           </Col>
           <Col className = "d-flex justify-content-end h1 ">
             <div >
           <BiIcons.BiLogInCircle color="skyBlue" />
           </div>
           </Col>
         </Row>
       </Col>
      </div>
    </Col>

    <Col xs = {4}>
    <div className="border card rounded ">
       <Row noGutters = {true} className = "p-1 pb-3 text-blue border-bottom">
         Major investments
       </Row>
       <Col noGutters = {true} >
         <Row noGutters = {true} className = "p-1" >
            Returns generated per month
         </Row>
         <Row noGutters = {true} className = "p-1" >
           <Col>
           <Row  noGutters = {true} className = "bg-skyBlue mb-2 mt-2 p-1 rounded">
             $dollar
           </Row>
           </Col>
           <Col className = "d-flex justify-content-end h1 ">
             <div >
           <RiIcons.RiHomeGearLine color="#111a48" />
           </div>
           </Col>
         </Row>
       </Col>
      </div>
    </Col>

    <Col xs={4} ><div className="border card rounded ">
       <Row noGutters = {true} className = "p-1 pb-3 text-even border-bottom">
         Financial Independence
       </Row>
       <Col noGutters = {true} >
         <Row noGutters = {true} className = "p-1" >
           Age
         </Row>
         <Row noGutters = {true} className = "p-1" >
           <Col>
           <Row  noGutters = {true} className = "text-even border mb-2 mt-2 p-1 rounded">
             45 years
           </Row>
           <Row  noGutters = {true} className = "pb-3">
           Optimized
           
           </Row>
           </Col>
           <Col className = "d-flex justify-content-end h1 ">
             <div >
           <GiIcons.GiRockingChair color="skyBlue" />
           </div>
           </Col>
         </Row>
       </Col>
      </div>
    </Col>
    </Row>
    </div> 
   
           
   
  );
}