import React from 'react';
import {PhoneIcon,MapPinIcon,EnvelopeIcon} from '@heroicons/react/24/solid';
import {useForm, SubmitHandler} from 'react-hook-form';

export default function Footer() {

  const { register, handleSubmit} = useForm();
  const onSubmit = data => {
    window.location.href = `mailto:angularsight77@gmail.com?subject=${data.phoneNo}&body=${data.message}`
  };


  return (
    <div className='h-screen bg-slate-800 mt-[250px] flex flex-col items-center'>
      
      <h1 className=' mt-10 mb-5 text-2xl text-white/50 font-medium uppercase tracking-[10px] text-center'>
        Contact
      </h1>
      <h1 className=' mt-10 mb-10 text-2xl text-white font-medium  text-center'>I've got the skills. You've got the need. <br />Lets Talk 😀
      </h1>


      <div className='w-[300px] h-[300px] bg-transparent flex flex-col justify-center items-center space-y-8'>
        
        <div className='flex space-x-5 mr-5'>
          <PhoneIcon className='w-[25px] h-[25px] text-cyan-400'/>
          <h1 className='text-white/50 font-medium text-lg'>+917411001185</h1>
        </div>
        
        <div className='flex space-x-5'>
          <EnvelopeIcon className='w-[25px] h-[25px] text-cyan-400'/>
          <h1 className='text-white/50 font-medium text-lg'>angularsight77@gmail.com</h1>
        </div>
        
        <div className='flex space-x-5'>
          <MapPinIcon className='w-[25px] h-[25px] text-cyan-400'/>
          <h1 className='text-white/50 font-medium text-lg'>Rajajinagar, Bangalore</h1>
        </div>
      
      </div>      

      <form onSubmit={handleSubmit(onSubmit)} className='mt-[50px] flex flex-col space-y-2 mx-auto w-fit mb-10'>

        <div className='flex space-x-2'>
          <input {...register('name')} className='contactInput' placeholder='Name' type="text" />
          <input {...register('phoneNo')} className='contactInput' placeholder='Phone Number' type="text" />
        </div>

        <input {...register('email')} className='contactInput' placeholder='Email Address' type="text" />

        <textarea {...register('message')} className='contactInput' placeholder='Description'/>

        <button className=' bg-cyan-400 py-2 px-10 rounded-sm text-black font-semibold text-lg'>
          Submit
        </button>

      </form>

    </div>
  )
}
