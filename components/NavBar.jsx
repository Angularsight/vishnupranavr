import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function NavBar() {
  return (
    <header className=' md:sticky top-0 justify-between max-w-7xl mx-auto z-20'> 

        <div className='flex flex-row items-center justify-between mx-5 md:mx-10 '>

            <motion.div
                initial ={{
                    opacity : 0,
                    x : -50,
                }}
                transition = {{duration : 1}}
                animate = {{
                    opacity:1,
                    x:0
                }}>
            <SocialIcon className=' hover:text-orange-500 hover:scale-105' fgColor='gray' bgColor='transparent'  url='https://www.linkedin.com/in/vishnu-pranav-r-b4b069214/'/>
            <SocialIcon className=' hover:text-orange-500 hover:scale-105' fgColor='gray' bgColor='transparent'  url='https://twitter.com/VishnuP68587346'/>
            <SocialIcon className=' hover:text-orange-500 hover:scale-105' fgColor='gray' bgColor='transparent'  url='https://www.instagram.com/vishnupranav3/'/>
           
            </motion.div>

            <motion.div 
            initial={{x:20,opacity:0}}
            transition={{duration:1}}
            animate ={{x:0,opacity:1}}

            className='flex items-center'>
                
                <Link className='flex items-center' href="#contact">
                    <SocialIcon className=' hover:text-orange-500 hover:scale-105' fgColor='gray' bgColor='transparent' network='email'/>
                    <h2 className='hover:text-cyan-500 hover:scale-105
                    text-md text-gray-500 font-semibold cursor-pointer'>
                    Get in touch</h2>
                </Link>

            </motion.div>

        </div>


    </header>
  )
}
