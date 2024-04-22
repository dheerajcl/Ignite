export const SEO = {
  title: "Ignite",
  description: "Revolutionise your Learning Experience.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "IGNITE",
    // // url: "https://ignite.vercel.app/",
    siteName: "Ignite",
    images: [
      // { url: "https://ignite.vercel.app/logo.png" },
      {
        url: "https://igniteit.vercel.app/fireball.png",
        width: 800,
        height: 600,
        alt: "Og Image",
        type: "image/jpeg",
      },
    ],
  },

  themeColor: "light",
  additionalMetaTags: [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0",
    },
    {
      name: "application-name",
      content: "Ignite",
    },
  ],

  additionalLinkTags: [
    {
      rel: "icon",
      href: "https://igniteit.vercel.app/favicon.ico",
    },
  ],
};
