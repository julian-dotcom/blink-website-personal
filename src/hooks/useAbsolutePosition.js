import { useRef, useState, useEffect } from "react";

export const useAbsolutePosition = (compact) => {
  const divRef = useRef();
  const [absolutePosition, setAbsolutePosition] = useState({ left: 0, top: 0 });

  useEffect(() => {
    const calculateAbsolutePosition = () => {
      if (divRef.current) {
        const rect = divRef.current.getBoundingClientRect();
        setAbsolutePosition({ left: rect.left, top: rect.top });
      }
    };

    window.addEventListener("resize", calculateAbsolutePosition);
    calculateAbsolutePosition();
    return () => {
      window.removeEventListener("resize", calculateAbsolutePosition);
    };
  }, [compact]);
  return [divRef, absolutePosition];
};
