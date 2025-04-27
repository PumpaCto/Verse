import { useState, useEffect } from "react";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
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
    <>
      {isVisible && (
        <div
          className="fixed bottom-8 right-8 bg-yellow-400 hover:bg-yellow-500 text-black p-3 rounded-full cursor-pointer shadow-lg transition-all duration-300"
          onClick={scrollToTop}
        >
          ↑
        </div>
      )}
    </>
  );
}

export default ScrollToTop;
