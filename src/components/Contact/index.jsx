import styles from './style.module.scss';
import Image from 'next/image';
import Rounded from '../../common/RoundedButton';
import { useRef, useState, useEffect } from 'react';
import { useScroll, motion, useTransform, useSpring } from 'framer-motion';
import Magnetic from '../../common/Magnetic';

export default function Index() {
    const container = useRef(null);
    const [isMobile, setIsMobile] = useState(false);
    
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    });

    const x = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 30 : 100]);
    const y = useTransform(scrollYProgress, [0, 1], [isMobile ? -100 : -500, 0]);
    const rotate = useTransform(scrollYProgress, [0, 1], [isMobile ? 60 : 120, 90]);
    
    return (
        <motion.div style={{y}} ref={container} className={styles.contact}>
            <div className={styles.body}>
                <div className={styles.title}>
                    <span>
                        <div className={styles.imageContainer}>
                            <Image 
                                fill={true}
                                alt={"Profile picture"}
                                src={`/images/linukbackground.jpg`}
                                sizes="(max-width: 768px) 80px, 100px"
                            />
                        </div>
                        <h2>Let's work</h2>
                    </span>
                    <h2>together</h2>
                    <motion.div style={{x}} className={styles.buttonContainer}>
                        <Rounded backgroundColor={"#334BD3"} className={styles.button}>
                            <p>Get in touch</p>
                        </Rounded>
                    </motion.div>
                    {!isMobile && (
                        <motion.svg style={{rotate, scale: 2}} width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" fill="white"/>
                        </motion.svg>
                    )}
                </div>
                <div className={styles.nav}>
                    <Rounded>
                        <p>
                            <a className={styles.a} href="mailto:linukperera@icloud.com?subject=Hello&body=I'd like to connect with you!">
                                Mail Me
                            </a>
                        </p>
                    </Rounded>
                    <Rounded>
                        <p>
                            <a className={styles.a} href="https://wa.me/+94773744055" target="_blank" rel="noopener noreferrer">
                                WhatsApp me
                            </a>
                        </p>
                    </Rounded>
                </div>
                <div className={styles.info}>
                    <div>
                        <span>
                            <h3>Version</h3>
                            <p>2024 © Edition</p>
                        </span>
                        <span>
                            <h3>Local Time</h3>
                            <p>GMT+5:30</p>
                        </span>
                    </div>
                    <div>
                        <span>
                            <h3>socials</h3>
                            <div className={styles.socialLinks}>
                                <Magnetic>
                                    <p>
                                        <a className={styles.a} href="https://www.linkedin.com/in/linuk-perera-79a212307?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
                                            Linkedin
                                        </a>
                                    </p>
                                </Magnetic>
                                <Magnetic>
                                    <p>
                                        <a className={styles.a} href="https://youtube.com/@linukshreds?si=g9FiCvCYqW-OQnXN" target="_blank" rel="noopener noreferrer">
                                            Youtube
                                        </a>
                                    </p>
                                </Magnetic>
                            </div>
                        </span>
                    </div>
                    
                    

                </div>
            </div>
        </motion.div>
    )
}
