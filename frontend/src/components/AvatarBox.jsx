import { Avatar } from '@chakra-ui/react'
import avatar from '../avatar.jpg';
import React from 'react'
export default function AvatarBox() {
  return (
    <Avatar.Root className='w-24 h-24'>
        <Avatar.Fallback name="Luke Ichpekov" />
        <Avatar.Image src={avatar}  />
        </Avatar.Root>
  )
}
