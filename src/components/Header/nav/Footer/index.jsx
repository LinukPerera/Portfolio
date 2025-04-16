import styles from './style.module.scss';
import { useEffect, useState } from 'react';

export default function Index() {
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
        <div className={styles.footer}>
            <a className={styles.a} href="https://www.linkedin.com/in/linuk-perera-79a212307?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">Linkedin</a>
            <a className={styles.a} href="https://youtube.com/@linukshreds?si=g9FiCvCYqW-OQnXN" target="_blank" rel="noopener noreferrer">Youtube</a>
            {!isMobile && (
                <>
                    <a className={styles.a} href="mailto:linukperera@icloud.com?subject=Hello&body=I'd like to connect with you!">Mail Me</a>
                    <a className={styles.a} href="https://wa.me/+94773744055" target="_blank" rel="noopener noreferrer">WhatsApp Me</a>
                </>
            )}
        </div>
    )
}