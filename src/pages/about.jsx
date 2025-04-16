import { useEffect } from 'react';
import Image from 'next/image';
import Nav from './nav'; // Ensure Nav is correctly imported
import Nid from './Nid'; // Ensure correct import path
import Abt from './Abt'; // Ensure correct import path
import Con from './Con' ;

const About = () => {
    return (
        <main>
            <Abt />
            <Nid />
            <Con />
        </main>
    );
};

export default About;
