'use client';
import styles from './style.module.scss';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { opacity, slideUp, preloaderAnim } from './anim';

const words = ["Hello", "Bonjour", "Ciao", "Olà", "やあ", "Hallo", "Guten tag", "ආයුබෝවන්"];

export default function Index({ onComplete }) {
    const [index, setIndex] = useState(0);
    const [dimension, setDimension] = useState({width: 0, height:0});
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        setDimension({width: window.innerWidth, height: window.innerHeight});
    }, []);

    useEffect(() => {
        if(index === words.length - 1) {
            // When words animation completes
            setTimeout(() => {
                setIsVisible(false);
                setTimeout(() => {
                    if(onComplete) onComplete();
                }, 1200); // Matches slideUp duration
            }, 500);
            return;
        }
        
        setTimeout(() => {
            setIndex(index + 1);
        }, index === 0 ? 1000 : 150);
    }, [index, onComplete]);

    const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width/2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`;
    const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width/2} ${dimension.height} 0 ${dimension.height}  L0 0`;

    const curve = {
        initial: {
            d: initialPath,
            transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1]}
        },
        exit: {
            d: targetPath,
            transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3}
        }
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div 
                    variants={slideUp} 
                    initial="initial" 
                    exit="exit" 
                    className={styles.introduction}
                >
                    {dimension.width > 0 && 
                    <>
                        <motion.p variants={opacity} initial="initial" animate="enter">
                            <span></span>{words[index]}
                        </motion.p>
                        <svg>
                            <motion.path variants={curve} initial="initial" exit="exit"></motion.path>
                        </svg>
                    </>
                    }
                </motion.div>
            )}
        </AnimatePresence>
    )
}
