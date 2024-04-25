import { ReactNode } from "react";
import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";

const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "go-exetat.org",
   description: "Go Exetat",
};

const RootLayout = ({children}: Readonly<{children: ReactNode;}>) => {
   return (
      <html lang="en">
         <body className={nunitoSans.className}>{children}</body>
      </html>
   );
}

export default RootLayout;