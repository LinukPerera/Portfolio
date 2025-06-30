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
import { pageAppear } from '../components/Preloader/anim';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.body.classList.add('no-scroll');
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.classList.remove('no-scroll');
    }, 2500); // Slightly longer than animation duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className={styles.main}>
      <AnimatePresence mode='sync'> {/* Changed to sync mode */}
        {isLoading ? (
          <Preloader key="preloader" />
        ) : (
          <motion.div
            key="content"
            variants={pageAppear}
            initial="initial"
            animate="enter"
          >
            <Landing />
            <Description />
            <Projects />
            <SlidingImages />
            <Contact />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
