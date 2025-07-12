import React, { useState, useEffect } from 'react';
import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide } from '../animation';
import Link from 'next/link';
import Curve from './Curve';
import Footer from './Footer';

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Download CV",
    href: "/files/LinukPereraCV.pdf",
    download: true, // Indicate that this link should trigger a download
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <motion.div 
      variants={menuSlide} 
      initial="initial" 
      animate="enter" 
      exit="exit" 
      className={styles.menu}
    >
      <div className={styles.body}>
        <div 
          onMouseLeave={() => { !isMobile && setSelectedIndicator(pathname) }} 
          className={styles.nav}
        >
          <div className={styles.header}>
            <p>Navigation</p>
          </div>
          {
            navItems.map((data, index) => (
              <div 
                key={index} 
                className={`${styles.navItem} ${selectedIndicator === data.href ? styles.active : ''}`}
                onClick={() => setSelectedIndicator(data.href)}
              >
                {data.download ? (
                  <a 
                    href={data.href} 
                    download // Add the download attribute for the CV link
                    className={styles.link}
                  >
                    {data.title}
                  </a>
                ) : (
                  <Link href={data.href} legacyBehavior>
                    <a>{data.title}</a>
                  </Link>
                )}
              </div>
            ))
          }
        </div>
        <Footer />
      </div>
      {!isMobile && <Curve />}
    </motion.div>
  );
}
