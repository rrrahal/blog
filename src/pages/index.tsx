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
    <Box css={{ paddingY: '$2', height: '100vh'}}>
      <Head>
        <title>Use Stitches with Next.js</title>
      </Head>
      <Header/>
      <Content size={{ '@initial': '1', '@bp1': '2' }} css={{paddingY: '$2'}}>
      <Tabs.Root defaultValue="posts">
        <Tabs.List aria-label="Posts">
          <Tabs.Trigger value="posts">
            Posts
          </Tabs.Trigger>
          <Tabs.Trigger value="about">
            About
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value='posts' >
          <Text>Here are the posts</Text>
        </Tabs.Content>
        <Tabs.Content value='about' >
          <Text>Here is the about</Text>
        </Tabs.Content>
      </Tabs.Root>
      </Content>
    </Box>
  )
}
