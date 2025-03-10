import React from 'react'
import { Avatar } from '@chakra-ui/react'
import avatar from '../avatar.jpg';
export default function ProjectCard() {
  return (
    <Avatar.Root className='w-16 h-16 '>
        <Avatar.Fallback name="Luke Ichpekov" />
        <Avatar.Image src={avatar}  />
        </Avatar.Root>
  )
}
