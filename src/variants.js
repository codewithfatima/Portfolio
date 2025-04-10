// src/variants.js
export const fadeUp = (direction, duration= 0.3 ) => {
    return {
      hidden: {
        x: direction === 'up' ? 80 : -50,
        y:0,
        opacity:0,
        //  direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
      },
      show: {
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
          type: 'spring',
          stiffness: 100,
        damping: 25,
        delay: duration,
          duration: 1.2,
          delay: 0.3,
          ease: [0.25, 0.25, 0.25, 0.75],
        }
      }
    }
  };
  

  // const fadeIn = (direction = 'up', delay = 0.3) => {
  //   return {
  //     hidden: {
  //       opacity: 0,
  //       y: direction === 'up' ? 20 : -20, 
  //     },
  //     show: {
  //       opacity: 1,
  //       y: 0,
  //       transition: {
  //         delay: delay,
  //         duration: 0.6,
  //         delay: 0.3,
  //         ease: [0.25, 0.25, 0.25, 0.75],
  //       },
  //     },
  //   };
  // };