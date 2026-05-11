"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;

    const xDotSetter = gsap.quickSetter(dot, "x", "px");
    const yDotSetter = gsap.quickSetter(dot, "y", "px");
    const xRingSetter = gsap.quickSetter(ring, "x", "px");
    const yRingSetter = gsap.quickSetter(ring, "y", "px");

    const moveCursor = (e) => {
      const { clientX, clientY } = e;
      xDotSetter(clientX);
      yDotSetter(clientY);

      gsap.to(ring, {
        x: clientX,
        y: clientY,
        duration: 0.6,
        ease: "power3.out",
        overwrite: "auto",
      });
    };

    const onMouseEnter = () => {
      setIsHovering(true);
      gsap.to(ring, { 
        scale: 2, // 🔹 Sirf halka sa expand hoga (Elegant)
        backgroundColor: "rgba(181, 65, 24, 0.02)", 
        borderColor: "#997819",
        borderWidth: "1px",
        duration: 0.4,
        ease: "expo.out",
        overwrite: true 
      });
      gsap.to(dot, { scale: 0, opacity: 0, duration: 0.2, overwrite: true });
    };

    const onMouseLeave = () => {
      setIsHovering(false);
      gsap.to(ring, { 
        scale: 1, 
        backgroundColor: "transparent", 
        borderColor: "#997819", 
        borderWidth: "1.5px",
        duration: 0.4,
        ease: "power2.out",
        overwrite: true 
      });
      gsap.to(dot, { scale: 1, opacity: 1, duration: 0.3, overwrite: true });
    };

    window.addEventListener("mousemove", moveCursor);

    const refreshElements = () => {
      const interactive = document.querySelectorAll('a, button, .cursor-pointer, input, select');
      interactive.forEach((el) => {
        el.addEventListener("mouseenter", onMouseEnter);
        el.addEventListener("mouseleave", onMouseLeave);
      });
    };

    refreshElements();
    const observer = new MutationObserver(refreshElements);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* 🔹 Precision Core */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1 h-1 bg-[#997819] rounded-full pointer-events-none z-[10001]"
        style={{ transform: "translate(-50%, -50%)" }}
      />
      
      {/* 🔹 Floating Ring (Slightly smaller base size: w-6 h-6) */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-6 h-6 border-[1.5px] border-[#997819] bg-transparent rounded-full pointer-events-none z-[10000] flex items-center justify-center"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        {isHovering && (
          <span className="text-[4px] font-black text-white uppercase tracking-tighter leading-none mix-blend-difference">
            View
          </span>
        )}
      </div>
    </>
  );
}