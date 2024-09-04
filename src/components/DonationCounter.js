import './DonationCounter.css';
import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const DonationCounter = () => {
  const target = 250; // The total amount raised

  const { number } = useSpring({
    from: { number: 0 },
    number: target,
    delay: 200,
    config: { duration: 3000 }
  });

  return (
    <div className="donation-counter">
      <h4>Total Raised For UNICEF:</h4>
      <animated.div className="counter">
        {number.to(n => `$${n.toFixed(0).toLocaleString()}`)}
      </animated.div>
    </div>
  );
};

export default DonationCounter;
