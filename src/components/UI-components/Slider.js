import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import Dermo from './image/Dermo1.jpg';
import Skin1 from './image/Skin1.jpg';
import Skin2 from './image/Skin2.jpg';
import Dermo2 from './image/Dermo2.jpg';

// const slide = {
//   width:'100%',
//   height: '50%'
// };

class Slider extends Component {
    render () {
        return (
            <Carousel>
            <Carousel.Item>
              <img style={{width: 1210, height: 400}} alt="900x500" src={Dermo}/>
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img style={{width: 1200, height: 400}} alt="900x500" src={Skin1}/>
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img style={{width: 1200, height: 400}} alt="900x500" src={Skin2}/>
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img style={{width: 1200, height: 400}} alt="900x500" src={Dermo2}/>
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
          </Carousel>
        )
    }
}

export default Slider