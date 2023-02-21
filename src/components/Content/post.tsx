import Link from 'next/link'
import React from 'react'
import { parseISO, format } from 'date-fns';

import { styled } from '../../../stitches.config'

// TODO REMOVE PX FROM THIS FILE

const ContainerLink = styled('div', {
  height: '50px',
  display: 'flex',
  justifyContent: 'space-between',
  justifyItems: 'center'
})

const PostLink = styled(Link, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '$hiContrast'
})

const DateText = styled('time', {
  color: '$hiContrast',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: 0
})

export const Post = ({id, title, date} : {id: string, title: string, date: string}) => {
  const dateISO = parseISO(date);
  return (
    <ContainerLink>
      <PostLink href={`posts/${id}`}> {title}</PostLink>
      <DateText dateTime={date}>{format(dateISO, 'LLLL d, yyyy')}</DateText>
    </ContainerLink>
  )
}
