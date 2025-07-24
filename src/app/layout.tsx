import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/_components/_ui/_header/header";
import Footer from "@/_components/_ui/_footer/_footer";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const graphie = localFont({
  src: [
    {
      path: "../../public/fonts/GraphieRegular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/GraphieExtraBold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-graphie",
});

export const metadata: Metadata = {
  title: "Tepago - Tenpo Challenge",
  description: "Diseñado y desarrollado por Pabloram.dev",
  themeColor: '#121212', 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-Cl">
      <body
        className={`flex flex-col ${openSans.variable} ${graphie.variable} antialiased bg-neutral-0 min-h-screen max-w-screen overflow-x-hidden`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
