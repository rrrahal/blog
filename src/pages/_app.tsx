import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { Roboto } from '@next/font/google'

import { darkTheme } from "stitches.config";

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700']
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      value={{
        light: "light",
        dark: darkTheme.className
      }}
    >
      <main className={roboto.className}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  )
}
