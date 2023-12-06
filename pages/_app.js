import '../styles/global.scss';
import  Layout from "./layout/layout.js";

export default function App({ Component, pageProps }) {
    return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
    )
  }