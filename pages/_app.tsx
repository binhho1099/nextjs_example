import '@interceptors/request';
import '@interceptors/response';

import type { AppProps } from 'next/app';

import 'antd/dist/reset.css';

import '../components/index.scss';

import { Layout } from '@components/layout';
import { store } from '@store/index';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
