import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [
    'carousel1.jpg',
    'carousel2.jpg',
    'carousel3.jpg',
    'carousel4.jpg', 
  ];

  return (
    <Slider {...settings}>
      {images.map((images, index) => (
        <div key={index}>
          <img src={`/${images}`} alt={`Slide ${index + 1}`} />

        </div>
      ))}
    </Slider>
  );
};

export default Carousel;

