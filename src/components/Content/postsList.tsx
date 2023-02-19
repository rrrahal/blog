import React from 'react'

import { postsType } from '@/types'
import { Post } from './post'

type PostsListProps = {
  posts: postsType
}


export const PostsList = ({ posts }: PostsListProps) => (
  <ul>
  {posts.map(({ id, date, title }) => (
    <Post id={id} title={title} key={id} />
  ))}
</ul>)
