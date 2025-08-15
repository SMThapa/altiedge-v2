import React from 'react'
import Image from 'next/image'

import img1 from '../../assets/07.webp';
import img2 from '../../assets/10.webp';
import img3 from '../../assets/08.webp';

export const AboutSection = () => {
  return (
    <section>
        <div className="aboutSection">
            <div className="aboutSectionImages">
                <div className="image1">
                    {/* <Image src="assets/11.webp" alt=""> */}
                    <Image src={img1} alt="about-image" placeholder='blur'/>

                    <div className="image2">
                        <Image src={img2} alt="about-image" placeholder='blur'/>
                    </div>
                    <div className="image3">
                        <Image src={img3} alt="about-image" placeholder='blur'/>
                    </div>
                </div>                    
            </div>
            <div className="text-wrapper">
                <div className="aboutSectionParagraph1">
                    <div>
                        <h2>&#43; <span></span> About us</h2>
                        <p>AltiEdge was born from respect for the mountains and a mission to prepare climbers with science-backed training.</p>
                    </div>
                </div>
                <div className="aboutSectionParagraph2">
                    <div>
                        <p>
                            We set out to build a mountaineering mentorship platform driven by our passion for the mountains and grounded in training science—led by seasoned climbers and rooted in resilience, culture, and respect for the environment.
                        </p>
                        <div className="btn-primary">find out more</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
