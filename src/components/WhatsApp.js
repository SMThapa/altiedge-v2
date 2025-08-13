import React from 'react';
import Image from 'next/image';

import whatsApp from '../assets/icons/whatsapp.webp'

export const WhatsApp = () => {
  return (
    <div className="whatsAppIcon">
      <Image src={whatsApp} alt="what-app-icon" loading="lazy"/>
      <p>Connect with us in<br/> WhatsApp</p>
    </div>
  )
}
