import Image from 'next/image';
import styles from './style.module.scss';  // SCSS file for Exp2
import { useRef } from 'react';
import { useScroll, motion, useTransform, useSpring } from 'framer-motion';

const Exp2 = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    })
    const x = useTransform(scrollYProgress, [0, 1], [0, 100])
    const y = useTransform(scrollYProgress, [0, 1], [-500, 0])
    const rotate = useTransform(scrollYProgress, [0, 1], [120, 90])
  return (
    <div className={styles.cardsContainer}>
      {/* Repeat the card 4 times */}
      <div className={styles.card}>
        <Image 
          src='/images/exp1.jpg' 
          alt="GFG logo imported from public directory" 
          className={styles.cardImg} 
          width={320}  // Same width as the card
          height={500} // Same height as the card
        />
        <div className={styles.cardBody}>
          <h1 className={styles.cardTitle}>Title</h1>
          <p className={styles.cardSubTitle}>tcfvygb</p>
          <p className={styles.cardInfo}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur tempore aperiam alias at modi exercitationem blanditiis. Facere, assumenda nulla eaque iure veniam earum at. Necessitatibus iusto eius nostrum repellendus temporibus.
          </p>
        </div>
      </div>

      <div className={styles.card}>
        <Image 
          src='/images/exp2.jpg' 
          alt="GFG logo imported from public directory" 
          className={styles.cardImg} 
          width={320}
          height={500}
        />
        <div className={styles.cardBody}>
          <h1 className={styles.cardTitle}>Title</h1>
          <p className={styles.cardSubTitle}>tcfvygb</p>
          <p className={styles.cardInfo}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur tempore aperiam alias at modi exercitationem blanditiis. Facere, assumenda nulla eaque iure veniam earum at. Necessitatibus iusto eius nostrum repellendus temporibus.
          </p>
        </div>
      </div>

      <div className={styles.card}>
        <Image 
          src='/images/exp1.jpg' 
          alt="GFG logo imported from public directory" 
          className={styles.cardImg} 
          width={320}
          height={500}
        />
        <div className={styles.cardBody}>
          <h1 className={styles.cardTitle}>Title</h1>
          <p className={styles.cardSubTitle}>tcfvygb</p>
          <p className={styles.cardInfo}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur tempore aperiam alias at modi exercitationem blanditiis. Facere, assumenda nulla eaque iure veniam earum at. Necessitatibus iusto eius nostrum repellendus temporibus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Exp2;
