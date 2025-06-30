'use client';
import styles from './page.module.scss'
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion';
import Preloader from '../components/Preloader';
import Landing from '../components/Landing';
import Projects from '../components/Projects';
import Description from '../components/Description';
import SlidingImages from '../components/SlidingImages';
import Contact from '../components/Contact';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Set loading state
    document.body.classList.add('no-scroll');

    // Different timing for mobile vs desktop
    const loadTime = isMobile ? 2000 : 3500; // 3.5s for PC, 2s for mobile

    const loadTimer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = 'default';
      document.body.classList.remove('no-scroll');
      window.scrollTo(0, 0);
    }, loadTime);

    return () => {
      clearTimeout(loadTimer);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  return (
    <main className={styles.main}>
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
      {!isLoading && (
        <>
          <Landing />
          <Description />
          <Projects />
          <SlidingImages />
          <Contact />
        </>
      )}
    </main>
  )
}
