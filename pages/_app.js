import { NextUIProvider} from '@nextui-org/react'
import { Navigation } from '../components/Navbar'

import { createTheme } from "@nextui-org/react"

const darkTheme = createTheme({
  type: 'dark'
});

export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider theme={darkTheme} >
        <Navigation />
      <Component {...pageProps} />
    </NextUIProvider>
    )
}
