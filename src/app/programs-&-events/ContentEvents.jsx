import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import img from '../../assets/15small.webp';

export const ContentEvents = () => {

  const events = [
    {
      "title": "PT01",
      "price": "INR 8,000",
      "description": "One month online program on physical training. Includes two sessions on physiology of training, one session on customizing training regime, and one session on biometrics and feedback."
    },
    {
      "title": "Tech 01",
      "price": "On Request",
      "description": "One day outdoor technical training covering essentials like gear use, rope knots, jumaring, rappelling, ladder crossing, and tent pitching."
    },
    {
      "title": "Tech 02",
      "price": "On Request",
      "description": "Seven day outdoor technical training in Himachal or Ladakh covering ice, rock, snow crafts, and winter conditioning."
    },
    {
      "title": "Web 01",
      "price": "INR 1,500",
      "description": "Online interactive session with mountaineers, nutritionists, high altitude medical practitioners, and other experts."
    },
    {
      "title": "MT 01",
      "price": "INR 12,000",
      "description": "One month comprehensive mentorship including physical training, mental conditioning, acclimatization, altitude illness prevention, and expedition planning. Free access to Web01."
    },
    {
      "title": "MT 03",
      "price": "INR 32,000",
      "description": "Three months comprehensive mentorship with the same benefits as MT01. Free access to Web01 and Tech01."
    },
    {
      "title": "MT 06",
      "price": "INR 58,000",
      "description": "Six months comprehensive mentorship with the same benefits as MT01. Free access to Web01 (Webinars) and Tech01."
    },
    {
      "title": "8k",
      "price": "On Request",
      "description": "Six to twelve months mentorship for Mt Everest or similar 8K peaks. Lifetime access to Web01 and free access to Tech01."
    },
    {
      "title": "Custom",
      "price": "On Request",
      "description": "Fully tailored mentorship program based on your mountaineering goals. Categories: Custom01 – EBC, Elbrus, Kilimanjaro, Island Peak; Custom02 – Lenin, Ama Dablam, Nun, Kun, Trishul; Custom03 – Denali, Aconcagua."
    }
  ]


  return (
    <div className="event-contents">


      <div className="header-content">
        <div className="title"> Our Programs</div>        
      </div>

      {
        events.map((item, index)=>(
          <div key={index}>
            <div className="event-card">     
              <div className="content-left">  
                <div className="event-title">{item.title}</div>
                  <div className="event-price"><span>Price:</span> {item.price}</div>
                  <div className="event-description">{item.description}</div>
                </div>   
              <div className="content-right">


                <div className="action-group">
                  <div className="btn-primary-dark">Enroll</div>
                  <div className="btn-primary-dark">know more</div>
                </div>
              </div>
            </div>
            <div className="underline"></div>
          </div>
        ))
      }
    </div>
  )
}
