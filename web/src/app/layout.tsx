import type { Metadata } from "next";
import "./globals.css";

import AdminHeader from "./_components/features/AdminHeader";
import Header from "./_components/features/Header";
import Footer from "./_components/features/Footer";
import { CartProvider } from "./_components/context/CartContext";

export const metadata: Metadata = {
  title: "Dumbling Service",
  description: "Mongolian number ONE food service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const admin = false;
  return (
    <html lang="en">
      <body>
        <CartProvider>
          {admin && <AdminHeader />}
          {!admin && <Header />}
          {children}
          {!admin && <Footer />}
        </CartProvider>
      </body>
    </html>
  );
}
