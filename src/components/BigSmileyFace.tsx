import { useState, useEffect } from 'react';
import Button from './Button';

function BigSmileyFace() {
  const [showOverlay, setShowOverlay] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);

  const handleClick = () => {
    setShowOverlay(false);
  };

  useEffect(() => {
    const fadeInTimeout = setTimeout(() => {
      setFadeIn(true);
    }, 50);

    return () => clearTimeout(fadeInTimeout);
  }, []);

  if (!showOverlay) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-10 flex flex-col items-center justify-center space-y-5 bg-opacity-80 bg-sky-100 ${
        fadeIn ? 'animate-fade-in' : ''
      }`}
      style={{ animationDuration: '0.5s' }}
    >
      <h3 className="m-2 text-2xl font-bold text-center text-emerald-600">
        Good Job!
      </h3>
      <span
        className="text-9xl animate-bounce"
        style={{ animationDuration: '1s', animationIterationCount: 'infinite' }}
      >
        &#128516;
      </span>
      <Button onClick={handleClick} variation={'primary'}>
        &#10005;
      </Button>
    </div>
  );
}

export default BigSmileyFace;
