import React from "react";
import { Carousel } from "react-responsive-carousel";
import first from './Images/1.jpeg';
import second from './Images/2.jpeg';
import third from './Images/3.jpeg';
import fourth from './Images/4.jpeg'

export default () => (
<div style={{marginLeft: '5%', marginRight: '5%', height: '5%'}}>
    <Carousel infiniteLoop autoPlay>
        <div>
            <img src={first} />
            <p className="legend">Legend 1</p>
        </div>
        <div>
            <img src={second} />
            <p className="legend">Legend 2</p>
        </div>
        <div>
            <img src={third}/>
            <p className="legend">Legend 3</p>
        </div>
        <div>
            <img src={fourth}/>
            <p className="legend">Legend 3</p>
        </div>
    </Carousel>
  </div>
);