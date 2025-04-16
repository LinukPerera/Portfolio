import { useRef, useLayoutEffect, useEffect } from 'react';
import styles from './style.module.scss'; // Ensure path is correct
import Nav from '../nav'; // Ensure Nav is correctly imported
import Rounded from '../../common/RoundedButton';
import {  useScroll, motion, useTransform} from 'framer-motion';
import Link from 'next/link';  // Import the Link component


const About = () => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  
  let yPercent = 0;
  let direction = -1;

  const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    })
  const x = useTransform(scrollYProgress, [0, 1], [0, 100])

  // IntersectionObserver for hidden elements
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.show); // Add show class
        } else {
          entry.target.classList.remove(styles.show); // Remove show class
        }
      });
    });

    const hiddenElements = document.querySelectorAll(`.${styles.hidden}`);
    hiddenElements.forEach((el) => observer.observe(el));

    // Clean up observer when component unmounts
    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []); // Empty dependency array ensures this only runs once after mount

  
  return (
    <div className={styles.container}>
      <Nav />
      <div className={styles.body}>
        {/* Title and description in one section with background image */}
        

        <div>
          <section className={styles.titleDescriptionSection}>
            <p className={styles.text}>About Me</p>
            <p className={styles.description}>
              Passionate About Tech, Driven by Innovation—Exploring Physics, Fintech and Machine Learning
            </p>
          </section>
        </div>
          <motion.div style={{ x }} className={styles.buttonContainer}>
            <Link href="/contact" passHref>
              <Rounded backgroundColor={"#334BD3"} className={styles.button}>
                <p>Get in touch</p>
              </Rounded>
            </Link>
          </motion.div>
        {/* Other sections */}
        <section className={styles.hidden}>
          <div className={styles.parent}>
            <h2 className={styles.h2}>Born in Sri Lanka</h2>
          </div>
          <div className={styles.pa}>
            <p className={styles.p2}>
              Often refered to as the pearl of the Indian ocean,
              Rich with culture and Bio-Diversity many creatures and plants also natively call it home.
            </p>
          </div>
        </section>
        <section className={styles.hidden}>
          <div className={styles.pa}>
              <h2 className={styles.h2}>What I Provide</h2>
            </div>
            <div className={styles.parent}>
              <p className={styles.p2}>
                My key strengths lie in Creative problem solving and Project management.
              </p>
            </div>
        </section>
        <section className={styles.hidden}>
          <div className={styles.pa}>
              <h2 className={styles.h2}>Self Motivated</h2>
            </div>
            <div className={styles.parent}>
              <p className={styles.p2}>
                I'm capable of pushing myself, and always have been to reach the maximum potential of all projects that I undertake
              </p>
            </div>
        </section>
      </div>
    </div>
  );
};

// Default export for the component
export default About;
