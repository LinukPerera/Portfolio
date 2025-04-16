// Project component (updated)
'use client';
import React, { useState } from 'react';
import styles from './style.module.scss';

export default function Index({ index, title, src, manageModal, isMobile }) {
    const [isHovered, setIsHovered] = useState(false);

    const handleTouch = (e) => {
        if (isMobile) {
            // Mobile-specific behavior if needed
        }
    };

    return (
        <div 
            onMouseEnter={(e) => {
                setIsHovered(true);
                if (!isMobile) manageModal(true, index, e.clientX, e.clientY);
            }} 
            onMouseLeave={(e) => {
                setIsHovered(false);
                if (!isMobile) manageModal(false, index, e.clientX, e.clientY);
            }}
            onTouchStart={(e) => {
                setIsHovered(true);
                handleTouch(e);
            }}
            onTouchEnd={() => {
                setIsHovered(false);
            }}
            className={`${styles.project} ${isMobile && isHovered ? styles.hovered : ''}`}
            style={isMobile && isHovered ? { backgroundImage: `url(/images/${src})` } : {}}
        >
            <h2>{title}</h2>
            <p>Design & Development</p>
        </div>
    );
}