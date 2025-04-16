// Nid.js
import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import styles from './style.module.scss';
import Image from 'next/image';

const slider1 = [
    { color: "#e3e5e7", src: "Logo1.png" },
    { color: "#05122D", src: "Logo2.png" },
    { color: "#608da2", src: "Logo3.png" },
    { color: "#6e5442", src: "Logo4.png" },
];

const slider2 = [
    { color: "#d4e3ec", src: "speak3.jpg" },
    { color: "#e5e0e1", src: "speak2.jpg" },
    { color: "#6e5442", src: "speak1.jpg" },
    { color: "#c8a582", src: "speak4.jpg" },
];

export default function Nid() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"],
    });

    const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
    const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

    return (
        <div ref={container} className={styles.slidingImages}>
            <div className={styles.parent}>
                <h2 className={styles.text}>Music Enthusiast</h2>
            </div>
            <motion.div style={{ x: x1 }} className={styles.slider}>
                {slider1.map((project, index) => (
                    <div key={index} className={styles.project} style={{ backgroundColor: project.color }}>
                        <div className={styles.imageContainer}>
                            <Image fill={true} alt="image" src={`/images/${project.src}`} />
                        </div>
                    </div>
                ))}
            </motion.div>
            <motion.div style={{ x: x2 }} className={styles.slider}>
                {slider2.map((project, index) => (
                    <div key={index} className={styles.project} style={{ backgroundColor: project.color }}>
                        <div className={styles.imageContainer}>
                            <Image fill={true} alt="image" src={`/images/${project.src}`} />
                        </div>
                    </div>
                ))}
            </motion.div>
            <div className={styles.parent}>
                <h2 className={styles.text}>Public Speaker</h2>
            </div>
            <motion.div style={{ height }} className={styles.circleContainer}>
                <div className={styles.circle}></div>
            </motion.div>
        </div>
    );
}
