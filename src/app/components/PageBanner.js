import React from 'react';
import Image from 'next/image';
import ParallaxEffect from '@/hooks/ParallaxEffect';


export const PageBanner = ({banner}) => {
  return (
    <div className="pageBanner">
        <ParallaxEffect/>
        <Image src={banner.bannerImg} alt="" className="parallax-image" />
        <div className="grayLayer"></div>
        <div className="bannerText">
            <h2>&#43; <span></span> {banner.subTitle}</h2>
            <div className="bannerTitle">
              {banner.title}
            </div>
            <div className="underline"></div>
            <div className="bannerDesc">
              {banner.description}
            </div>
        </div>
    </div>
  )
}
