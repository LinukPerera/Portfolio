import { useEffect } from 'react';
import Image from 'next/image';
import Navc from './navc'; // Ensure Nav is correctly imported
import Con from './Con' ;

const About = () => {
    return (
        <main>
            <Navc />
            <Con />
        </main>
    );
};

export default About;
