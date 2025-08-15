import React from 'react'

import bannerImg from '../../assets/14.webp'
import { PageBanner } from '../components/PageBanner'
const page = () => {

  const banner = {
    bannerImg: bannerImg,
    title: 'About AltiEdge',
    subTitle: 'Shaping Mountaineers, One Summit at a Time',
    description: "Learn about our mission, vision, and the mentors behind AltiEdge. Discover how we prepare climbers through personalized guidance, technical expertise, and a passion for the mountains."
  }

  return (
    <main>
      <section>
        <div className='about-page'>
          <PageBanner banner={banner}/>

          <div className='pageContents'>                      
            <div className="about-right">
              <div className='about-title'>What AltiEdge Is About?</div>
            </div>
            
            <div className="about-left">
              <div className="about-text-content">
                <h2>Our story</h2>
                <p>AltiEdge is more than a training platform — it’s a movement to prepare climbers to meet the mountains on their terms. Founded by seasoned Indian mountaineers, we provide personalized, science-driven mentorship that blends endurance, strength, mental conditioning, nutrition, acclimatization, and technical skills into one cohesive program.</p>
                <p>By tracking progress and analyzing biometric data, we build efficient, resilient climbers who are fully prepared for high-altitude challenges and committed to safe, responsible mountaineering.</p>
                <h2>Why Train?</h2>
                <p>
                  The world&apos;s most stunning peaks are also the most unforgiving. Thin air, low oxygen, and relentless exertion demand more than conventional fitness — they require targeted preparation rooted in physiology and precision.
                  AltiEdge ensures every climber can adapt, perform, and return safely, no matter how extreme the climb.
                </p>
                <h2>Why Climb?</h2>
                <p>
                  Climbing is more than reaching summits — it&apos;s about overcoming fear, pushing limits, and finding clarity in wild, unyielding places. Each ascent transforms you, forging resilience, camaraderie, and a profound connection with nature&apos;s raw beauty.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>
    </main>
  )
}

export default page