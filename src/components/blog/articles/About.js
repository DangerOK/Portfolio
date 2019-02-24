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
      I love writing clean and dynamic code.
      I am pragmatic, a clear communicator, a self-starter, a strong team player, and am always looking for a new challenge to rise to.
      I am proficient in React.js, JavaScript, CSS, HTML, familiar with Node.js, and AWS concepts, and am constantly learning new tools and skills to better myself as a developer.
      Feel free to contact me with any questions you have, and I will get back to you .
    </p>
  </div>
)

export default About;
