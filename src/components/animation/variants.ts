export const easeProps = [0.1, 0.6, 0.8, 1];

export const animatedParent = {
  initial: {
    opacity: 1,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.1,
      ease: easeProps,
      staggerChildren: 0.15,
      when: "beforeChildren",
    },
  },
};

export const animatedParentShort = {
  initial: {
    opacity: 1,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.1,
      ease: easeProps,
      staggerChildren: 0.05,
      when: "beforeChildren",
    },
  },
};

export const fadeUpChild = {
  initial: {
    opacity: 0,
    translateY: 10,
  },
  enter: {
    opacity: 1,
    translateY: 0,
    transition: { duration: 0.333, ease: easeProps },
  },
};

export const fadeLeftChild = {
  initial: {
    opacity: 0,
    translateX: -20,
  },
  enter: {
    opacity: 1,
    translateX: 0,
    transition: { duration: 0.333, ease: easeProps },
  },
};

export const fadeRightChild = {
  initial: {
    opacity: 0,
    translateX: 20,
  },
  enter: {
    opacity: 1,
    translateX: 0,
    transition: { duration: 0.333, ease: easeProps },
  },
};

export const fadeInChild = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: { duration: 0.333, ease: easeProps },
  },
};

export const fadeDownChild = {
  initial: {
    opacity: 0,
    translateY: -20,
  },
  enter: {
    opacity: 1,
    translateY: 0,
    transition: { duration: 0.333, ease: easeProps },
  },
};
