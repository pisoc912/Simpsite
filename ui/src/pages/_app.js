import { UserProvider, useUser } from '@/context/UserContext'
import '@/styles/globals.css'
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  return <UserProvider><Component {...pageProps} /></UserProvider>
}
