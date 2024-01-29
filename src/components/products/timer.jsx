import { useState, useEffect } from 'react';

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  useEffect(() => {
    const futureDate = new Date('2024/02/08 00:00:00').getTime();
    //사용자에게 선택을 주면 이 부분을 바꿔야 함
    //지금 생각은 buy 페이지에서 7일, 14일, 이렇게 선택 옵션을 줄 수 있게?

    const updateTimer = () => {
      const now = new Date().getTime();
      const diff = futureDate - now;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
      });
    };

    const timerId = setInterval(updateTimer, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <div>
      <div
        id="timer"
        style={{
          fontSize: '3em',
          fontWeight: 100,
          color: 'white',
          padding: '10px',
          width: '700px',
        }}
      >
        <div
          style={{
            display: 'inline-block',
            minWidth: '30px',
            padding: '10px',
            background: 'lightgray',
            borderRadius: '10px',
            border: '2px solid lightgray',
            margin: '10px',
          }}
        >
          {timeLeft.days}
          <span
            style={{
              color: '#ffffff',
              display: 'block',
              marginTop: '10px',
              fontSize: '0.35em',
              fontWeight: 100,
            }}
          >
            Days
          </span>
        </div>
        <div
          style={{
            display: 'inline-block',
            minWidth: '30px',
            padding: '10px',
            background: 'lightgray',
            borderRadius: '10px',
            border: '2px solid lightgray',
            margin: '10px',
          }}
        >
          {timeLeft.hours}
          <span
            style={{
              color: '#ffffff',
              display: 'block',
              marginTop: '10px',
              fontSize: '0.35em',
              fontWeight: 100,
            }}
          >
            Hours
          </span>
        </div>
        <div
          style={{
            display: 'inline-block',
            minWidth: '30px',
            padding: '10px',
            background: 'lightgray',
            borderRadius: '10px',
            border: '2px solid lightgray',
            margin: '10px',
          }}
        >
          {timeLeft.minutes}
          <span
            style={{
              color: '#ffffff',
              display: 'block',
              marginTop: '10px',
              fontSize: '0.35em',
              fontWeight: 100,
            }}
          >
            Minutes
          </span>
        </div>
        <div
          style={{
            display: 'inline-block',
            minWidth: '30px',
            padding: '10px',
            background: 'lightgray',
            borderRadius: '10px',
            border: '2px solid lightgray',
            margin: '10px',
          }}
        >
          {timeLeft.seconds}
          <span
            style={{
              color: '#ffffff',
              display: 'block',
              marginTop: '10px',
              fontSize: '0.35em',
              fontWeight: 100,
            }}
          >
            Seconds
          </span>
        </div>
      </div>
    </div>
  );
};
export default Timer;
