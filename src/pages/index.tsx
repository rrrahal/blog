import Head from 'next/head'
import * as Tabs from '@radix-ui/react-tabs';

import { styled } from '../../stitches.config'

import { Header } from '../components/Header'

const Box = styled('div', {})

const Text = styled('p', {
  fontFamily: '$system',
  color: '$secondary',
})

const Link = styled('a', {
  fontFamily: '$system',
  textDecoration: 'none',
  color: '$hiContrast',
})

const Content = styled('div', {
  marginX: 'auto',
  paddingX: '$3',
  color: "$primary",
  variants: {
    size: {
      1: {
        maxWidth: '300px',
      },
      2: {
        maxWidth: '585px',
      },
      3: {
        maxWidth: '865px',
      },
    },
  },
})

export default function Home() {
  return (
    <Box css={{ paddingY: '$6' }}>
      <Head>
        <title>Use Stitches with Next.js</title>
      </Head>
      <Header/>
      <Content size={{ '@initial': '1', '@bp1': '2' }}>

      </Content>
    </Box>
  )
}
