import { useEffect, useState } from "react";

export const useIntersection = (element, rootMargin) => {
  const [isVisible, setState] = useState(false);
  console.log(element);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setState(entry.isIntersecting);
      },
      { rootMargin }
    );

    element.current && observer.observe(element.current);

    return () => observer.unobserve(element.current);
  }, []);

  return isVisible;
};
