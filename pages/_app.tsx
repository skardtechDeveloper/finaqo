import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css'
import '@/styles/responsive.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';
import { Open_Sans } from '@next/font/google';
import Mainlayout from '@/src/components/main-layout';

const sans = Open_Sans({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="img/favicon/cropped-logo22-32x32.png" sizes="32x32" />
        <link rel="icon" href="img/favicon/cropped-logo22-192x192.png" sizes="192x192" />
        <link rel="apple-touch-icon" href="img/favicon/cropped-logo22-180x180.png" />
        <style>{`
        html,body {
          font-family: ${sans.style.fontFamily};
        }
      `}</style>
      </Head>
      <Mainlayout>
        <Component {...pageProps} />
      </Mainlayout>
    </>
  )
}
