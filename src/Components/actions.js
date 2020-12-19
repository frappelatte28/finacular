import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import image from '../images/actions_image1.jpg'

function Actions(){
    return (
        < div className = "d-flex flex-column p-2 h-100">
        <Card className = "mt-2" >
        <Card.Img variant="top" src ={image} />
        <Card.Body>
           
            <Card.Text>
               Understand the power of Compounding
            </Card.Text>
            <Button style = {{backgroundColor:" #18287b"}}>Learn Now</Button>
        </Card.Body>
        </Card>
        <Card className = "mt-2" >
        <Card.Img variant="top"src ={image}  />
        <Card.Body>
            <Card.Text>
                Track all your expenses on a daily basis
            </Card.Text>
            <Button style = {{backgroundColor:" #18287b"}}>Track Now</Button>
        </Card.Body>
        </Card>
        </div>
        
    )    
}

export default Actions;