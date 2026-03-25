import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

export function CountUp({ end, duration = 2000, suffix = '', prefix = '' }: CountUpProps) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      let startTime: number | null = null;
      const startValue = 0;

      const animate = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);

        const currentCount = Math.floor(progress * (end - startValue) + startValue);
        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [inView, end, duration]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
}
