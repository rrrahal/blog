import React from 'react'
import Head from 'next/head'

import { styled } from '../../../stitches.config'

const Text = styled('p', {
  margin: 0,
  paddingTop: '$5',
})

export const About = () => 
  <>
    <Head>
        <title>About | Rafael Rahal</title>
    </Head>
    <Text>
    Im a 🇧🇷 / 🇮🇹 Software Engineer, currently working for Talkdesk.
    My experiences are with both frontend and backend development and my true passion is to help products that change lives and are a delight to peoples eyes.
    Im always trying to learn new things but lately Ive been into the React ecosystem and functional programming. I also love cooking and sports.
    My college education was done both in Brazil and in Portugal. Ive been living in Europe since September of 2020, Im always willing to take on a new challenge and get out of my comfort zone.
    </Text>
  </>
