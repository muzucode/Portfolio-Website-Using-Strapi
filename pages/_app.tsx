import '../styles/styles.scss'
import type { AppProps } from 'next/app'
import Header from '../core/shared/Components/Header/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header></Header>
      <Component {...pageProps} />
    </>
  )

}

export default MyApp
