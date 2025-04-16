import { useEffect } from 'react';
import Image from 'next/image';
import Nave from './nave'; // Ensure Nav is correctly imported
import Con from './Con' ;
import Exp1 from './Exp1'
import Exp2 from './Exp2'
// /pages/experience.js <Nave /> <Exp1 /> <Con />
const Experience = () => {
  return (
    <main>

        <Nave />
        <Exp1 />
        <Exp2 />
        <Con />

    </main>
);
};
  
  export default Experience;
  