import React from 'react'
import {  Grid, GridItem } from "@chakra-ui/react"

export default function DoubleColumn({Element1, Element2}) {
  return (
    <Grid
    templateColumns="repeat(4, 1fr)" gap={"10"}  >
          <GridItem colSpan={1}>

            <Element1 />

          </GridItem>
          {Element2 && 
        <GridItem colSpan={3}>
            <Element2 />
        </GridItem>
        }
      </Grid>
  )
}
