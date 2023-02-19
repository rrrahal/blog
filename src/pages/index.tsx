import Head from 'next/head'

import { styled } from '../../stitches.config'

import { Header } from '../components/Header'
import { Content } from '../components/Content'

const Box = styled('div', {
  paddingY: '$2', height: '100vh'
})

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Home | Rafael Rahal</title>
      </Head>
      <Header/>
      <Content />
    </Box>
  )
}
