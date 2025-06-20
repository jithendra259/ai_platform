import Headeractions from "@/components/header-actions";
import Footeractions from "@/components/footer-actions";
import "../globals.css";
export default function PriceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {  return (
    <div >
      <header>
        <Headeractions/>
        
      </header>
      
      <main className="">
        {children}
      </main>
         
      <footer>
       <Footeractions />
      </footer>
    </div>
  );
}
