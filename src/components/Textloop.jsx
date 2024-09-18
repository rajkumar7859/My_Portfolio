import React from 'react';
import Typed from 'react-typed'; 

const Textloop = () => {
  return (
    <div>
      <Typed
        strings={[
          'Full Stack Web Developer 🖥',
          'MERN Stack Developer 💻',
          'Frontend Developer 💻'
        ]}
        style={{ textShadow: '0px 5px 10px rgba(0, 139, 255, 0.7)' }}
        typeSpeed={40}
        backSpeed={50}
        loop

      />
    </div>
  );
};

export default Textloop;
