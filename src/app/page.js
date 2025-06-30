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

    // Set loading class
    document.body.classList.add('no-scroll');
    
    // Different timing for mobile vs desktop
    const loadTime = isMobile ? 2000 : 3000; // Longer duration for PC

    (async () => {
      try {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll({
          smooth: !isMobile, // Only enable smooth scroll on desktop
          smartphone: {
            smooth: false
          },
          tablet: {
            smooth: false
          }
        });

        setTimeout(() => {
          setIsLoading(false);
          document.body.style.cursor = 'default';
          document.body.classList.remove('no-scroll');
          window.scrollTo(0, 0);
          
          // Refresh scroll after content loads
          setTimeout(() => {
            locomotiveScroll.update();
          }, 500);
        }, loadTime); // Use the dynamic timing

        return () => {
          locomotiveScroll.destroy();
          window.removeEventListener('resize', checkMobile);
        };
      } catch (error) {
        console.error('Error initializing scroll:', error);
        setIsLoading(false);
        document.body.style.cursor = 'default';
        document.body.classList.remove('no-scroll');
      }
    })();
  }, [isMobile]);

  return (
    <main className={styles.main}>
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader duration={isMobile ? 2 : 3} />}
      </AnimatePresence>
      <Landing />
      <Description />
      <Projects />
      <SlidingImages />
      <Contact />
    </main>
  )
}
