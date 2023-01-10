

import React from 'react';
import { motion } from 'framer-motion';
import airportify from '../public/Airportify.png';
import Leagues from '../public/Leagues.png';
import Usurper from '../public/Usurper.png';
import Chainz from '../public/Chainz.png';
import Image from 'next/image';
import flutter from '../public/skills/flutter.png'
import solidity from '../public/skills/solidity.png'
import metamask from '../public/skills/metamask.png'
import maps from '../public/skills/maps.png'

export default function ProjectCard() {
  return (
    <div className='h-[600px] w-[350px] bg-gradient-to-b from-teal-400/5 to-slate-900/60 my-10 rounded-lg 
    flex flex-col p-7 flex-shrink-0 snap-center'>
      
      <motion.div
        initial={{y:-100,opacity:0}}
        transition={{duration:1}}
        whileInView={{y:0,opacity:1}}
        viewport={{once:false}}>
        <Image className='mx-auto' src={Chainz} height={100} width={100}/>
      </motion.div>

      <h1 className=' mt-5 text-xl text-center font-semibold text-white/75 tracking-widest'>
        Chainz
      </h1>

      <h2 className='mt-7 text-white/75 font-mono font-medium'> <span className='font-mono font-medium text-cyan-400'>Project</span> <br /> Supplychain with Blockchain</h2>
      <h2 className='mt-5 text-cyan-400 font-mono font-medium'>Tools used </h2>

      <div className='mt-2 flex flex-row justify-start items-center space-x-4'>
        
        <Image className='h-10 w-10 p-1 cursor-pointer object-contain rounded-full border border-cyan-300' src={flutter} alt=''/>
        <Image className='h-10 w-10 p-1 cursor-pointer object-cover rounded-full border border-cyan-300' src={metamask} alt=''/>
        <Image className='h-10 w-10 p-1 cursor-pointer object-cover rounded-full border border-cyan-300' src={solidity} alt=''/>
        <Image className='h-10 w-10 p-1 cursor-pointer object-cover rounded-full border border-cyan-300' src={maps} alt=''/>

      </div>

      <h2 className='mt-7 text-cyan-400 font-mono font-medium'>Brief</h2>
      <p className=' overflow-ellipsis text-[11px] text-white/75'>Though blockchain is awesome and effective, the majority of people are unaware of it and its
        advantages. So we created an app which works on both android and ios devices which is completely based on blockchain and smart contracts. Our app allows its users to operate and expand their businesses’ as smoothly as possible using blockchain technology. Any user who enters is primarily asked to create an account which
        contains account balance which is stored on the blockchain.</p>
    
    </div>
  )
}
