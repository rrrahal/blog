import React, { ReactNode } from 'react'

import { styled } from '../../../stitches.config'
import { Header } from '../Header'
import { BackButton } from '../BackButton'

type LayoutProps = {
  children: ReactNode
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

export default function PostLayout({ children } : LayoutProps) {
  return (
    <>
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
