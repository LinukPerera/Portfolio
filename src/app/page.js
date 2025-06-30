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

  useEffect(() => {
    // Add no-scroll class during loading
    document.body.classList.add('no-scroll');
    
    (async () => {
      try {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll({
          smooth: true,
          smartphone: {
            smooth: false // Disable smooth scroll on mobile
          },
          tablet: {
            smooth: false // Disable smooth scroll on tablet
          }
        });

        setTimeout(() => {
          setIsLoading(false);
          document.body.style.cursor = 'default';
          document.body.classList.remove('no-scroll');
          window.scrollTo(0, 0);
          
          // Refresh LocomotiveScroll after content loads
          setTimeout(() => {
            locomotiveScroll.update();
          }, 500);
        }, 2000);

        return () => {
          locomotiveScroll.destroy();
        };
      } catch (error) {
        console.error('Error initializing LocomotiveScroll:', error);
        setIsLoading(false);
        document.body.style.cursor = 'default';
        document.body.classList.remove('no-scroll');
      }
    })();
  }, []);

  return (
    <main className={styles.main}>
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Landing />
      <Description />
      <Projects />
      <SlidingImages />
      <Contact />
    </main>
  )
}
