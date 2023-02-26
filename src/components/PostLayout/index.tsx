import React, { ReactNode } from 'react'
import Head from 'next/head'

import { styled } from '../../../stitches.config'
import { Header } from '../Header'
import { BackButton } from '../BackButton'

type LayoutProps = {
  children: ReactNode,
  metaTitle: string
}

const StyledButton = styled('div', {
  display: 'flex',
  justifyContent: 'center',
})

const ContentContainer = styled('div', {
  marginX: 'auto',
  paddingX: '$3',
  paddingTop: '$2',
  color: "$hiContrast",
  maxWidth: '$bigPostSize',
})

export default function PostLayout({ children, metaTitle } : LayoutProps) {
  console.log(children)
  return (
    <>
      <Head>
        <title>{metaTitle ? `${metaTitle} | Rafael Rahal ` : 'Rafael Rahal'}</title>
      </Head>
      <Header />
      <StyledButton>
        <BackButton />
      </StyledButton>
      <ContentContainer>
        {children}
      </ContentContainer>
    </>
  )
}
