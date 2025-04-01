import type { Metadata } from "next";
import {Roboto} from "next/font/google";
import "./globals.css";
import { ToastContainer, Bounce } from "react-toastify";
import StructuredData from "@/components/structured-data";
import {GoogleTagManagerBodyScript, GoogleTagManagerHeadScript} from "@/components/google-tag-manager";

const robotoSans = Roboto({
    subsets: ['latin'],
    weight:["400"],
    variable: '--font-roboto',
});

const title = "Battista Trasporti - Servizi di Trasporto per Moda ed Eventi";
const description = "Scopri i servizi di Battista Trasporti: trasporti rapidi e sicuri a Milano per moda, eventi, shooting e materiali scenici. Contattaci ora!";
export const metadata: Metadata = {
  title,
  description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const gtmId = "GTM-MMGHRDK8";
  return (
    <html lang="it">
    <head>
        <link href="https://www.googletagmanager.com/gtag/js?id=GTM-MMGHRDK8" rel="preload" as="script"/>
        <link rel="dns-prefetch" href="https://www.googletagmanager.com/"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png"/>
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-512x512.png"/>
        <link rel="icon" type="image/ico" href="/favicon.ico"/>
        <link rel="icon" type="image/ico" href="https://battistatrasporti.it/favicon.ico"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <meta property="og:title" content={title}/>
        <meta property="og:description" content={description}/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://battistatrasporti.it"/>
        <meta property="og:image" content="https://battistatrasporti.it/logo.png"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content={title}/>
        <meta name="twitter:description" content={description}/>
        <meta name="twitter:image" content="https://battistatrasporti.it/logo.png"/>
        <StructuredData description={description}/>
        <GoogleTagManagerHeadScript gtmId={gtmId} strategy="afterInteractive" />
    </head>
    <body className={`${robotoSans.variable} ${robotoSans.variable} antialiased`}>
        <GoogleTagManagerBodyScript gtmId={gtmId} />
        {children}
        <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            transition={Bounce}
        />
    </body>
    </html>
  );
}
