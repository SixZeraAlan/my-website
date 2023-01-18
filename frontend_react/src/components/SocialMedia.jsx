import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
    <a target='_blank' href="https://www.linkedin.com/in/han-yao/"><FaLinkedin  /></a>
    </div>
    <div>
      <a target='_blank' href="https://github.com/SixZeraAlan"><BsGithub  /></a>
    </div>
  </div>
);



export default SocialMedia;