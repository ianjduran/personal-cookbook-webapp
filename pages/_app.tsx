
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {Ubuntu, Kanit} from '@next/font/google'

const ubuntu = Ubuntu({
  weight:['400','500','700'],
  subsets:['latin'],
  variable:'--font-ubuntu',
})

const kanit = Kanit({
  weight:['400','500','700'],
  subsets:['latin'],
  variable:'--font-kanit',
})


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={`${kanit.variable} ${ubuntu.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
