import React from 'react'
import { Box } from "@chakra-ui/react"
import { Text } from "@chakra-ui/react"
import WorkCard from './WorkCard'

export default function WorkExperience() {
  return (
    <>
    <Text className='text-white' textStyle="md" >
      Work Experience
    </Text>
    <WorkCard />
    </>
  )
}
