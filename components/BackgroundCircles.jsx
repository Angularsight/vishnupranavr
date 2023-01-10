import React from 'react';
import { motion } from 'framer-motion';

export default function BackgroundCircles() {

  return (
    <motion.div 
      initial={{scale:10,opacity:0.5}}
      animate={{scale:[1,2,4,3,1], opacity:[1.0,0.5,0.6,0.2,1.0]}}
      transition={{duration:1.4}}  
    className='absolute flex justify-center items-center mb-20 -mt-12'>
      <div className='absolute bg-transparent border border-cyan-600/20 rounded-full w-[200px] h-[200px] animate-pulse'></div>
      <div className='absolute bg-transparent border border-cyan-600/20 rounded-full w-[300px] h-[300px] animate-pulse'></div>
      <div className='absolute bg-transparent border border-cyan-600/40 rounded-full w-[400px] h-[400px] animate-pulse'/>
      <div className='absolute bg-transparent border border-cyan-600/50 rounded-full w-[500px] h-[500px] animate-pulse'/>
      <div className='absolute bg-transparent border border-cyan-600 rounded-full 
      w-[600px] h-[600px] animate-pulse'/>

    </motion.div>
  )
}
