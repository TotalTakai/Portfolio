import { useEffect } from "react";

export const useResponsiveDesign = () => {
  useEffect(() => {
    const updateViewport = () => {
      const root = document.documentElement;
      if (window.innerWidth <= 768) {
        root.style.setProperty("--font-size", "16px");
        root.style.setProperty("--padding", "10px");
        root.style.setProperty("--margin", "5px");
      } else {
        root.style.setProperty("--font-size", "20px");
        root.style.setProperty("--padding", "20px");
        root.style.setProperty("--margin", "10px");
      }
    };

    updateViewport();
    window.addEventListener("resize", updateViewport);

    return () => {
      window.removeEventListener("resize", updateViewport);
    };
  }, []);
};
