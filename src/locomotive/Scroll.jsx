import LocomotiveScroll from "locomotive-scroll";
import React, { useEffect, useRef } from "react";
import "locomotive-scroll/dist/locomotive-scroll.css";

function Scroll({ children }) {
  const scrollRef = useRef(null);
  const locoRef = useRef(null);
  useEffect(() => {
    locoRef.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.1,
    });

    return () => {
      locoRef.current.destroy();
    };
  }, []);

  return (
    <div data-scroll-container ref={scrollRef}>
      {children}
    </div>
  );
}

export default Scroll;
