import Headeraction from "@/components/header-actions";
import Footeraction from "@/components/footer-actions";
import ClientLayout from "@/components/ui/ClientLayout";


export default function ProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

  
      <ClientLayout>
        <header>
          <Headeraction />
        </header>

        <main className="dark">
          {children}
        </main>

        <footer>
          <Footeraction />
        </footer>
      </ClientLayout>


   

  );
}
