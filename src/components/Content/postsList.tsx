import React from 'react'

import { postsType } from '@/types'
import { Post } from './post'
import { styled } from '../../../stitches.config'

type PostsListProps = {
  posts: postsType
}

const StyledList = styled('ul', {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  paddingTop: '$5'
})


export const PostsList = ({ posts }: PostsListProps) => (
  <StyledList>
  {posts.map(({ id, date, title }) => (
    <Post id={id} title={title} key={id} date={date} />
  ))}
</StyledList>)
