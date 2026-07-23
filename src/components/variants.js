
export const FadeIn = (direction, delay) => ({
  hidden: {
    opacity: 0,
    x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: delay,
    },
  },
});
