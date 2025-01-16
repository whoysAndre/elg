'use client';
import React, { useState } from 'react';
import { Swiper as SwiperObject } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './slideshow.css';
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { ProductImage } from '../maintenance/ProductImage';

interface Props {
  images: string[];
  title: string;
  className?: string;
}

export const ProductSlideShow = ({ images, title, className }: Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObject>();
  const [magnifyStyle, setMagnifyStyle] = useState({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setMagnifyStyle({
      transformOrigin: `${x}% ${y}%`,
      transform: 'scale(2)',
    });
  };

  const handleMouseLeave = () => {
    setMagnifyStyle({
      transform: 'scale(1)',
    });
  };

  return (
    <div className={className}>
      <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className="mySwiper2"
      >
        {images.map((image) => (
          <SwiperSlide key={image} className="h-[200px]">
            <div
              className="image-container"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <ProductImage
                width={1024}
                height={800}
                src={`${image}`}
                alt={title}
                style={magnifyStyle}
                className="rounded-lg object-fill"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper mt-2"
      >
        {images.map((image) => (
          <SwiperSlide key={image}>
            <ProductImage
              src={`${image}`}
              width={1024}
              height={800}
              alt={title}
              className="rounded-lg object-fill"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
