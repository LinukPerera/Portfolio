'use client';
import styles from './page.module.scss';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Preloader from '../components/Preloader';
import Landing from '../components/Landing';
// ... other imports ...

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Set loading state
    document.body.classList.add('no-scroll');

    // Original timing logic
    const loadTimer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = 'default';
      document.body.classList.remove('no-scroll');
      window.scrollTo(0, 0);
    }, isMobile ? 2000 : 2000); // Same duration for both

    return () => {
      clearTimeout(loadTimer);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  return (
    <main className={styles.main}>
      <AnimatePresence mode='wait'>
        {isLoading ? (
          <Preloader />
        ) : (
          <>
            <Landing />
            <Description />
            <Projects />
            <SlidingImages />
            <Contact />
          </>
        )}
      </AnimatePresence>
    </main>
  );
}
