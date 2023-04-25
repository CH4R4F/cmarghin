import { Metadata } from "next";

const metadata: Metadata = {
  title: {
    default: "CMarghin",
    template: "%s | CMarghin",
  },
  description: "Charaf Marghin's personal website",
  applicationName: "CMarghin",
  referrer: "origin-when-cross-origin",
  keywords: [
    "cmarghin",
    "charaf marghin",
    "web developer",
    "javascript",
    "blogs",
    "portfolio",
    "software engineer",
    "react",
    "nextjs",
    "tailwindcss",
  ],
  authors: [{ name: "Charaf Marghin" }],
  colorScheme: "dark",
  creator: "Charaf Marghin",
  publisher: "Charaf Marghin",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": 1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/assets/logo-light.png",
    shortcut: "/assets/logo-light.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cmarghin.com",
    siteName: "CMarghin",
    title: "CMarghin",
    description: "Charaf Marghin's personal website",
    images: [
      {
        url: "/assets/logo-light.png",
        width: 512,
        height: 512,
        alt: "CMarghin",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CMarghin",
    description: "Charaf Marghin's personal website",
    creator: "@cmarghin",
    images: ["/assets/logo-light.png"],
  },
};

export default metadata;
