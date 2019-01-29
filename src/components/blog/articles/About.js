import React from 'react';
import AdamG from '../../images/AdamG.png';

const About = () => (
  <div className='article-wrapper'>
    <h1>About Me</h1>
    <div className='about-img'>
      <div className='about-img-wrapper'>
        <img src={AdamG} alt='Adam' />
      </div>
    </div>
    <p>
      I am a Software Developer with a primary focus on Web Development.
      I love writing clean and powerful code.
      I am always improving and learning new tools to further my skills as a programmer.
      Feel free to contact me with questions you may have for me. I am looking forward to working with you.
     </p>
  </div>
)

export default About;
