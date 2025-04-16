import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import styles from './styles.module.scss';

export default function Index() {
    const [windowHeight, setWindowHeight] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
            setWindowHeight(window.innerHeight);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    if (isMobile) return null;

    const initialPath = `M100 0 L100 ${windowHeight} Q-100 ${windowHeight/2} 100 0`
    const targetPath = `M100 0 L100 ${windowHeight} Q100 ${windowHeight/2} 100 0`

    const curve = {
        initial: {
            d: initialPath
        },
        enter: {
            d: targetPath,
            transition: {duration: 1, ease: [0.76, 0, 0.24, 1]}
        },
        exit: {
            d: initialPath,
            transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]}
        }
    }

    return (
        <svg className={styles.svgCurve}>
            <motion.path variants={curve} initial="initial" animate="enter" exit="exit"></motion.path>
        </svg>
    )
}