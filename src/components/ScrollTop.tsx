import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = (): null => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // use "smooth" if you want animation
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
