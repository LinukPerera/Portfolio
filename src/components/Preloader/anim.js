export const opacity = {
    initial: { opacity: 0 },
    enter: { 
        opacity: 0.75,
        transition: { duration: 1, delay: 0.2 }
    },
}

export const slideUp = {
    initial: { top: 0 },
    exit: { 
        top: "-100vh",
        transition: { 
            duration: 0.8, 
            ease: [0.76, 0, 0.24, 1],
            when: "afterChildren" // Ensure child animations complete first
        }
    }
}

// Add this new animation for smooth handoff
export const pageAppear = {
    initial: { opacity: 0 },
    enter: {
        opacity: 1,
        transition: { 
            duration: 0.5,
            delay: 0.4 // Starts before preloader completely exits
        }
    }
}
