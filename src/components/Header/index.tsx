import React from 'react'
import Image from 'next/image'
import { TwitterLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import * as Separator from '@radix-ui/react-separator';

import { styled } from '../../../stitches.config'
import { Title } from './title'
import { SocialMedia } from './social_media';

const Box = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center'
})

const Container = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  width: '600px'
})

const StyledSeparator = styled(Separator.Root, {
  height: '1px',
  width: '100%',
  backgroundColor: '$hiContrast',
  maxWidth: '700px'
})

const StyledImage = styled(Image, {
  borderRadius: '100%',
  paddingY: '$2',
  marginLeft: '$4',
  width: 120,
  height: 120,
})



export const Header = () => {
  return (
    <>
    <Box>
      <Container>
        <StyledImage src='/raful.jpg' alt='A picture of Rafael Rahal' width={120} height={120} />
        <Title />
        <SocialMedia />
      </Container>
      <StyledSeparator />
    </Box>
    </>
  )
}