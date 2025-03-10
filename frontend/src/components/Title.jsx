import { Text } from '@chakra-ui/react'
import React from 'react'

export default function Title({title}) {
  return (
    <Text className='text-white' textStyle="md" >
      {title}
    </Text>
  )
}
