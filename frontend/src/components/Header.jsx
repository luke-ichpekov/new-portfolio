import React from 'react'
import avatar from '../avatar.jpg';
import { Box } from "@chakra-ui/react"
import { Avatar, AvatarGroup } from "@chakra-ui/react"
import { Text } from "@chakra-ui/react"
export default function Header() {
  return (
        <Box display="grid" gridTemplateColumns="repeat(4, 1fr)" padding="2" gap="clamp(4px, calc(-5.09px + 2.42vw), 24px)">
           <Avatar.Root className='w-20 h-20'>
              <Avatar.Fallback name="Luke Ichpekov" />
              <Avatar.Image src={avatar}  />
      </Avatar.Root>
        <Box gridColumn={"span 3"}>
          <Text className='text-white' textStyle="2xl" lineHeight="1.5" mt="1">
          Luke Ichpekov
          </Text>
          <Text className='text-white text-opacity-75' textStyle="sm" fontWeight="light">
          Software Engineer
          </Text>
        </Box>
        </Box>
  )
}
