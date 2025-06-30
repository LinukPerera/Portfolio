// app/page.js
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
    document.body.classList.add('no-scroll');

    // Total animation time calculation:
    // - Initial word delay: 1000ms
    // - 7 word transitions @ 150ms: 1050ms
    // - Curve animation delay: 300ms
    // - Curve animation duration: 700ms
    // - slideUp exit delay: 200ms
    // - slideUp exit duration: 800ms
    const TOTAL_ANIMATION_TIME = 1200 + 2100 + 300 + 700;

    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.classList.remove('no-scroll');
      window.scrollTo(0, 0);
    }, TOTAL_ANIMATION_TIME);

    return () => {
      clearTimeout(timer);
      document.body.classList.remove('no-scroll');
    };
  }, []);

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
  );
}
