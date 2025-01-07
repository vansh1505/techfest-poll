import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-gradient-to-br from-custom-red-1 via-custom-red-4 to-custom-orange-4 h-screen justify-center items-center w-screen bg-no-repeat`}
      >
        {children}
      </body>
    </html>
  );
}
