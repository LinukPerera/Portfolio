// Home component (updated)
'use client';
import styles from './style.module.scss';
import { useState, useEffect, useRef } from 'react';
import Project from './components/project';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import Image from 'next/image';
import Rounded from '../../common/RoundedButton';

const projects = [
  {
    title: "Neural Network-Driven Augmented Reality for Gesture Control",
    src: "sla1.png",
    color: "#000000"
  },
  {
    title: "Environment Monitoring for Sri Lankan Airlines",
    src: "sla1.png",
    color: "#000000"
  },
  {
    title: "Audio to MIDI Converter",
    src: "a2midi.png",
    color: "#8C8C8C"
  },
  {
    title: "ML Based Predictive Frequency Analyzer",
    src: "fxa1.png",
    color: "#EFE8D3"
  }
];

const scaleAnimation = {
    initial: {scale: 0, x:"-50%", y:"-50%"},
    enter: {scale: 1, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.76, 0, 0.24, 1]}},
    closed: {scale: 0, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.32, 0, 0.67, 0]}}
};

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [modal, setModal] = useState({active: false, index: 0});
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  let xMoveContainer = useRef(null);
  let yMoveContainer = useRef(null);
  let xMoveCursor = useRef(null);
  let yMoveCursor = useRef(null);
  let xMoveCursorLabel = useRef(null);
  let yMoveCursorLabel = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    //Move Container
    xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", {duration: 0.8, ease: "power3"});
    yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", {duration: 0.8, ease: "power3"});
    //Move cursor
    xMoveCursor.current = gsap.quickTo(cursor.current, "left", {duration: 0.5, ease: "power3"});
    yMoveCursor.current = gsap.quickTo(cursor.current, "top", {duration: 0.5, ease: "power3"});
    //Move cursor label
    xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "left", {duration: 0.45, ease: "power3"});
    yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "top", {duration: 0.45, ease: "power3"});
  }, []);

  const moveItems = (x, y) => {
    if (!isMobile) {
      xMoveContainer.current(x);
      yMoveContainer.current(y);
      xMoveCursor.current(x);
      yMoveCursor.current(y);
      xMoveCursorLabel.current(x);
      yMoveCursorLabel.current(y);
    }
  };

  const manageModal = (active, index, x, y) => {
    if (!isMobile) {
      moveItems(x, y);
      setModal({active, index});
    }
  };

  return (
    <main 
      onMouseMove={(e) => {!isMobile && moveItems(e.clientX, e.clientY)}} 
      className={styles.projects}
    >
      <div className={styles.body}>
        {projects.map((project, index) => (
          <Project 
            key={index} 
            index={index} 
            title={project.title} 
            src={project.src} // Pass the src to the Project component
            manageModal={manageModal} 
            isMobile={isMobile}
          />
        ))}
      </div>
      <a href="https://github.com/LinukPerera" target="_blank" rel="noopener noreferrer" className={styles.a}>
        <Rounded>
          <p>More work</p>
        </Rounded>
      </a>
      {!isMobile && (
        <>
          <motion.div 
            ref={modalContainer} 
            variants={scaleAnimation} 
            initial="initial" 
            animate={active ? "enter" : "closed"} 
            className={styles.modalContainer}
          >
            <div style={{top: index * -100 + "%"}} className={styles.modalSlider}>
              {projects.map((project, index) => {
                const { src, color } = project;
                return (
                  <div className={styles.modal} style={{backgroundColor: color}} key={`modal_${index}`}>
                    <Image 
                      src={`/images/${src}`}
                      width={300}
                      height={0}
                      alt="Project image"
                    />
                  </div>
                );
              })}
            </div>
          </motion.div>
          <motion.div 
            ref={cursor} 
            className={styles.cursor} 
            variants={scaleAnimation} 
            initial="initial" 
            animate={active ? "enter" : "closed"}
          ></motion.div>
          <motion.div 
            ref={cursorLabel} 
            className={styles.cursorLabel} 
            variants={scaleAnimation} 
            initial="initial" 
            animate={active ? "enter" : "closed"}
          >View</motion.div>
        </>
      )}
    </main>
  );
}
