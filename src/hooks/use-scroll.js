import { useState } from "react";
import { useEffect } from "react";

export const useScrollProgress = (container) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let element = container?.current;
    const scrollContainer = element || window;

    if (!element) {
      element = document.documentElement;
    }

    const callback = () => {
      const height = element.scrollHeight - element.clientHeight;

      setScrollProgress(Math.round((element.scrollTop / height) * 100));
    };

    scrollContainer.addEventListener("scroll", callback);
    return () => {
      scrollContainer.removeEventListener("scroll", callback);
    };
  }, [container]);

  return scrollProgress;
};
