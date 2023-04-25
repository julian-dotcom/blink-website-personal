import { useRef, useState, useEffect } from "react";

// allows you to dynamically determine the ref's height, allows effective positioning
export const useHeight = () => {
  const heightRef = useRef();
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (heightRef.current) {
        setHeight(heightRef.current.clientHeight);
      }
    };
    updateHeight();

    // Manually trigger the effect when the window is resized
    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(heightRef.current);

    return () => resizeObserver.disconnect();
  }, []);

  return [heightRef, height];
};
