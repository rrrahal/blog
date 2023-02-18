import React from 'react'
import Image from 'next/image'
import { TwitterLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import * as Separator from '@radix-ui/react-separator';

import { styled } from '../../../stitches.config'

const Box = styled('div', {
  display: 'flex',
  width: '100%',
  justifyItems: 'center'
})

const Title = styled('h1', {
  marginLeft: '$2',
  fontSize: '$6',
  width: '100%'
})

const SocialMediaItem = styled('a', {
  fontSize: '$4',
})

const StyledSeparator = styled(Separator.Root, {
  height: '1px',
  width: '100%',
  backgroundColor: '$hiContrast'
})

const StyledImage = styled(Image, {
  borderRadius: '100%',
  paddingY: '$2',
  marginLeft: '$4'
})



export const Header = () => {
  return (
    <>
    <Box>
      <StyledImage src='/raful.jpg' alt='A picture of Rafael Rahal' width={120} height={120} />
      <Title>Rafael Rahal</Title>
      <Box css={{
        alignItems: 'center',
        justifyContent: 'space-around'
      }
      }>
        <SocialMediaItem> <TwitterLogoIcon style={{
          width: 25,
          height: 25
        }}/> </SocialMediaItem>
        <SocialMediaItem> <LinkedInLogoIcon style={{
          width: 25,
          height: 25
        }}/> </SocialMediaItem>
      </Box>
    </Box>
    <StyledSeparator />
    </>
  )
}
