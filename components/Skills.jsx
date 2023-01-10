import React from 'react';
import SkillCircle from './SkillCircle';
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


export default function Skills() {
  return (
    <div className='w-screen h-screen*1.1 bg-slate-800 flex flex-col items-center justify-center'>
      
      <h1 className=' mt-10 mb-20 text-2xl text-white/50 font-medium uppercase tracking-[10px] text-center'>
        Skills
      </h1>
  

    <div className=' grid grid-cols-4 gap-5 md:gap-[45px] mt-[100px]'>


      <SkillCircle image={flutter}  title='Flutter'/>
      <SkillCircle image={dart}  title='Dart'/>
      <SkillCircle image={figma}  title='Figma'/>
      <SkillCircle image={firebase}  title='Firebase'/>
      <SkillCircle image={javascript}  title='Javascript'/>
      <SkillCircle image={maps}  title='Maps'/>
      <SkillCircle image={metamask}  title='Metamask'/>
      <SkillCircle image={python} title='Python' />
      <SkillCircle image={react}  title='React'/>
      <SkillCircle image={solidity}  title='Solidity'/>
      <SkillCircle image={tailwind}  title='TailwindCSS'/>
      <SkillCircle image={nextjs}  title='NextJS'/>

    </div>

    </div>
  )
}
