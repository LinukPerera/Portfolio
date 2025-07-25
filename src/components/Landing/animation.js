// Landing page animations
export const slideUp = {
    initial: { y: 300 },
    enter: {
        y: 0,
        transition: { 
            duration: 0.8, 
            ease: [0.33, 1, 0.68, 1],
            delay: 0.8  // Starts exactly when preloader exit completes
        }
    }
};
