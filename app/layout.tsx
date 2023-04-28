import NavBar from "./components/NavBar/NavBar";
import "./globals.css";
import { Poppins } from 'next/font/google';
import Footer from "./components/Footer/Footer";
import Cursor from "./components/Cursor/Cursor";

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
})

export const metadata = {
  title: "Kanika Naik - Portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <head>
      <link href="/dist/output.css" rel="stylesheet"></link>
      {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"></link>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script> */}
      </head>
      <body className="bg-neutral-900">
        <Cursor />
        <NavBar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
