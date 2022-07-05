import Layout from '../component/Layout'
import '../styles/globals.css'
import {wrapper} from '../features/store'

function MyApp({ Component, pageProps }) {
  return (
  <Layout>
  <Component {...pageProps} />
  </Layout>
  )
}

export default wrapper.withRedux(MyApp);
