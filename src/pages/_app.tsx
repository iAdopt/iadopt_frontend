import '../styles/base.css'
import type { AppProps } from 'next/app'
import { Provider } from "react-redux"
import { store } from "../../stateStore/store"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}> 
      <Component {...pageProps} />
    </Provider>

  )
}
export default MyApp
