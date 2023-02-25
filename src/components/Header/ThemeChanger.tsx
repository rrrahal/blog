import React from 'react'
import * as Switch from '@radix-ui/react-switch';

import { styled } from '../../../stitches.config'


const Container = styled('div', {
  display:'flex',
  alignItems: 'center',
  height: '100%',
  justifyContent: 'center'
})

const SwitchRoot = styled(Switch.Root, {
  width: '48px',
  height: '20px',
  borderRadius: '30px',
  position: 'relative',
  border: '1px solid $hiContrast',
})

const SwitchThumb = styled(Switch.Thumb, {
  display: 'block',
  width: 18,
  height: 18,
  backgroundColor: '$hiContrast',
  borderRadius: '9999px',
  transition: 'transform 100ms',
  transform: 'translateX(2px)',

  '&[data-state=checked]': {
    transform: 'translateX(28px)',
  },
})

export const ThemeChanger = () => (
  <Container>
    <SwitchRoot >
      <SwitchThumb />
    </SwitchRoot>
  </Container>)
