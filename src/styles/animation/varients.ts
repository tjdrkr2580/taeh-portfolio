import { Variants } from "framer-motion";

export const svgMotion: Variants = Object.freeze({
  hidden: {
    strokeDasharray: 326,
    strokeDashoffset: 326,
  },
  visible: {
    strokeDashoffset: 0,
    transition: {
      duration: 3.8,
    },
  },
});

export const introMotion: Variants = Object.freeze({
  initial: {
    opacity: 1,
    background: "#191919",
  },
  animate: {},
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
});

export const firstInfoTextMotion: Variants = Object.freeze({
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
  exit: {
    opacity: 0,
    y: 30,
    transition: {
      duration: 0.6,
    },
  },
});
