import React from 'react'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs';
import { useRouter } from 'next/router';

function useHead() {
  const { asPath } = useRouter();
  const { frontMatter, title } = useConfig();
  const url = `https://docs-gamma.vercel.app${asPath}`;
  const description = frontMatter.description || "Mycroft Studios' Documentation For All Cfx.re related tasks.";

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/x-icon" href="/static/ox.ico" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:url" content={url} />
    </>
  );
}

function useNextSeoProps() {
  const { asPath } = useRouter();
  const arr = asPath.replace(/[-_]/g, ' ').split('/');
  const category = (arr[1][0] !== '#' && arr[1]) || 'Overextended';
  const rawTitle = arr[arr.length - 1];
  const title = /[a-z]/.test(rawTitle) && /[A-Z]/.test(rawTitle) ? rawTitle : '%s';

  return {
    titleTemplate: `${title} - Mycroft Studios`,
  };
}


const config: DocsThemeConfig = {
  logo: <span>Mycroft Studios</span>,
  project: {
    link: 'https://github.com/mycroft-studios',
  },
  chat: {
    link: 'https://discord.gg/TCCHMySN2N',
  },
  head: useHead,
  docsRepositoryBase: 'https://github.com/mycroft-studios/docs/blob/main',
  footer: {
    text: 'Copyright Mycroft (2023) - Dedicated To Excellence.',
  },
  useNextSeoProps: useNextSeoProps,
}

export default config
