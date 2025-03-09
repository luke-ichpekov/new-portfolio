import React from 'react'
import { Box } from "@chakra-ui/react"
import { Text } from "@chakra-ui/react"

export default function About() {
  return (
    <Box>
    <Text className='text-white' textStyle="md" >
      About
    </Text>
    <Text className='text-white' textStyle="xs" >
      Summary about who I am 
    </Text>
    </Box>
  )
}
