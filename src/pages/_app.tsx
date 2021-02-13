import type {AppProps} from 'next/app'

import '@styles/globals.css'
import '@styles/DateTimePicker/DateTimePicker.css'
import '@styles/DateTimePicker/Calendar.css'
function Application({ Component, pageProps } : AppProps) {
  return <Component {...pageProps} />
}

export default Application
