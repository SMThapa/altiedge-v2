import React from 'react';
import Image from 'next/image';
import ParallaxEffect from '@/hooks/ParallaxEffect';

export const PageBanner = ({banner}) => {
  return (
    <div className="pageBanner">
        <ParallaxEffect/>
        <Image src="/assets/12.webp" alt="" className="parallax-image" height={800} width={1600}/>
        <div className="grayLayer"></div>
        <div className="bannerText">
            <h2>&#43; <span></span> Start Your journey</h2>
            <div className="bannerTitle">
                Are You Ready for High Altitude Climbing?
            </div>
            <div className="underline"></div>
            <div className="bannerDesc">
                Take our expert-designed readiness test to evaluate your physical fitness, altitude experience, technical skills, and mental resilience before heading to the mountains.
            </div>
        </div>
    </div>
  )
}
