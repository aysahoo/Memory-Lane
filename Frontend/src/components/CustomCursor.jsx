import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const moveCursor = (e) => {
      const x = e.clientX - 8; // center the dot (16px size)
      const y = e.clientY - 8;
      cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    const addHoverGlow = () => cursor.classList.add("cursor-hover");
    const removeHoverGlow = () => cursor.classList.remove("cursor-hover");

    document.addEventListener("mousemove", moveCursor);

    const hoverElements = document.querySelectorAll("a, button, input, textarea, select, label");
    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", addHoverGlow);
      el.addEventListener("mouseleave", removeHoverGlow);
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", addHoverGlow);
        el.removeEventListener("mouseleave", removeHoverGlow);
      });
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor" />;
};

export default CustomCursor;
