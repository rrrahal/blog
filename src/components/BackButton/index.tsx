import React from 'react'
import Link from 'next/link'


import { ArrowLeftIcon } from '@radix-ui/react-icons'

import { styled } from 'stitches.config'
// TODO REMOVE THIS PX FROM THIS FILE

const ButtonContainer = styled('div', {
  width: '100px',
  height: '40px',
  borderBottom: '1px solid $borders',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

const StyledButton = styled('button', {
  color: "$hiContrast",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  fontSize: '$5',
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
