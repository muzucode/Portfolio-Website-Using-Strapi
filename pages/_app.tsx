import '../styles/styles.scss'
import type { AppProps } from 'next/app'
import Header from '../core/shared/Components/Header/Header'
import { useRouter } from 'next/router'
import 'animate.css';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <Header></Header>
      <Component {...pageProps} />
    </>
  )

}

export default MyApp
