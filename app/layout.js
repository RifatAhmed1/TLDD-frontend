import localFont from "next/font/local";
import {Roboto} from "next/font/google";
import "./globals.css";

import {AppRouterCacheProvider} from "@mui/material-nextjs/v15-appRouter";

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Tomato Leaf Disease Dectector",
  description: "Detects diseases in tomato leaf using AI",
};
// /*`${roboto.className} ${geistSans.variable} ${geistMono.variable}`*/
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <AppRouterCacheProvider>
          {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
