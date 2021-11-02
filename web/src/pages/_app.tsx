import { Footer } from '@Components/containers/Footer'
import { Nav } from '@Components/containers/Nav'
import { AppProps } from 'next/dist/shared/lib/router/router'
import { AuthWrapper } from '@Components/wrappers/AuthWrapper'
import { Provider as ReduxProvider } from 'react-redux'
import { store } from '@Redux/store'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ReduxProvider store={store}>
      <AuthWrapper>
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </AuthWrapper>
    </ReduxProvider>
  )
}

export default MyApp
