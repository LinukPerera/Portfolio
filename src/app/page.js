'use client';
import styles from './page.module.scss';
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Preloader from '../components/Preloader';
import Landing from '../components/Landing';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    document.body.classList.add('no-scroll');
    
    // Total preloader duration matches animation timing
    const timer = setTimeout(() => {
      setShowContent(true);
      setTimeout(() => {
        setIsLoading(false);
        document.body.classList.remove('no-scroll');
      }, 300); // Small buffer for exit animation
    }, 2200); // Matches preloader animation duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className={styles.main}>
      <AnimatePresence mode='wait'>
        {isLoading ? (
          <Preloader />
        ) : null}
      </AnimatePresence>
      
      {showContent && (
        <Landing />
      )}
    </main>
  );
}
