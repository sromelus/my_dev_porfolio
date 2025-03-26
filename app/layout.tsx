import '../styles/globals.css';
import { Metadata } from 'next';
import { Geist, Geist_Mono } from "next/font/google";
import Header from './components/Header';
import Footer from './components/Footer';
import { baseMetadata } from './seo/metadata';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  ...baseMetadata,
  openGraph: {
    ...baseMetadata.openGraph,
    images: [
      {
        url: '/shardly_porfolio_home_page.png',
        width: 1200,
        height: 630,
        alt: 'Shardly Romelus | Portfolio',
      },
    ],
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta property="og:image" content="http://localhost:3000/shardly_porfolio_home_page.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Shardly Romelus | Portfolio" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
