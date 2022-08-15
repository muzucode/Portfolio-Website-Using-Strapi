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
        <link rel="stylesheet"
        href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/styles/atom-one-dark.min.css"/>
        <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/highlight.min.js"></script>

        <link rel="stylesheet" href="/path/to/styles/default.min.css"/>
        <script src="/path/to/highlight.min.js"></script>
        <script>hljs.highlightAll();</script>
      </Head>
      <Header></Header>
      <Component {...pageProps} />
    </>
  )

}

export default MyApp
