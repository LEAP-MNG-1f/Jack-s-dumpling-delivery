import Footer from "../_features/Footer";
import Header from "../_features/Header";

interface layoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: layoutProps) {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
}
