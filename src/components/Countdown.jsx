import { useEffect, useMemo, useState } from 'react';

export default function Countdown({ targetDate }) {
  const targetTime = useMemo(() => new Date(targetDate).getTime(), [targetDate]);
  const [timeLeft, setTimeLeft] = useState(() => {
    const diff = Math.max(targetTime - Date.now(), 0);
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const diff = Math.max(targetTime - Date.now(), 0);
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetTime]);

  const completed = targetTime <= Date.now();

  return (
    <div className="countdown-block" aria-label="Presale countdown timer">
      <div className="countdown-label">{completed ? 'Presale completed' : 'Presale ends in'}</div>
      <div className="countdown" role="timer">
        {completed ? (
          <div className="completed-state">Presale is now closed.</div>
        ) : (
          <>
            <div className="time-box">
              <span>{String(timeLeft.days).padStart(2, '0')}</span>
              <small>Days</small>
            </div>
            <div className="separator">:</div>
            <div className="time-box">
              <span>{String(timeLeft.hours).padStart(2, '0')}</span>
              <small>Hours</small>
            </div>
            <div className="separator">:</div>
            <div className="time-box">
              <span>{String(timeLeft.minutes).padStart(2, '0')}</span>
              <small>Minutes</small>
            </div>
            <div className="separator">:</div>
            <div className="time-box">
              <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
              <small>Seconds</small>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
