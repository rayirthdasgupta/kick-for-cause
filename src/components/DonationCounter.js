import './DonationCounter.css';
import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const DonationCounter = () => {
  const target = 3000; // The total amount raised

  const { number } = useSpring({
    from: { number: 0 },
    number: target,
    delay: 200,
    config: { duration: 1000 }
  });

  return (
    <div className="donation-counter">
      <h4>Total Money Raised:</h4>
      <animated.div className="counter">
        {number.to(n => `$${n.toFixed(0).toLocaleString()}`)}
      </animated.div>
    </div>
  );
};

export default DonationCounter;
