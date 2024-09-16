import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export const Test = () => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const [repeatCount, setRepeatCount] = useState(1);
  const [xValue, setXValue] = useState(0);

  useEffect(() => {
    console.log(contentRef);
    const updateRepeatCount = () => {
      const containerWidth = containerRef.current.offsetWidth;
      const contentWidth = contentRef.current.offsetWidth;

      // Calculate the number of times to repeat the content
      const repeatsNeeded = Math.ceil(containerWidth / contentWidth) + 1;
      setRepeatCount(repeatsNeeded);

      // Calculate the x motion value based on the number of repeats
      const xValue = (100 / repeatsNeeded) * (repeatsNeeded - 1);
      setXValue(xValue);
    };

    // Update repeat count on mount and on window resize
    updateRepeatCount();
    window.addEventListener("resize", updateRepeatCount);

    return () => {
      window.removeEventListener("resize", updateRepeatCount);
    };
  }, []);

  const items = ["Item 1"];

  return (
    <div
      ref={containerRef}
      style={{ overflow: "hidden", width: "100%", whiteSpace: "nowrap" }}
    >
      <motion.div
        animate={{ x: [`0%`, `-${xValue}%`] }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "linear",
        }}
        style={{ display: "inline-flex" }}
      >
        {Array.from({ length: repeatCount }).map((_, i) => (
          <div ref={contentRef} key={i} style={{ display: "inline-flex" }}>
            {items.map((item, index) => (
              <div
                key={index}
                style={{
                  width: "200px",
                  padding: "20px",
                  background: ["#ff0000", "#00ff00", "#0000ff", "#ffff00"][
                    index % 4
                  ],
                  textAlign: "center",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};
