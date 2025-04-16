'use client';
import styles from './style.module.scss';  // Import CSS module for Nav styles
import Link from 'next/link';
import Magnetic from '../../common/Magnetic'; // Assuming Magnetic is a custom component
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const Nav = () => {
  const pathname = usePathname();
  
  // Initialize the state for active link, if needed.
  const [isActive, setIsActive] = useState(false);

  // You can use this if you need some custom logic based on navigation, but this is unnecessary for active link management.
  useEffect(() => {
    setIsActive(false);  // Reset active state if needed, though not required for the current use case.
  }, [pathname]);

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navLinks}>
        <li>
          <Magnetic>
            <div className={styles.el}>
              <Link 
                href="/" 
                className={pathname === "/" ? styles.active : ""}
              >
                Home
              </Link>
              <div className={styles.indicator}></div>
            </div>
          </Magnetic>
        </li>
        <li>
          <Magnetic>
            <div className={styles.el}>
              <Link 
                href="/experience" 
                className={pathname === "/experience" ? styles.active : ""}
              >
                Experience
              </Link>
              <div className={styles.indicator}></div>
            </div>
          </Magnetic>
        </li>
        <li>
          <Magnetic>
            <div className={styles.el}>
              <Link 
                href="/contact" 
                className={pathname === "/contact" ? styles.active : ""}
              >
                Contact
              </Link>
              <div className={styles.indicator}></div>
            </div>
          </Magnetic>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
