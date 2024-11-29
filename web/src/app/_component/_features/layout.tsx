import Footer from "./Footer";
import Header from "./Header";

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