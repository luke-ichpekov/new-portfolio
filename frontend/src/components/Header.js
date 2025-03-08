import React from 'react'
import avatar from '../avatar.jpg';

export default function Header() {
  return (
        <div className='h-1/3 container flex justify-center p-20' >
        <img className="rounded-full w-24 h-24" src={avatar} alt="Avatar" />
        <div className='m-3 mx-5'>
          <h1 className='text-white text-2xl'>
          Luke Ichpekov
          </h1>
          <h2 className='text-white text-base'>
          Software Engineer
          </h2>
        </div>
        </div>
  )
}
