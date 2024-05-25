import TwSizeIndicator from '@components/TwSizeIndicator';
import config from '@config/config.json';
import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => {
  // destructuring items from config object
  const { favicon } = config.site;
  const baseUrl = window.location.origin;
  const currentPath = window.location.pathname;
  return (
    <Html lang='en'>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />

        {/* favicon */}
        <link rel='shortcut icon' href={favicon} />
        {/* theme meta */}
        <meta name='theme-name' content='AlHazam-light-nextjs' />
        <meta name='msapplication-TileColor' content='#000000' />
        <meta name='theme-color' media='(prefers-color-scheme: light)' content='#fff' />
        {currentPath == '/' && (
          <meta
            name='og:image'
            content='https://scontent-hbe1-2.xx.fbcdn.net/v/t39.30808-6/307486267_478264784323046_501080229019256398_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGyY-5dCdHvw9S34xTiaezM0RkwMFACcyjRGTAwUAJzKEeIPJb6YZbstNbv152yZQdkgWjRRTJC83lGW902b77i&_nc_ohc=GZVYPhrYRuoQ7kNvgGJeI0I&_nc_ht=scontent-hbe1-2.xx&oh=00_AYA64S0saHLVVqMNHhIyrUXDvhGEd-x0h-KB-9C4Q2guEA&oe=6656B83A'
          />
        )}

        <meta name='theme-color' media='(prefers-color-scheme: dark)' content='#000' />
      </Head>
      <body>
        <Main />
        <TwSizeIndicator />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
