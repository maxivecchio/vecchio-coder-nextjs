import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Providers from './providers'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MVSHOP",
  description: "Buy our trending clothes!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
            <Navigation />
            <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
