import React from 'react'
import Link from 'next/link'


import { ArrowLeftIcon } from '@radix-ui/react-icons'

import { styled } from 'stitches.config'

const ButtonContainer = styled('div', {
  width: '120px',
  height: '30px',
  borderBottom: '1px solid $hiContrast',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

const StyledButton = styled('button', {
  color: "$hiContrast",
  paddingY: "$1",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  width: '65px',
  height: '100%',
  fontSize: '$5'
})

const StyledLink = styled(Link, {
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})


export const BackButton = () => {
  return (
    <ButtonContainer>
    <StyledLink href="/">
      <StyledButton> <ArrowLeftIcon /><p>Home</p> </StyledButton>
    </StyledLink>
    </ButtonContainer>)

}
