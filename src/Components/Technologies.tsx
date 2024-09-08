import React from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { SiElastic, SiKubernetes, SiTailwindcss } from 'react-icons/si';
import { DiDocker, DiRedis, DiDotnet } from 'react-icons/di';
import { motion, Variants } from 'framer-motion';

const Technologies: React.FC = () => {
  
  const icon = (duration: number): Variants => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: 'linear',
        repeat: Infinity,
        repeatType: 'reverse',
      },
    },
  });

  return (
    <div className='border-b border-neutral-800 pb-24'>
      <h2 className='my-20 text-center text-4xl'>Technologies</h2>
      <div className='flex flex-wrap items-center justify-center gap-4'>
        <motion.div 
          variants={icon(1.5)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <RiReactjsLine className='text-7xl text-cyan-400'/>
        </motion.div>
        <motion.div 
          variants={icon(1.5)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <SiElastic className='text-7xl text-pink-500'/>
        </motion.div>
        <motion.div 
          variants={icon(1.5)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <DiRedis className='text-7xl text-red-500'/>
        </motion.div>
        <motion.div 
          variants={icon(1.5)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <DiDotnet className='text-7xl text-blue-500'/>
        </motion.div>
        <motion.div 
          variants={icon(1.5)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <DiDocker className='text-7xl text-sky-700'/>
        </motion.div>
        <motion.div 
          variants={icon(1.5)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <SiKubernetes className='text-7xl text-blue-700'/>
        </motion.div>
        <motion.div 
          variants={icon(1.5)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <SiTailwindcss className='text-7xl text-blue-500'/>
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
