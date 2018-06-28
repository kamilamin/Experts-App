import React, { Component } from 'react';
// import { Carousel } from 'react-bootstrap';
import Carousel from 'react-image-carousel';
// import { Divider } from 'material-ui';
// import Dermo from './image/Dermo1.jpg';
// import Skin1 from './image/Skin1.jpg';
// import Skin2 from './image/Skin2.jpg';


let images = [
  './image/Dermo1.jpg',
  './image/Dermo2.jpg',
  './image/Skin1.jpg',
]
const style = {
  width: '800px',
	height: '560px',
	maxWidth: '100%',
	maxHeight: '100vh',
  margin: '0 auto'
}

class Slider extends Component {
    render () {
        return (
            <div style={style}>
              <Carousel
                images={images}
                thumb={true}
                loop={true}
                autoplay={3000}
              />
            </div>
        )
    }
}

export default Slider