import type { AppProps } from 'next/app';
import { store } from 'app/store';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material';
import { CacheProvider, EmotionCache } from '@emotion/react';

import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer } from 'react-toastify';
import { FC } from 'react';
import BaseHead from 'components/organisms/head/BaseHead';

import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

import 'assets/styles/app.css';
import 'assets/styles/gallery.css';
import 'assets/fonts/fontiran.css';
import 'assets/styles/tiny.css';

import createEmotionCache from 'createEmotionCache';
import { sLightTheme } from 'assets/theme';
import { CheckToken } from 'components/hoc/CheckToken';

let persistor = persistStore(store);
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const MyApp: FC<MyAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BaseHead />
        <CacheProvider value={emotionCache}>
          <ThemeProvider theme={sLightTheme}>
            <ToastContainer limit={3} />
            <CheckToken />
            <Component {...pageProps} />
          </ThemeProvider>
        </CacheProvider>
      </PersistGate>
    </Provider>
  );
};

export default MyApp;
