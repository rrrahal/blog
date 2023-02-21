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

const TwitterStyledIcon = styled(TwitterLogoIcon, {
  width: 25,
  height: 25,
  color: "$twitterBlue",
  "&:hover": {
    color: "$hover"
  }
})

const LinkedinStyledIcon = styled(LinkedInLogoIcon, {
  width: 25,
  height: 25,
  color: "$linkedinBlue",
  "&:hover": {
    color: "$hover"
  }
})


export const SocialMedia = () => (
  <Box>
    <SocialMediaItem> <TwitterStyledIcon/> </SocialMediaItem>
        <SocialMediaItem> <LinkedinStyledIcon /> </SocialMediaItem>
  </Box>
)
