'use client';
import styles from './page.module.scss';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion'; // Added motion import
import Preloader from '../components/Preloader';
import Landing from '../components/Landing';
import Projects from '../components/Projects';
import Description from '../components/Description';
import SlidingImages from '../components/SlidingImages';
import Contact from '../components/Contact';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    document.body.classList.add('no-scroll');
    
    // Match this duration with your preloader's total animation time
    const preloaderDuration = 2200; // 2.2 seconds
    
    const timer = setTimeout(() => {
      setShowContent(true);
      setTimeout(() => {
        setIsLoading(false);
        document.body.classList.remove('no-scroll');
        window.scrollTo(0, 0);
      }, 300); // Small buffer for exit animation
    }, preloaderDuration);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className={styles.main}>
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
      
      {showContent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Landing />
          <Description />
          <Projects />
          <SlidingImages />
          <Contact />
        </motion.div>
      )}
    </main>
  );
}
