import Image from 'next/image';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import proPic from '../public/propic.png';
import Link from 'next/link';

export default function Hero() {

    const [text,count] = useTypewriter({
        words:["Hello, my name is Vishnu Pranav R",
        "<Welcome to my Portfolio Realm />",
        "Contact Me To Discuss Any Project"],

        loop:true,
        delaySpeed:500,

    })

  return (
  
    <div className='h-screen flex flex-col space-y-3 justify-center items-center text-center overflow-hidden'>
      
      <BackgroundCircles />

      <Image className='relative object-contain rounded-full mx-auto cursor-pointer' 
      src={proPic} width={100}height={100}/>

      <div>

        <h2 className=' p-2 text-white/50 font-semibold uppercase tracking-[10px] text-sm'>
          Software Engineer</h2>
        
        <h1>
          <span className=' text-white font-medium text-xl md:text-3xl mr-3'>{text}</span> 
          <Cursor cursorColor='#008080' />
        </h1>

        <div className='relative flex my-5 justify-around space-x-3'>
          <Link href="#me">
            <h1 className='text-white/50 font-semibold 
            p-2 rounded-md text-center cursor-pointer hover:text-orange-500'>About Me</h1>
          </Link>
          <Link href="#projects">
            <h1 className='text-white/50 font-semibold 
            p-2 rounded-md text-center cursor-pointer hover:text-orange-500'>My Projects</h1>
          </Link>
          <Link href="#skills">
            <h1 className='text-white/50 font-semibold 
            p-2 rounded-md text-center cursor-pointer hover:text-orange-500'>Skills</h1>
          </Link>
          <Link href="#skills">
            <h1 className='text-white/50 font-semibold 
            p-2 rounded-md text-center cursor-pointer hover:text-orange-500'>Experience </h1>
          </Link>

          <Link href="#contact">
            <h1 className='text-white/50 font-semibold 
            p-2 rounded-md text-center cursor-pointer hover:text-orange-500'>Contact</h1>
          </Link>
{/* 
          <h1 className='text-white/50 font-semibold 
           p-2 rounded-md text-center cursor-pointer hover:text-orange-500'>My Projects</h1>
          <h1 className='text-white/50 font-semibold 
           p-2 rounded-md text-center cursor-pointer hover:text-orange-500'>Skills</h1>
          <h1 className='text-white/50 font-semibold 
           p-2 rounded-md text-center cursor-pointer hover:text-orange-500'>Experience</h1>
          <h1 className='text-white/50 font-semibold 
           p-2 rounded-md text-center cursor-pointer hover:text-orange-500'>Contact</h1>
        </div> */}

      </div>
    
    </div>

    </div>

  )
}
