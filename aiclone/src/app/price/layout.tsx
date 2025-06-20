import Headeractions from "@/components/header-actions";
import Footeractions from "@/components/footer-actions";
import "../globals.css";
export default function PriceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {  return (
    <div className="min-h-screen flex flex-col">
      <header>
        <Headeractions/>
        <a>price header</a>
      </header>
      
      <main className="flex-grow">
        {children}
      </main>
         
      <footer>
       <Footeractions />
      </footer>
    </div>
  );
}
