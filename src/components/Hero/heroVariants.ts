"use client";
export const drawPaths = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse", // o "loop"
      },
    },
  };
  
  export const fadeCircles = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse", // o "loop"
      },
    },
  };
  
  export const glowTitle = {
    initial: { textShadow: "0px 0px 0px rgba(255,255,255,0)" },
    animate: {
      textShadow: [
        "0px 0px 10px rgba(74,108,247,0.3)",
        "0px 0px 20px rgba(74,108,247,0.7)",
        "0px 0px 10px rgba(74,108,247,0.3)",
      ],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };
  