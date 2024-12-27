"use client";

import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

const Loading = ({
  animationData,
  loop = true,
  autoplay = true,
  style = {},
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const animationInstance = lottie.loadAnimation({
        container: containerRef.current,
        renderer: "svg",
        loop: loop,
        autoplay: autoplay,
        animationData: animationData,
      });

      return () => animationInstance.destroy();
    }
  }, [animationData, loop, autoplay]);
  return <div ref={containerRef} style={style}></div>;
};

export default Loading;
