import React from 'react'

import './FooterSocial.scss'
import { images } from "../../constants";
export const socialMedia = [
    {
      id: "lin",
      icon: images.insta,
      link: "https://www.instagram.com/faizuddin_q?igsh=MXgxNGk5ZDhzbWhnNg==",
    },
    {
      id: "git",
      icon: images.github,
      link: "https://github.com/Faizuddinq",
    },
    
    {
      id: "fb",
      icon: images.linkedin,
      link: "https://www.linkedin.com/in/faizuddin2026q",
    },
  ];
const FooterSocials = () => {
  return (
    <div className="social-media-container" id='socials'>
      {socialMedia.map((social, index) => (
        <img
          key={social.id}
          src={social.icon}
          alt={social.id}
          className={`social-media-icon ${index !== socialMedia.length - 1 ? 'mr-6' : ''}`}
          onClick={() => window.open(social.link)}
        />
      ))}
    </div>
  )
}

export default FooterSocials