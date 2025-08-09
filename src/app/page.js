import Image from "next/image";

import { AboutSection } from "./components/AboutSection";
import { Testimonial } from "./components/Testimonial";
import { SwiperSlide1 } from "./components/SwiperSlide1";
import ParallaxEffect from "@/hooks/ParallaxEffect";

export default function Home() {
  return (
    <main>
      <section id="hero-banner" className="bgDark">
        <ParallaxEffect/>
        <div className="heroBanner">
          <div className="bgLayer"></div>
          <Image src="/assets/09.webp" alt="hero-banner-image" className="parallax-image" height={1600} width={1600} loading="lazy" />
          <div className="heroBannerContent-center">
            <Image src="/assets/icons/logo.png" alt="logo" className="logo" height={100} width={100} loading="lazy" />
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
