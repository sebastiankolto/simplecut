import { useEffect, useState } from 'react';

export function useResponsive() {
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    const watchWidth = () => setWidth(window.innerWidth);
    setWidth(window.innerWidth);

    window.addEventListener('resize', watchWidth);
    return () => window.removeEventListener('resize', watchWidth);
  }, []);

  return {
    width,
    belowSm: width !== null && width < 680,
    aboveSm: width !== null && width >= 680,
    aboveMd: width !== null && width >= 768,
    aboveLg: width !== null && width >= 1024,
    aboveXl: width !== null && width >= 1280,
    above842: width !== null && width >= 842,
  };
}
