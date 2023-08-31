import '../css/Bouncing.css';
import { useState } from 'react';

export default function Bouncing() {
    const [isBouncing, setIsBouncing] = useState(false);
  const [bounceDirection, setBounceDirection] = useState('Down');
  const [textIntervalId, setTextIntervalId] = useState(null);
  const handleBounceToggle = () => {
    setIsBouncing(prevState => !prevState);
    if (!isBouncing) {
      const intervalId = setInterval(() => {
        setBounceDirection(prevDirection => prevDirection === 'Up' ? 'Down' : 'Up');
      }, 1320); 
      setTextIntervalId(intervalId);
    } else {
      clearInterval(textIntervalId);
      setTextIntervalId(null);
    }
  };

  return (
    <div className="bounce">
      <div className={`ball ${isBouncing ? 'bouncing' : ''}`} onAnimationEnd={() => setBounceDirection('Up')}></div>
      <div className={`bounce-text ${bounceDirection === 'Down' ? 'bounce-down' : ''}`}>
        Bounce {bounceDirection}
      </div>
      <button onClick={handleBounceToggle} className='button'>
        {isBouncing ? 'Stop Bouncing' : 'Start Bouncing'}
      </button>
    </div>
  );
}