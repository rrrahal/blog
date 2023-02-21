import React from 'react'

import { styled } from '../../../stitches.config'

const Box = styled('div', {
  display: 'flex',
  width: '100%',
  alignItems: 'center',
})

const Text = styled('h1', {
  color: "$hiContrast",
  fontSize: '$7',
  marginX: 'auto',
  '@bp1': {
    fontSize: '$titleSize'
  }
})


export const Title = () => (
  <Box>
    <Text>Rafael Rahal</Text>
  </Box>
)
