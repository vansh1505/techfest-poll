import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased  h-screen justify-center items-center w-screen bg-no-repeat`}
      >
        {children}
      </body>
    </html>
  );
}
