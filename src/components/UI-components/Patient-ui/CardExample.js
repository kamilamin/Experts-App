import React from 'react';
import {Card, CardText} from 'material-ui/Card';
import Slider from './Slider';

const cardStyles = {
  margin: 80
}

const CardExample = () => (
  <Card style={cardStyles}>
    <Slider />
    <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
  </Card>
);

export default CardExample;