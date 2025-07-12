import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { slideUp, opacity } from './animation';
import Rounded from '../../common/RoundedButton';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Index() {
    const pathname = usePathname();
    const [isActive, setIsActive] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        setIsActive(false);
        setIsHovered(false);
    }, [pathname]);

    const phrase = "I'm an Electrical and Electronics Engineering undergrad, MBCS, and IET volunteer with a passion for tech, ML, fintech, web development, and physics. Always exploring new ideas and building projects along the way!";
    const description = useRef(null);
    const isInView = useInView(description);

    return (
        <div ref={description} className={styles.description}>
            <div className={styles.body}>
                <p>
                    {phrase.split(" ").map((word, index) => (
                        <span key={index} className={styles.mask}>
                            <motion.span
                                variants={slideUp}
                                custom={index}
                                animate={isInView ? "open" : "closed"}
                                key={index}
                            >
                                {word}
                            </motion.span>
                        </span>
                    ))}
                </p>
                <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>
                    Driven by a love for problem-solving, I try to be novel when developing solutions that tackle real-world challenges using tech.
                </motion.p>
                <div
                    className={styles.buttonWrapper}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <Rounded className={`${styles.button} ${!isHovered ? styles.notHovered : ''}`}>
                        <Link
                            href="https://www.linkedin.com/in/linukperera"
                            passHref
                            legacyBehavior
                        >
                            <a 
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.link}
                            >
                                LinkedIn
                            </a>
                        </Link>
                    </Rounded>
                </div>
            </div>
        </div>
    );
}
