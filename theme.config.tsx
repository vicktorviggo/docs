import React from 'react'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs';
import { useRouter } from 'next/router';

function useHead() {
  const { asPath } = useRouter();
  const { frontMatter, title } = useConfig();
  const url = `https://mycroft-studios.co.uk${asPath}`;
  const description = frontMatter.description || "Mycroft Studios Documentation";

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/png" href="/static/logo_white_small.png" />
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
    const category = (arr[1][0] !== '#' && arr[1]) || 'Mycroft Studios';
    const rawTitle = arr[arr.length - 1];
    const title = /[a-z]/.test(rawTitle) && /[A-Z]/.test(rawTitle) ? rawTitle : '%s';

    return {
        titleTemplate: `${title} - ${
            rawTitle === category ? 'Documentation' : category.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase())
        }`,
    };
}


const config: DocsThemeConfig = {
    logo: (
        <div
      style={{
          paddingLeft: '50px',
          lineHeight: '38px',
          background: "url('./static/logo_white_small.png') no-repeat left",
          backgroundSize: '64px',
          fontWeight: 550,
      }}
     >
      <p style={{marginLeft: "20px"}}> Mycroft Studios</p>
    </div>
    ),
  project: {
    link: 'https://github.com/mycroft-studios',
  },
  chat: {
    link: 'https://discord.gg/TCCHMySN2N',
  },
  head: useHead,
  docsRepositoryBase: 'https://github.com/mycroft-studios/docs/blob/main',
  footer: {
    text: 'Mycroft Studios - Dedicated To Excellence.',
  },
  useNextSeoProps: useNextSeoProps,
}

export default config
