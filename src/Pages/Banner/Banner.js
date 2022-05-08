import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
import banner1 from '../../Images/Banner/new-1.jpg';
import banner2 from '../../Images/Banner/new-2.jpg';
import banner3 from '../../Images/Banner/new-1.jpg';


const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
            <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src= {banner1}
            alt="Explore Beautiful Bangladesh"
          />
          <Carousel.Caption className='d-flex flex-column h-100 align-items-center justify-content-center'>
            {/* <h1 style={{color:''}}>Explore Beautiful Bangladesh</h1> */}
            {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner2}
            alt="Second slide"
          />
  
          <Carousel.Caption className='d-flex flex-column h-100 align-items-center justify-content-center'>
            
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner3}
            alt="Third slide"
          />
  
          <Carousel.Caption className='d-flex flex-column h-100 align-items-center justify-content-center'>
            
            {/* <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
        
    );
};

export default Banner;