'use client'
import Image from 'next/image'
import styles from './style.module.scss'
import { useRef, useLayoutEffect, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { slideUp } from './animation';
import { motion } from 'framer-motion';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  const sliderContainer = useRef(null);
  const animationRefs = useRef({
    animationId: null,
    scrollTween: null,
    xPercent: 0,
    direction: -1
  });

  useEffect(() => {
    setIsMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      resetAnimations();
    };
  }, []);

  const resetAnimations = () => {
    if (animationRefs.current.animationId) {
      cancelAnimationFrame(animationRefs.current.animationId);
      animationRefs.current.animationId = null;
    }
    if (animationRefs.current.scrollTween) {
      animationRefs.current.scrollTween.kill();
      animationRefs.current.scrollTween = null;
    }
    animationRefs.current.xPercent = 0;
    animationRefs.current.direction = -1;
  };

  const setupAnimations = () => {
    resetAnimations();
    
    if (!isMounted) return;
    
    gsap.registerPlugin(ScrollTrigger);
    
    // Reset positions
    gsap.set([firstText.current, secondText.current], { 
      xPercent: 0,
      overwrite: true
    });
    
    // Scroll-triggered horizontal movement
    animationRefs.current.scrollTween = gsap.to(slider.current, {
      x: isMobile ? "-200px" : "-500px",
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: e => {
          animationRefs.current.direction = e.direction * -1;
        },
        onRefresh: () => {
          gsap.set([firstText.current, secondText.current], { 
            xPercent: animationRefs.current.xPercent,
            overwrite: true
          });
        }
      },
    });

    // Infinite loop animation
    const animate = () => {
      const { xPercent, direction } = animationRefs.current;
      
      let newXPercent = xPercent;
      if (newXPercent < -100) {
        newXPercent = 0;
      } else if (newXPercent > 0) {
        newXPercent = -100;
      }
      
      gsap.set([firstText.current, secondText.current], { 
        xPercent: newXPercent,
        overwrite: true
      });
      
      animationRefs.current.xPercent = newXPercent + (isMobile ? 0.05 : 0.08) * direction;
      animationRefs.current.animationId = requestAnimationFrame(animate);
    };
    
    animate();
  };

  useLayoutEffect(() => {
    if (!isMounted) return;
    setupAnimations();
    window.scrollTo(0, 0);
    return resetAnimations;
  }, [isMobile, isMounted]);

  useEffect(() => {
    if (!isMounted || typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setupAnimations();
        }
      });
    }, { threshold: 0.1 });

    if (sliderContainer.current) {
      observer.observe(sliderContainer.current);
    }

    return () => {
      if (sliderContainer.current) {
        observer.unobserve(sliderContainer.current);
      }
    };
  }, [isMounted]);

  if (!isMounted) return null;

  return (
    <motion.main variants={slideUp} initial="initial" animate="enter" className={styles.landing}>
      <Image 
        src="/images/linukbackground.png"
        fill={true}
        alt="background"
        priority
      />
      <div ref={sliderContainer} className={styles.sliderContainer}>
        <div ref={slider} className={styles.slider}>
          <p ref={firstText}>Linuk Perera -</p>
          <p ref={secondText}>EEE MS & BE MBCS</p>
        </div>
      </div>
      <div data-scroll data-scroll-speed={0.4} className={styles.description}>
        <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" fill="white"/>
        </svg>
        <div className={styles.mobileTextGroup}>
          <p>MBCS MIET</p>
          <p>Electrical & Electronics Engineer</p>
        </div>
      </div>
    </motion.main>
  )
}
