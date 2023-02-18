import Head from 'next/head'
import { styled } from '../../stitches.config'

const Box = styled('div', {})

const Text = styled('p', {
  fontFamily: '$system',
  color: '$gray9',
})

const Link = styled('a', {
  fontFamily: '$system',
  textDecoration: 'none',
  color: '$blue9',
})

const Container = styled('div', {
  marginX: 'auto',
  paddingX: '$3',
  color: "$sand9",
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
      <Container size={{ '@initial': '1', '@bp1': '2' }}>
        <Text as="h1">Hello, from Stitches.</Text>
        <Text>
          For full documentation, visit{' '}
          <Link href="https://stitches.dev">stitches.dev</Link>.
        </Text>
        Please visit this link <Link href="/posts/my-mdx-page">here</Link>
      </Container>
    </Box>
  )
}
