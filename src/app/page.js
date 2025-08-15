import Image from "next/image";

import { AboutSection } from "./components/AboutSection";
import { Testimonial } from "./components/Testimonial";
import { SwiperSlide1 } from "./components/SwiperSlide1";
import ParallaxEffect from "@/hooks/ParallaxEffect";

import herobanner from '../assets/09.webp';
import logo from '../assets/icons/logo.webp'

export default function Home() {
  return (
    <main>
      <section id="hero-banner" className="bgDark">
        <ParallaxEffect/>
        <div className="heroBanner">
          <div className="bgLayer"></div>
          <Image src={herobanner} alt="hero-banner-image" className="parallax-image" priority />
          <div className="heroBannerContent-center">
            <Image src={logo} alt="logo" className="logo"  property/>
            <p className="sectionTitle colorLight">AltiEdge</p>
          </div>
          <div className="heroBannerContent">
            {/* <p className="sectionTitle colorLight">AltiEdge</p>  */}
            <div className="underline"></div>
            <p className="sectionDescription colorLight">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            </p>
          </div>
        </div>
      </section>
      <AboutSection/>
      <SwiperSlide1/>
      <Testimonial/>
      
    </main>
  );
}
