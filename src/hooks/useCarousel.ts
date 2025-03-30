import { useCallback, useState } from 'react';

export const useCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = useCallback(() => setActiveIndex((prev) => prev + 1), []);
  const prev = useCallback(() => setActiveIndex((prev) => prev - 1), []);

  return { activeIndex, next, prev, setActiveIndex };
};
