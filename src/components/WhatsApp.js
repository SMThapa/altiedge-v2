import React from 'react';
import Image from 'next/image';

export const WhatsApp = () => {
  return (
    <div className="whatsAppIcon">
        <Image src="/assets/icons/whatsapp.png" alt="what-app-icon" height={50} width={50} loading="lazy"/>
        <p>Connect with us in<br/> WhatsApp</p>
    </div>
  )
}
