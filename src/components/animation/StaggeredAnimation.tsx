import { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import {
  fadeInChild,
  fadeLeftChild,
  fadeRightChild,
  fadeUpChild,
  easeProps,
} from "./variants";
import { debug } from "webpack";

interface AnimateChildProps {
  children: React.ReactNode;
  direction?: "in" | "left" | "right" | "up";
}

/**
 *
 * @param children
 * @param {string}{direction
 * @returns
 */
export const AnimateChild = ({
  children,
  direction = "up",
}: AnimateChildProps) => {
  switch (direction) {
    case "up":
      return <motion.div variants={fadeUpChild}>{children}</motion.div>;
    case "left":
      return <motion.div variants={fadeLeftChild}>{children}</motion.div>;
    case "right":
      return <motion.div variants={fadeRightChild}>{children}</motion.div>;
    case "in":
      return <motion.div variants={fadeInChild}>{children}</motion.div>;
    default:
      return <motion.div variants={fadeUpChild}>{children}</motion.div>;
  }
};

interface AnimateParentProps {
  children: React.ReactNode;
  rX?: string;
  rY?: string;
  stagger?: number;
  triggerOnce?: boolean;
  debugMessage?: string;
}

/**
 *
 * @param {string} rX X offset in px
 * @param {string} rY Y offset in px
 * @param children
 * @param {number} stagger
 * @returns
 */
export const AnimateParent = ({
  children,
  rX = "-100px",
  rY = "0px",
  stagger = 0.333,
  triggerOnce = true,
  debugMessage,
}: AnimateParentProps) => {
  const [ref, inView] = useInView({
    rootMargin: `${rX} ${rY}`,
    triggerOnce: triggerOnce,
  });

  useEffect(() => {
    if (debugMessage) {
      console.log(debugMessage, inView);
    }
  }, [debugMessage, inView]);

  return (
    <motion.div
      ref={ref}
      variants={{
        initial: {
          opacity: 1,
        },
        enter: {
          opacity: 1,
          transition: {
            duration: 0.1,
            ease: easeProps,
            staggerChildren: stagger,
            when: "beforeChildren",
          },
        },
      }}
      initial="initial"
      animate={inView ? "enter" : "initial"}
      exit="initial"
      style={{ backgroundColor: debugMessage ? "grey" : "none" }}
    >
      <main>{children}</main>
    </motion.div>
  );
};
