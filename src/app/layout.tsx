import Header from "./components/Header";
import { Analytics } from "@vercel/analytics/react";
import Theme from "../providers/Theme";
import "@/styles/globals.scss";
import { Inter } from "next/font/google";
import seo from "@/seo/metadata";
import "../styles/prism.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = seo;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="max-w-7xl mx-auto transition-all duration-500 bg-stone-50 dark:bg-slate-950">
        <Theme>
          <main className={inter.className}>
            <Header />
            {children}
          </main>
        </Theme>
        <Analytics />
      </body>
    </html>
  );
}
