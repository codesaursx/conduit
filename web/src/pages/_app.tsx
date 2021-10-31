import { Footer } from '@Components/containers/Footer'
import { Nav } from '@Components/containers/Nav'
import { AppProps } from 'next/dist/shared/lib/router/router'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
