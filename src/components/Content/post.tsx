import Link from 'next/link'
import React from 'react'


export const Post = ({id, title} : {id: string, title: string}) => {
  return <Link href={`posts/${id}`}> {title}</Link>
}
