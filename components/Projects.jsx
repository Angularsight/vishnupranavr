import React from 'react';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';
import airportify from '../public/Airportify.png';
import Leagues from '../public/Leagues.png';
import Usurper from '../public/Usurper.png';
import Chainz from '../public/Chainz.png';
import Thrift from '../public/Thrift.png';
import Image from 'next/image';
import flutter from '../public/skills/flutter.png';
import solidity from '../public/skills/solidity.png';
import metamask from '../public/skills/metamask.png';
import maps from '../public/skills/maps.png';
import dart from '../public/skills/dart.png';
import firebase from '../public/skills/firebase.png';
import javascript from '../public/skills/javascript.png';
import python from '../public/skills/python.png';
import react from '../public/skills/react.png';
import tailwind from '../public/skills/tailwind.png';
import nextjs from '../public/skills/nextjs.png';
import figma from '../public/skills/figma.png';



export default function Projects() {
  return (
    <div className=' h-screen*1.1 bg-slate-800'>

      <div className='flex flex-col items-center mt-20'>
        
        <h1 className='mt-10 text-2xl text-white/50 font-medium uppercase tracking-[10px] text-center'>
          Projects
        </h1>

        <div className=' ml-10 w-full flex space-x-10 overflow-x-scroll snap-x snap-proximity scrollbar-track-slate-500 scrollbar-thumb-cyan-400'>
          
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
        <div className=' overflow-ellipsis text-[11px] text-white/75'>Though blockchain is awesome and effective, the majority of people are unaware of it and its
          advantages. So we created an app which works on both android and ios devices which is completely based on blockchain and smart contracts. Our app allows its users to operate and expand their businesses’ as smoothly as possible using blockchain technology. Any user who enters is primarily asked to create an account which
          contains account balance which is stored on the blockchain.</div>
      
          </div>
          
          <div className='h-[600px] w-[350px] bg-gradient-to-b from-teal-400/5 to-slate-900/60 my-10 rounded-lg 
          flex flex-col p-7 flex-shrink-0 snap-center'>
            
            <motion.div
              initial={{y:-100,opacity:0}}
              transition={{duration:1}}
              whileInView={{y:0,opacity:1}}
              viewport={{once:false}}>
              <Image className='mx-auto' src={Leagues} height={100} width={100}/>
            </motion.div>

            <h1 className=' mt-5 text-xl text-center font-semibold text-white/75 tracking-widest'>
              Leagues
            </h1>

            <h2 className='mt-7 text-white/75 font-mono font-medium'> <span className='font-mono font-medium text-cyan-400'>Project</span> <br /> Leagues - Offline Platform</h2>
            <h2 className='mt-5 text-cyan-400 font-mono font-medium'>Tools used </h2>

            <div className='mt-2 flex flex-row justify-start items-center space-x-4'>
              
              <Image className='h-10 w-10 p-1 cursor-pointer object-contain rounded-full border border-cyan-300' src={flutter} alt=''/>
              <Image className='h-10 w-10 p-1 cursor-pointer object-cover rounded-full border border-cyan-300' src={firebase} alt=''/>
              <Image className='h-10 w-10 p-1 cursor-pointer object-cover rounded-full border border-cyan-300' src={dart} alt=''/>
              <Image className='h-10 w-10 p-1 cursor-pointer object-cover rounded-full border border-cyan-300' src={maps} alt=''/>

            </div>

            <h2 className='mt-7 text-cyan-400 font-mono font-medium'>Brief</h2>
            <div className=' overflow-ellipsis text-[11px] text-white/75'>Leagues is a party meets dating community startup. We arrange parties for the purpose of dating which includes soothing ambience along with games, food , beverages and new photogenic spots. Partying and dating has become part of current generation's lifestyle. We at Leagues try to provide the best experience to our users who are looking forward to such lifestyle.</div>
    
          </div>
          
          <div className='h-[600px] w-[350px] bg-gradient-to-b from-teal-400/5 to-slate-900/60 my-10 rounded-lg 
          flex flex-col p-7 flex-shrink-0 snap-center'>
            
            <motion.div
              initial={{y:-100,opacity:0}}
              transition={{duration:1}}
              whileInView={{y:0,opacity:1}}
              viewport={{once:false}}>
              <Image className='mx-auto' src={airportify} height={100} width={100}/>
            </motion.div>

            <h1 className=' mt-5 text-xl text-center font-semibold text-white/75 tracking-widest'>
              Airportify
            </h1>

            <h2 className='mt-7 text-white/75 font-mono font-medium'> <span className='font-mono font-medium text-cyan-400'>Project</span> <br /> Airport services</h2>
            <h2 className='mt-5 text-cyan-400 font-mono font-medium'>Tools used </h2>

            <div className='mt-2 flex flex-row justify-start items-center space-x-4'>
              
              <Image className='h-10 w-10 p-1 cursor-pointer object-contain rounded-full border border-cyan-300' src={figma} alt=''/>
              <Image className='h-10 w-10 p-1 cursor-pointer object-cover rounded-full border border-cyan-300' src={dart} alt=''/>
              <Image className='h-10 w-10 p-1 cursor-pointer object-cover rounded-full border border-cyan-300' src={flutter} alt=''/>

            </div>

            <h2 className='mt-7 text-cyan-400 font-mono font-medium'>Brief</h2>
            <div className=' overflow-ellipsis text-[11px] text-white/75'>Carrying bags and navigating through airport in a short span of a time is some what of a problem. To solve this problem we have created an app which allows users to book buggy's and trolley's which would take care of them and their bags right after check-in. Airportify is delivering and ensuring your comfort, whether you’re arriving, departing, going to receive or pick your loved ones.Our Porter team will ease your journey where you don’t need to drag or load your luggage to the airport hassle’s. Also helps you get the loading & off-loading with reliability by saving your energy that gets wasted on unnecessary actions. </div>
    
          </div>
          
          <div className='h-[600px] w-[350px] bg-gradient-to-b from-teal-400/5 to-slate-900/60 my-10 rounded-lg 
          flex flex-col p-7 flex-shrink-0 snap-center'>
            
            <motion.div
              initial={{y:-100,opacity:0}}
              transition={{duration:1}}
              whileInView={{y:0,opacity:1}}
              viewport={{once:false}}>
              <Image className='mx-auto' src={Usurper} height={100} width={100}/>
            </motion.div>

            <h1 className=' mt-5 text-xl text-center font-semibold text-white/75 tracking-widest'>
              Usurper 
            </h1>

            <h2 className='mt-7 text-white/75 font-mono font-medium'> <span className='font-mono font-medium text-cyan-400'>Project</span> <br /> App & Website Agency</h2>
            <h2 className='mt-5 text-cyan-400 font-mono font-medium'>Tools used </h2>

            <div className='mt-2 flex flex-row justify-start items-center space-x-4'>
              

              <Image className='h-10 w-10 p-1 cursor-pointer object-cover rounded-full border border-cyan-300' src={react} alt=''/>
              <Image className='h-10 w-10 p-1 cursor-pointer object-cover rounded-full border border-cyan-300' src={flutter} alt=''/>
              <Image className='h-10 w-10 p-1 cursor-pointer object-cover rounded-full border border-cyan-300' src={tailwind} alt=''/>
              <Image className='h-10 w-10 p-1 cursor-pointer object-cover rounded-full border border-cyan-300' src={figma} alt=''/>
              <Image className='h-10 w-10 p-1 cursor-pointer object-contain rounded-full border border-cyan-300' src={nextjs} alt=''/>
            </div>

            <h2 className='mt-7 text-cyan-400 font-mono font-medium'>Brief</h2>
            <div className=' overflow-ellipsis text-[11px] text-white/75'>Usurper Apps is founded with the intention of adding more crisp and flavor to app development field by introducing 3D, trending designs and over the top UX to apps</div>
          
          </div>

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
              Thrift Shop
            </h1>

            <h2 className='mt-7 text-white/75 font-mono font-medium'> <span className='font-mono font-medium text-cyan-400'>Project</span> <br /> E-commerce app</h2>
            <h2 className='mt-5 text-cyan-400 font-mono font-medium'>Tools used </h2>

            <div className='mt-2 flex flex-row justify-start items-center space-x-4'>
              
              <Image className='h-10 w-10 p-1 cursor-pointer object-contain rounded-full border border-cyan-300' src={flutter} alt=''/>
              <Image className='h-10 w-10 p-1 cursor-pointer object-cover rounded-full border border-cyan-300' src={firebase} alt=''/>

            </div>

            <h2 className='mt-7 text-cyan-400 font-mono font-medium'>Brief</h2>
            <div className=' overflow-ellipsis text-[11px] text-white/75'>Thrift shop is basically built for small clothing shops who have difficult time in marketing their products. Thrift shop app provides a platform for all these people who tend to find customers on a daily basis and are looking to expand their business.Multiple thrift stores in India have shops set up on Instagram. They are quickly and vehemently spreading the anti-fast fashion movement. All the things these small business owners sell are pre-loved and sometimes quirky.</div>
          
          </div>

        </div>

      </div>


    </div>
  )
}
