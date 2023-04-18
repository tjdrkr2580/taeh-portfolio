import { useState, useEffect } from "react";
import { throttle } from "lodash";

function useThrottledScrollY(throttleTime = 200) {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    function handleScroll() {
      const y = window.scrollY;
      setScrollY(y);
    }
    if (typeof window !== "undefined") {
      const handleThrottledScroll = throttle(handleScroll, throttleTime);
      window.addEventListener("scroll", handleThrottledScroll);
      return () => {
        window.removeEventListener("scroll", handleThrottledScroll);
      };
    }
  }, [throttleTime]);
  return scrollY;
}

export default useThrottledScrollY;
