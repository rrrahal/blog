import React, { useState, useEffect } from 'react'
import * as Switch from '@radix-ui/react-switch';
import { useTheme } from "next-themes";

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

export const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
    <Container>
      <SwitchRoot >
      <SwitchThumb />
    </SwitchRoot>
    </Container>)
  }


  const onThemeChange = (selected : boolean) => {
    setTheme(selected ? "dark" : 'light')
  }

  return (
  <Container>
    <SwitchRoot onCheckedChange={onThemeChange} checked={theme == 'dark'} >
      <SwitchThumb />
    </SwitchRoot>
  </Container>
  )
}
