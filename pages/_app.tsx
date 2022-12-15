import '../styles/styles.scss'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Sean Hickey | Web Developer</title>
        <link rel="shortcut icon" href="/favicon.ico"/>
      </Head>
      {/* <Header></Header> */}
      <Component {...pageProps} />
    </>
  )

}

export default MyApp
