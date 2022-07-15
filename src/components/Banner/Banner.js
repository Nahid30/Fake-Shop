import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../images/ban1.jpg';
import banner2 from '../../images/ban2.jpg';
import banner3 from '../../images/ban3.jpg';
import banner4 from '../../images/ban4.jpg';
import banner5 from '../../images/ban5.jpg';
import banner6 from '../../images/ban6.jpg';
import banner7 from '../../images/ban7.jpg';

const Banner = () => {
    return (
        <div>
            <Carousel>

                <Carousel.Item>
                    <img className='img-fluid ' src={banner1} height={600} alt="" />
                </Carousel.Item>

                <Carousel.Item>
                    <img className='img-fluid' src={banner2} height={600} alt="" />
                </Carousel.Item>

                <Carousel.Item>
                    <img className='img-fluid' src={banner3} height={600} alt="" />
                </Carousel.Item>

                <Carousel.Item>
                    <img className='img-fluid' src={banner4} height={600} alt="" />
                </Carousel.Item>

                <Carousel.Item>
                    <img className='img-fluid' src={banner5} height={600} alt="" />
                </Carousel.Item>

                <Carousel.Item>
                    <img className='img-fluid' src={banner6} height={600} alt="" />
                </Carousel.Item>

                <Carousel.Item>
                    <img className='img-fluid' src={banner7} height={600} alt="" />
                </Carousel.Item>

                

            </Carousel>
        </div>
    );
};

export default Banner;