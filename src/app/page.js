'use client';
import styles from './page.module.scss';
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Preloader from '../components/Preloader';
import Landing from '../components/Landing';
import Projects from '../components/Projects';
import Description from '../components/Description';
import SlidingImages from '../components/SlidingImages';
import Contact from '../components/Contact';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Lock scroll during loading
    document.body.classList.add('no-scroll');

    // Calculate total preloader time:
    // - Initial word delay: 1000ms
    // - 7 word transitions @ 150ms each: 1050ms
    // - Exit animation delay: 200ms (from anim.js)
    // - Exit animation duration: 800ms (from anim.js)
    const PRELOADER_TOTAL_TIME = 1000 + (7 * 150) + 200 + 800; // 3.05s total

    const loadTimer = setTimeout(() => {
      setIsLoading(false);
      document.body.classList.remove('no-scroll');
      window.scrollTo(0, 0);
    }, PRELOADER_TOTAL_TIME);

    return () => {
      clearTimeout(loadTimer);
      document.body.classList.remove('no-scroll');
    };
  }, []);

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
