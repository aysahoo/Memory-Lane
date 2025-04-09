// components/FadeInWrapper.jsx
import { useEffect, useState } from "react";

const FadeInWrapper = ({ children }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 10); // slight delay for transition
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`transition-opacity duration-600 ease-in-out ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {children}
    </div>
  );
};

export default FadeInWrapper;
