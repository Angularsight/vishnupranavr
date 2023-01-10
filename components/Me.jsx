import Image from 'next/image';
import React from 'react';
import propic from '../public/mypic.jpeg';
import { motion } from 'framer-motion';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export default function Me() {
  return (
    <div className='h-screen*1.1 bg-slate-800'>

      <div className='flex flex-col items-center mt-20'>
        
        <h1 className=' mt-10 text-white/50 font-medium uppercase tracking-[10px] text-2xl'>About Me</h1>

        <div className='w-[400px] h-[500px] md:w-[600px] md:h-[600px] 
        bg-transparen mx-auto mt-10 flex flex-col justify-evenly items-center'>


            <motion.div
            initial={{y:-200,opacity:0}}
            transition={{duration:1.2}}
            whileInView={{y:0,opacity:1}}
            viewport={{once:false}}
            >
            <Image className='object-cover rounded-lg md:h-[300px] md:w-[200px]' src={propic} width={200} height={400} />
            </motion.div>

            
            <p className=' text-white/50 text-center mt-10'>
            Major tech mobile development enthusiast who has completely devoted himself in
            learning android development i.e. <span className=' text-cyan-500'>Flutter and android studio(Kotlin)</span>. I have also played
            around with libraries or dependencies such as <span className=' text-cyan-500'>Google Maps, firebase,
            Web3.dart(blockchain), APIs and so on.</span> In the process of learning I have implemented
            <span className=' text-cyan-500'>10+ applications and </span> three full-fledged application (e-commerce app).
            </p>

        </div>
      </div>
    </div>
  )
}
