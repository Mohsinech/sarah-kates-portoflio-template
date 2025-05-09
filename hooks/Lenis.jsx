"use client";

import { useEffect } from "react";
import Lenis from "lenis";

const LeniScroll = () => {
  //  Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      duration: 2,
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
};

export default LeniScroll;
