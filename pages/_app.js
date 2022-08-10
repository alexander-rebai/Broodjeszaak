import Layout from "../components/Layout";
import Router from 'next/router'
import "../styles/globals.css";
import store from "../redux/store";
import { Provider } from "react-redux";
import NProgress from 'nprogress'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {

  NProgress.configure({ showSpinner: false })

  Router.events.on('routeChangeStart', () => {
    NProgress.start()
  });

  Router.events.on('routeChangeComplete', () => {
    NProgress.done()
  });


  return (
    <>
      <Head>
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css' integrity='sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==' crossOrigin='anonymous' referrerPolicy='no-referrer' />
      </Head>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}

export default MyApp;
