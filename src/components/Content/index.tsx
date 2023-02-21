import React from 'react'

import { postsType } from '@/types'
import { styled } from '../../../stitches.config'
import { ContentTabs } from './tabs'

type ContentProps = {
  posts: postsType
}


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


export const Content = ({ posts }: ContentProps) => (
  <Container>
    <ContentTabs posts={posts} />
  </Container>
)
