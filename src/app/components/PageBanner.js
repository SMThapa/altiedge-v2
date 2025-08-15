import React from 'react';
import Image from 'next/image';
import ParallaxEffect from '@/hooks/ParallaxEffect';


export const PageBanner = ({banner}) => {
  return (
    <div className="pageBanner ">
        <ParallaxEffect/>
        <Image src={banner.bannerImg} alt="" className="parallax-image" priority/>
        <div className="grayLayer"></div>
        <div className="bannerText">
            <h2 className='fade-slide-right fade-delay-1'>&#43; <span></span> {banner.subTitle}</h2>
            <div className="bannerTitle fade-slide-right fade-delay-2">
              {banner.title}
            </div>
            <div className="underline"></div>
            <div className="bannerDesc fade-slide-right fade-delay-3">
              {banner.description}
            </div>
        </div>
    </div>
  )
}
