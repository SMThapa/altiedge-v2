import React from 'react';
import Image from 'next/image';
import { PageBanner } from '../components/PageBanner';

const page = () => {
  return (
    <main>
      <section>
        <div className="readinessPage">
          <PageBanner/>
          <div className="pageContents">            
            <div className="header-content">
                <div className="title">how it works <span>&#43; Steps</span></div>                        
            </div>
            <div className="detailedSteps">                        
                <div className="step">
                    <Image src="/assets/11.webp" alt="step1_image" width={800} height={800}/>
                    <div className="step-contents">
                        <div className="stepNo">01</div>
                        <div className="stepTitle">Complete the Multi-Step Assessment</div>
                        <div className="stepDesc">Answer a series of structured questions covering your physical fitness, high-altitude experience, mental preparedness, and technical climbing skills. The form takes just a few minutes and is designed for beginners and experienced climbers alike.</div>
                    </div>
                </div>                    
                <div className="step">
                    <Image src="/assets/11.webp" alt="step2_image"  width={800} height={800}/>
                    <div className="step-contents">
                        <div className="stepNo">02</div>
                        <div className="stepTitle">Understand Your Readiness Level</div>
                        <div className="stepDesc">Your responses will help you assess how prepared you are for the physical and environmental challenges of high-altitude expeditions. It reveals both your strengths and areas that may need improvement before you climb.</div>
                    </div>
                </div>              
                <div className="step">
                    <Image src="/assets/11.webp" alt="step2_image"  width={800} height={800}/>
                    <div className="step-contents">
                        <div className="stepNo">03</div>
                        <div className="stepTitle">Use Your Results to Plan Ahead</div>
                        <div className="stepDesc">Based on your inputs, you can make informed decisions on training, gear, acclimatization, or whether you need expert guidance. The test acts as a starting point for building a safer and smarter climbing plan.</div>
                    </div>
                </div>             
            </div>                                  
          </div>
        </div>
      </section>
    </main>
  )
}

export default page