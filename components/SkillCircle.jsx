

import React from 'react';
import Image from 'next/image';
import flutter from '../public/skills/flutter.png'
import solidity from '../public/skills/solidity.png'
import metamask from '../public/skills/metamask.png'
import maps from '../public/skills/maps.png'


export default function SkillCircle({image,title}) {
  return (
    <div className='flex flex-col items-center'>
        <Image className='h-20 w-20 relative rounded-full mr-8 hover:border hover:border-cyan-500 
        p-2 object-contain hover:cursor-pointer' src={image} height={80} width={80}/>
        <h1 className='mr-8 text-white/75'>{title}</h1>
    </div>

  )
}
