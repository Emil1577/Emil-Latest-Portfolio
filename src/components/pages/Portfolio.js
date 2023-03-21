import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import CardGroup from 'react-bootstrap/CardGroup';
import myPetLogo from '../../assets/header-logo.png';
import planetX from '../../assets/headerImg.jpg';

import goldenState from '../../assets/Paintedladies.jpeg';
import hobbiest from '../../assets/lolo.png';


export default function Portfolio() {
  return (

    <CardGroup >

    <Card style={{ width: '25rem', padding: '20px' }}>
      <Card.Img variant="top" src={myPetLogo} />
      <Card.Body>

        <Card.Text>
          Project 1 = Me Myself and I
        </Card.Text>
        <a href="https://silkyjazz.github.io/Me-MyPet-AndI/" class="btn btn-primary">Click Here</a>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem', padding: '20px' }}>
<Card.Img variant="top" src={planetX} />
<Card.Body>
<Card.Title>Planet X</Card.Title>
  <Card.Text>
    <a href="https://planetxapp-jbe.herokuapp.com/" class="btn btn-primary">Click Here</a>
  </Card.Text>
  
</Card.Body>
</Card>

<Card style={{ width: '18rem', padding: '20px' }}>
<Card.Img variant="top" src={hobbiest} />
      <Card.Body>
        <Card.Title>Hobbiest Place On Earth</Card.Title>
        <Card.Text>
          <a href="https://hobbyist-place-on-earth.herokuapp.com/" class="btn btn-primary">Click Here</a>

        </Card.Text>
        
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem', padding: '20px' }}>
    <Card.Img variant="top" src={goldenState} />
<Card.Body>
  <Card.Title>Weather Weather</Card.Title>
  <Card.Text>
  <a href="https://emil1577.github.io/Weather-Weather/" class="btn btn-primary">Click Here</a>
  </Card.Text>
  <Button variant="primary">In Progress</Button>
</Card.Body>
</Card>

</CardGroup>

  );
}
