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


const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    display:"inline-block"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },

});

export default function SimpleCard() {
  const classes = useStyles();
  // const bull = <span className={classes.bullet}>•</span>;

  return (
     
    <div>
        <Row className = "cards">
        <Col>
            <Card className={classes.root}  p-5 style={{ width: '18rem' }}>
         <CardContent>
          <div className = "main">
          <Typography 
          className={classes.title}
          
          gutterBottom
        >
          Asset balance
        </Typography>
          </div>
          <Typography className = "header " variant="h5" component="h2">
          Enter Amount
        </Typography>
        <Row>
        
        <Typography className={classes.pos} >
          <Col>
          <div className="amount_sect "> $ dollar</div>
          </Col>
          <Col>
          <div className = "amount_sect_logo">
          <GiIcons.GiHomeGarage /></div>
          </Col>
          </Typography>
        </Row>
        <Typography component="h2">
          Last Updated
        </Typography>
        </CardContent>
        </Card>
        </Col>
        <Col>
            <Card className={classes.root}  p-5 style={{ width: '18rem' }}>
         <CardContent>
          <div className = "main">
          <Typography 
          className={classes.title}
          
          gutterBottom
        >
          Asset balance
        </Typography>
          </div>
          <Typography className = "header " variant="h5" component="h2">
          Enter Amount
        </Typography>
        <Row>
        
        <Typography className={classes.pos} >
          <Col>
          <div className="amount_sect "> $ dollar</div>
          </Col>
          <Col>
          <div className = "amount_sect_logo">
          <GiIcons.GiHomeGarage /></div>
          </Col>
          </Typography>
        </Row>
        <Typography component="h2">
          Last Updated
        </Typography>
        </CardContent>
        </Card>
        </Col>
       <Col>
            <Card className={classes.root} p-5 style={{ width: '18rem' }}>
         <CardContent>
          <div className = "main">
          <Typography 
          className={classes.title}
         
          gutterBottom
        >
         Growth Rate
        </Typography>
          </div>
        
        <Typography className = "header " variant="h5" component="h2">
          Enter Growth Rate
        </Typography>
        <Row>
        <Typography className={classes.pos} >
         
          <Col className="amount_sect "> $ dollar </Col>
          <Col className = "amount_sect_logo">
          <GiIcons.GiHomeGarage />
          </Col>
          </Typography>
        </Row>
        <Typography  color="textSecondary" component="h2">
          Last Updated
        </Typography>
        </CardContent>
        </Card
        ></Col>

        <div class="w-100"></div>
        
        <Col>
            <Card className={classes.root} p-5 style={{ width: '18rem' }}>
         <CardContent>
          <div className = "main">
          <Typography 
          className={classes.title}
          gutterBottom>
          Asset balance
        </Typography>
          </div>
        <Typography className = "header " variant="h5" component="h2">
          Enter Amount
        </Typography>
        <Row>
        <Typography className={classes.pos} >
          <Col>
          <div className="amount_sect "> $ dollar</div>
          </Col>
          <Col>
          <div className = "amount_sect_logo">
          <GiIcons.GiHomeGarage /></div>
          </Col>
          </Typography>
        </Row>
        <Typography  color="textSecondary" component="h2">
          Last Updated
        </Typography>
        </CardContent>
        </Card>
        </Col>
        </Row>
    
    
  
         </div>
           
   
  );
}