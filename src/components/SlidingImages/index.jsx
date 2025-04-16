import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import styles from './style.module.scss';
import Image from 'next/image';

const slider1 = [
    {
        color: "#e3e5e7",
        src: "1s.png"
    },
    {
        color: "#05122D",
        src: "2s.png"
    },
    {
        color: "#608da2",
        src: "3s.png"
    },
    {
        color: "#989898",
        src: "4s.png"
    }
]

const slider2 = [
    {
        color: "#d4e3ec",
        src: "5s.png"
    },
    {
        color: "#e5e0e1",
        src: "6s.png"
    },
    {
        color: "#6e5442",
        src: "7s.png"
    },
    {
        color: "#c8a582",
        src: "8s.png"
    }
]

export default function Index() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    })

    // Adjust animation intensity based on screen size
    const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;
    const x1 = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 100 : 150]);
    const x2 = useTransform(scrollYProgress, [0, 1], [0, isMobile ? -100 : -150]);
    const height = useTransform(scrollYProgress, [0, 0.9], [isMobile ? 30 : 50, 0]);

    return (
        <div ref={container} className={styles.slidingImages}>
            <motion.div style={{x: x1}} className={styles.slider}>
                {
                    slider1.map((project, index) => {
                        return (
                            <div key={index} className={styles.project} style={{backgroundColor: project.color}}>
                                <div className={styles.imageContainer}>
                                    <Image 
                                        fill={true}
                                        alt={`Project ${index + 1}`}
                                        src={`/images/${project.src}`}
                                        sizes="(max-width: 768px) 50vw, 25vw"
                                    />
                                </div>
                            </div>
                        )
                    })
                }
            </motion.div>
            <motion.div style={{x: x2}} className={styles.slider}>
                {
                    slider2.map((project, index) => {
                        return (
                            <div key={index} className={styles.project} style={{backgroundColor: project.color}}>
                                <div className={styles.imageContainer}>
                                    <Image 
                                        fill={true}
                                        alt={`Project ${index + 5}`}
                                        src={`/images/${project.src}`}
                                        sizes="(max-width: 768px) 50vw, 25vw"
                                    />
                                </div>
                            </div>
                        )
                    })
                }
            </motion.div>
            <motion.div style={{height}} className={styles.circleContainer}>
                <div className={styles.circle}></div>
            </motion.div>
        </div>
    )
}