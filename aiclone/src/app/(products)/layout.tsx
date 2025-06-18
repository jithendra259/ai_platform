import Headeraction from "@/components/ui/header-actions";
import Footeraction from "@/components/ui/footer-actions";
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

        <main>
          {children}
        </main>

        <footer>
          <Footeraction />
        </footer>
      </ClientLayout>


   

  );
}
