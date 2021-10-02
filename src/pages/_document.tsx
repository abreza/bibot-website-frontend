import createEmotionServer from '@emotion/server/create-instance';
import createEmotionCache from 'createEmotionCache';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { sLightTheme } from 'assets/theme';
import React from 'react';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="fa">
        <Head>
          <meta name="theme-color" content={sLightTheme.palette.primary.main} />
        </Head>
        {/* Todo: fix ltr later */}
        <body dir="rtl">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App: any) => (props) =>
        <App emotionCache={cache} {...props} />,
    });

  const initialProps = await Document.getInitialProps(ctx);
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      ...React.Children.toArray(initialProps.styles),
      ...emotionStyleTags,
    ],
  };
};
