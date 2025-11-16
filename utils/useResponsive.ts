import { useEffect, useState } from 'react';

export function useResponsive() {
  const [width, setWidth] = useState<number | null>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
    const updateWidth = () => setWidth(window.innerWidth);
    updateWidth();

    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const breakpoints = {
    width,
    belowSm: width !== null && width < 680,
    aboveSm: width !== null && width >= 680,
    aboveMd: width !== null && width >= 768,
    aboveLg: width !== null && width >= 1024,
    aboveXl: width !== null && width >= 1280,
    above842: width !== null && width >= 842,
  };

  return { ...breakpoints, hydrated };
}
