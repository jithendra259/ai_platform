import Headeraction from "@/components/ui/header-actions";
import Footeraction from "@/components/ui/footer-actions";
import "../globals.css";
export default function PriceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {  return (
    <div className="min-h-screen flex flex-col">
      <header>
        <Headeraction/>
      </header>
      
      <main className="flex-grow">
        {children}
      </main>
         
      <footer>
        <Footeraction/>
      </footer>
    </div>
  );
}
