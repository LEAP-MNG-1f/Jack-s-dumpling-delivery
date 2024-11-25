import Footer from "@/app/_features/Footer";
import Header from "@/app/_features/Header";

interface layoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: layoutProps) {
  return (
    <main className="w-screen h-screen">
      <Header />
      {children}
      <Footer />
    </main>
  );
}
