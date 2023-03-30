import Header from "./components/Header";
import Theme from "../providers/Theme";
import "@/styles/globals.scss";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
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
  // seo friendly
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="max-w-7xl mx-auto transition-all duration-500">
        <Theme>
          <main className={inter.className}>
            <Header />
            {children}
          </main>
        </Theme>
      </body>
    </html>
  );
}
