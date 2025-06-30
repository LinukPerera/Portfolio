export const opacity = {
    initial: {
        opacity: 0
    },
    enter: {
        opacity: 0.75,
        transition: { duration: 1, delay: 0.2 }
    }
};

export const slideUp = {
    initial: {
        top: 0
    },
    exit: {
        top: "-100vh",
        transition: { 
            duration: 0.8, 
            ease: [0.33, 1, 0.68, 1], // Matching landing page's ease
            delay: 1.7 // Adjusted to coordinate with landing page's 2.5s delay
        }
    }
};
