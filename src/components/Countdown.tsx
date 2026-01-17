import React, { useState, useEffect } from 'react';
import { TimerCard } from './ui/TimerCard';

const TARGET_DATE = new Date("2026-11-01T13:00:00").getTime();

export const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });

  useEffect(() => {
    const originalTitle = document.title;

    const calculateTime = () => {
      const now = new Date().getTime();
      const distance = TARGET_DATE - now;

      if (distance < 0) {
        return; 
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (days > 0) {
        document.title = `Quanto tempo falta? (${days} dias)`;
      } else {
        document.title = `(${hours}h ${minutes}m)! Boa prova!`;
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);

    return () => {
      clearInterval(interval);
      document.title = originalTitle;
    };
  }, []);

  return (
    <section 
      className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 p-4"
      aria-label="Contagem regressiva para o ENEM"
    >
      <TimerCard label="Dias" value={timeLeft.days} />
      <TimerCard label="Horas" value={timeLeft.hours} />
      <TimerCard label="Minutos" value={timeLeft.minutes} />
      <TimerCard label="Segundos" value={timeLeft.seconds} />
    </section>
  );
};