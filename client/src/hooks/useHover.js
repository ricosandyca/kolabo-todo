import { useEffect, useRef, useState } from "react";

export default function useHover() {
  const [isHovered, setIsHovered] = useState(false);
  const hoverRef = useRef(null);

  const handleMouseOver = () => setIsHovered(true);
  const handleMouseOut = () => setIsHovered(false);

  useEffect(() => {
    const elm = hoverRef.current;
    if (elm) {
      elm.addEventListener("mouseover", handleMouseOver);
      elm.addEventListener("mouseout", handleMouseOut);

      return () => {
        elm.removeEventListener("mouseover", handleMouseOver);
        elm.removeEventListener("mouseout", handleMouseOut);
      };
    }
  }, [hoverRef]);

  return { hoverRef, isHovered };
}
