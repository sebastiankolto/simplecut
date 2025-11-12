import { useEffect, useState } from 'react';

export function useResponsive() {
  const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  const belowSm = width < 680;
  const aboveSm = width >= 680;
  const aboveMd = width >= 768;
  const aboveLg = width >= 1024;
  const aboveXl = width >= 1280;
  const above842 = width >= 842;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const watchWidth = () => {
        setWidth(window.innerWidth);
      };

      window.addEventListener('resize', watchWidth);

      return function () {
        window.removeEventListener('resize', watchWidth);
      };
    }
  }, []);

  return { width, belowSm, aboveSm, aboveMd, aboveLg, aboveXl, above842 };
}
