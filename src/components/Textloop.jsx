import React from 'react';
import Typed from 'react-typed'; // Correct import statement

const Textloop = () => {
  return (
    <div>
      <Typed
        strings={[
          'Full Stack Web Developer 🖥',
          'MERN Stack Developer 💻',
          'Frontend Developer 💻'
        ]}
        typeSpeed={40}
        backSpeed={50}
        loop
      />
    </div>
  );
};

export default Textloop;
