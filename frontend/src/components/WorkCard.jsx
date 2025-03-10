import React from 'react'
import { Box } from "@chakra-ui/react"
import { Text } from "@chakra-ui/react"
export default function WorkCard() {
  return (
        <Box display="grid" gridTemplateColumns="repeat(4, 1fr)" gap="clamp(4px, calc(-5px + 2.42vw), 24px)"
         >
            <Box gridColumn={"span 1/span 1"}>

              <Text className='text-white' textStyle="lg"  mt="1">
              timeline
              </Text>
        
            </Box>
            <Box gridColumn={"span 3/span 3"}>
                          <Text className='text-white' textStyle="lg" mt="1">
              workexp Numba 1
              </Text>
            </Box>
        </Box>
  )
}
