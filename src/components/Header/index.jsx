'use client';
import { useEffect, useState, useLayoutEffect, useRef } from 'react';
import styles from './style.module.scss';
import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import Nav from './nav';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Rounded from '../../common/RoundedButton';
import Magnetic from '../../common/Magnetic';

export default function Header() {
    const header = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const [mounted, setMounted] = useState(false);
    const pathname = usePathname();
    const button = useRef(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (isActive) setIsActive(false);
    }, [pathname]);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(button.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                start: 0,
                end: window.innerHeight,
                onLeave: () => { gsap.to(button.current, { scale: 1, duration: 0.25, ease: "power1.out" }) },
                onEnterBack: () => { gsap.to(button.current, { scale: 0, duration: 0.25, ease: "power1.out" }, setIsActive(false)) }
            }
        })
    }, []);

    if (!mounted) return null;

    return (
        <>
            <div ref={header} className={styles.header}>
                <div className={styles.logo}>
                    <p className={styles.copyright}>©</p>
                    <div className={styles.name}>
                        <p className={styles.year}>2024</p>
                        <p className={styles.linuk}>Linuk</p>
                        <p className={styles.perera}>W L D Perera</p>
                    </div>
                </div>
                <div className={styles.nav}>
                    <Magnetic>
                        <div className={styles.el}>
                            <a 
                                href="/files/LinukPereraCV.PDF" 
                                download
                                className={pathname === "/download-cv" ? styles.active : ""}
                            >
                                Download CV
                            </a>
                            <div className={styles.indicator}></div>
                        </div>
                    </Magnetic>

                    <Magnetic>
                        <div className={styles.el}>
                            <a 
                                href="https://wa.me/+94773744055" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className={pathname === "/whatsapp" ? styles.active : ""}
                            >
                                WhatsApp Me
                            </a>
                            <div className={styles.indicator}></div>
                        </div>
                    </Magnetic>

                    <Magnetic>
                        <div className={styles.el}>
                            <a 
                                href="mailto:linukperera@icloud.com?subject=Hello&body=I'd like to connect with you!"
                                className={pathname === "/mail" ? styles.active : ""}
                            >
                                Mail Me
                            </a>
                            <div className={styles.indicator}></div>
                        </div>
                    </Magnetic>
                </div>
            </div>

            <div ref={button} className={styles.headerButtonContainer}>
                <Rounded onClick={() => { setIsActive(!isActive) }} className={`${styles.button}`}>
                    <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
                </Rounded>
            </div>

            <AnimatePresence mode="wait">
                {isActive && <Nav />}
            </AnimatePresence>
        </>
    );
}