import Head from 'next/head'

import { getSortedPostsData } from '../lib/posts';
import { styled } from '../../stitches.config'
import { postsType } from '@/types';

import { Header } from '../components/Header'
import { Content } from '../components/Content'


type HomeProps = {
  allPostsData: postsType
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

const Box = styled('div', {
  paddingY: '$2', height: '100vh'
})

export default function Home({ allPostsData }: HomeProps) {
  return (
    <Box>
      <Head>
        <title>Home | Rafael Rahal</title>
      </Head>
      <Header/>
      <Content posts={allPostsData} />
    </Box>
  )
}
