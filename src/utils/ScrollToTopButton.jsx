import React, { useEffect, useState } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > window.innerHeight / 3) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div>
      <button className={`upper ${isVisible ? 'slide-in':'slide-out'}`} onClick={scrollToTop}>
        <i style={{ color: 'white', fontSize: '25px' }} className="bi bi-chevron-up"></i>
      </button>
    </div>
  );
}

export default ScrollToTopButton;
