import styles from './style.module.scss';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { slide, scale } from '../../animation';
import { useEffect, useState } from 'react';

export default function Index({data, isActive, setSelectedIndicator}) {
    const { title, href, index} = data;
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <motion.div 
            className={styles.link} 
            onMouseEnter={() => { !isMobile && setSelectedIndicator(href) }} 
            custom={index} 
            variants={slide} 
            initial="initial" 
            animate="enter" 
            exit="exit"
        >
            <motion.div 
                variants={scale} 
                animate={isActive ? "open" : "closed"} 
                className={styles.indicator}>
            </motion.div>
            <Link href={href} legacyBehavior>
                <a>{title}</a>
            </Link>
        </motion.div>
    )
}