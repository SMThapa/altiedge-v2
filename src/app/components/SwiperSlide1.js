'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import Image from 'next/image';


const slides = [
  {
    title: 'Majestic Heights',
    subtitle: 'Mount Everest',
    img1: '/assets/01.webp',
    img2: '/assets/06.webp',
    desc:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
  },
  {
    title: 'Snowy Summit',
    subtitle: 'Mount Kilimanjaro',
    img1: '/assets/02.webp',
    img2: '/assets/05.webp',
    desc:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
  },
  {
    title: 'Icy Peaks',
    subtitle: 'Mount Elbrus',
    img1: '/assets/03.webp',
    img2: '/assets/04.webp',
    desc:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
  },
  {
    title: 'Rugged Giant',
    subtitle: 'Denali',
    img1: '/assets/04.webp',
    img2: '/assets/03.webp',
    desc:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
  },
  {
    title: 'Andean Majesty',
    subtitle: 'Aconcagua',
    img1: '/assets/05.webp',
    img2: '/assets/02.webp',
    desc:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
  },
  {
    title: 'Frozen Frontier',
    subtitle: 'Mount Vinson',
    img1: '/assets/06.webp',
    img2: '/assets/01.webp',
    desc:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
  },
];

export const SwiperSlide1 = () => {
  return (
    <section>
      <div className="usp">
        <div className="header-content">
          <div className="title">
            Featured tours <span>+ USP</span>
          </div>
          <div className="description">
            - Take the first step towards your next life-affirming adventure.
          </div>
        </div>

        <Swiper
          modules={[Navigation, Scrollbar]}
          slidesPerView={3.3}
          spaceBetween={30}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          scrollbar={{
            el: '.swiper-scrollbar',
            draggable: true,
            snapOnRelease: false,
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <Image
                src={slide.img1}
                alt="usp-image"
                className="img-1"
                loading="lazy"
                width={400}
                height={250}
              />
              <Image
                src={slide.img2}
                alt="usp-image"
                className="img-2"
                loading="lazy"
                width={400}
                height={250}
              />
              <div className="slide-heading">
                {slide.title.split(' ')[0]} <br />
                {slide.title.split(' ')[1]}
                <p>+ {slide.subtitle}</p>
              </div>
              <div className="slide-desc">
                <p>
                  {slide.desc}
                </p>
                <div className="btn-primary">Know More</div>
              </div>
            </SwiperSlide>
          ))}

          <div className="swiper-controller-wrapper">
            <div className="swiper-navigation">
              <div className="swiper-button-prev" />
              <div className="swiper-button-next" />
            </div>
            <div className="swiper-scrollbar" />
          </div>
        </Swiper>
      </div>
    </section>
  )
}
