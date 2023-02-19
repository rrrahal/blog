import React from 'react'

import { styled } from '../../../stitches.config'

import { ContentTabs } from './tabs'

const Container = styled('div', {
  marginX: 'auto',
  paddingX: '$3',
  paddingTop: '$2',
  color: "$primary",
  maxWidth: '$bigContentSize',
  '@bp1': {
    maxWidth: '$smallContentSize'
  }
})


export const Content = () => (
  <Container>
    <ContentTabs />
  </Container>
)
