import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const meta = {
    title: "Yin Chu's blog", // Change the title (something better)
    description: "Here I host some of the things I have written", // Change the description (something better)
    image: "https://assets.vercel.com/image/upload/q_auto/front/vercel/dps.png" // Change the
  };

  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yinchurijnaard" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
