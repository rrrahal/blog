import React from 'react'
import { TwitterLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'

import { styled } from '../../../stitches.config'

const Box = styled('div', {
  display: 'flex',
  alignItems: 'center',
  marginRight: '$2'
})

const SocialMediaItem = styled('a', {
  paddingX: '$2',
})


export const SocialMedia = () => (
  <Box>
    <SocialMediaItem> <TwitterLogoIcon style={{
          width: 25,
          height: 25
        }}/> </SocialMediaItem>
        <SocialMediaItem> <LinkedInLogoIcon style={{
          width: 25,
          height: 25
        }}/> </SocialMediaItem>
  </Box>
)
