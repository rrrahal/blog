import React from 'react'
import { styled } from '../../../stitches.config'
import * as Separator from '@radix-ui/react-separator';



const Box = styled('div', {
  display: 'flex',
  width: '100%'
})

const Title = styled('h1', {
  fontSize: '$5',
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



export const Header = () => {
  return (
    <>
    <Box>
      <Title>Rafael Rahal</Title>
      <Box css={{
        alignItems: 'center',
        justifyContent: 'space-around'
      }
      }>
        <SocialMediaItem>Twitter</SocialMediaItem>
        <SocialMediaItem>Linkedin</SocialMediaItem>
      </Box>
    </Box>
    <StyledSeparator />
    </>
  )
}
