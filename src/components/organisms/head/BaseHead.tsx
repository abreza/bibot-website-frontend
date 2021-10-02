/* eslint-disable @next/next/no-css-tags */
import Head from 'next/head';

const BaseHead = () => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <link rel="icon" href={process.env.PUBLIC_URL + 'logo.png'} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />

      <meta
        name="description"
        content="Web site created using create-react-app"
      />

      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href={process.env.PUBLIC_URL + '/favicon/apple-icon-57x57.png'}
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href={process.env.PUBLIC_URL + '/favicon/apple-icon-60x60.png'}
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href={process.env.PUBLIC_URL + '/favicon/apple-icon-72x72.png'}
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href={process.env.PUBLIC_URL + '/favicon/apple-icon-76x76.png'}
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href={process.env.PUBLIC_URL + '/favicon/apple-icon-114x114.png'}
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href={process.env.PUBLIC_URL + '/favicon/apple-icon-120x120.png'}
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href={process.env.PUBLIC_URL + '/favicon/apple-icon-144x144.png'}
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href={process.env.PUBLIC_URL + '/favicon/apple-icon-152x152.png'}
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={process.env.PUBLIC_URL + '/favicon/apple-icon-180x180.png'}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href={process.env.PUBLIC_URL + '/favicon/android-icon-192x192.png'}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={process.env.PUBLIC_URL + '/favicon/favicon-32x32.png'}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href={process.env.PUBLIC_URL + '/favicon/favicon-96x96.png'}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={process.env.PUBLIC_URL + '/favicon/favicon-16x16.png'}
      />
      <link
        rel="manifest"
        href={process.env.PUBLIC_URL + '/favicon/manifest.json'}
      />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta
        name="msapplication-TileImage"
        content={process.env.PUBLIC_URL + '/favicon/ms-icon-144x144.png'}
      />
      <meta name="theme-color" content="#ffffff" />
      <title>Bibot</title>
    </Head>
  );
};

export default BaseHead;
