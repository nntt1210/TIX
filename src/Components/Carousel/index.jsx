import React, { useState } from 'react';
import Slider from 'react-slick';
import CarouselItem from './CarouselItem';
import useStyles from './style';

export default function Carousel() {
  const [listImg] = useState([
    {
      src: './img/dong-gia-1k-ve-khi-mua-ve-qua-tix-16011908558560.jpg',
      trailer: 'https://www.youtube.com/embed/XRm1P7oGpMQ',
    },
    {
      src: './img/rom-c18-16008300686919.png',
      trailer: 'https://www.youtube.com/embed/XRm1P7oGpMQ',
    },
    {
      src: './img/greenland-tham-hoa-thien-thach-16000538668854.png',
      trailer: 'https://www.youtube.com/embed/HU70ECwum2s',
    },
    {
      src: './img/ac-quy-doi-dau-deliver-us-from-evil-c16-15994546580686.jpg',
      trailer: 'https://www.youtube.com/embed/jU06ylSH-BY',
    },
    {
      src: './img/tenet-15984144207145.png',
      trailer: 'https://www.youtube.com/embed/LdOM0x0XDMo',
    },
  ]);

  const renderSlide = () => {
    return listImg.map((item, index) => {
      return (
        <CarouselItem key={index} trailer={item.trailer} hinhAnh={item.src} />
      );
    });
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const styles = useStyles();

  return (
    <section className={styles.root}>
      <Slider {...settings}>{renderSlide()}</Slider>
    </section>
  );
}
