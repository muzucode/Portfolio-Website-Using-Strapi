import '../styles/styles.scss'
import type { AppProps } from 'next/app'
import Header from '../core/shared/Components/Header/Header'
import { useRouter } from 'next/router'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <Head>
        <link rel="stylesheet" href="/path/to/styles/default.min.css"/>
      </Head>
      {/* <Header></Header> */}
      <Component {...pageProps} />
    </>
  )

}

export default MyApp
