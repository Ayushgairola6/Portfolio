'use client'

import "./globals.css";
import Navbar from '../app/components/navabar'
import Footer from "./components/footer";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white ">
        <Navbar/>
      {children}
      <Footer/>
      </body>

    </html>
  );
}
