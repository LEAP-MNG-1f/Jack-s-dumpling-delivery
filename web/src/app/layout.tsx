import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./_component/_features/Header";
import Footer from "./_component/_features/Footer";
import AdminHeader from "./_component/_features/AdminHeader";



export const metadata: Metadata = {
  title: "Dumbling Service",
  description: "Mongolian number ONE food service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 



{
  const admin = false
  return (
    <html lang="en">
      <body>
        {admin && <AdminHeader/>}
        {!admin && <Header/>}
        {children}
        {!admin && <Footer/>}
      </body>
    </html>
  );
}
