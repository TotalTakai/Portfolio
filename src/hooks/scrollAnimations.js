import { useEffect } from "react";

export const useScrollAnimation = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".scroll-animate");

    const handleScroll = () => {
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.9) {
          el.classList.add("visible");
        } else {
          el.classList.remove("visible");
        }
      });
    };

    // Run the scroll check on load
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
};
