import type { AppProps } from 'next/app';

import 'antd/dist/reset.css';

import '../styles/sass/index.scss';

import { Layout } from '@components/layouts';
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
