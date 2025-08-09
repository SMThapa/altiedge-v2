import React from 'react'
import Image from 'next/image'

export const AboutSection = () => {
  return (
    <section>
        <div className="aboutSection">
            <div className="aboutSectionImages">
                <div className="image1">
                    {/* <Image src="assets/11.webp" alt=""> */}
                    <Image src="/assets/07.webp" alt="about-image" loading="lazy" width={1000} height={1000}/>

                    <div className="image2">
                        <Image src="/assets/10.webp" alt="about-image" loading="lazy" height={300} width={300}/>
                    </div>
                    <div className="image3">
                        <Image src="/assets/08.webp" alt="about-image" loading="lazy" height={300} width={300}/>
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
