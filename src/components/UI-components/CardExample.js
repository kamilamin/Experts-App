import React from 'react';
import {Card, CardText} from 'material-ui/Card';

// <CardHeader
//       title="URL Avatar"
//       subtitle="Subtitle"
//       avatar={AvatarJPG}
//     />
//     <CardMedia
//       overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
//     >
//       <img src={NatureJPG} alt="" />
//     </CardMedia>
//     <CardTitle title="Card title" subtitle="Card subtitle" />

const cardStyles = {
  marginTop: 60
}

const CardExample = () => (
  <Card style={cardStyles}>
    <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
  </Card>
);

export default CardExample;