import HeaderActions from "@/components/header-actions";
import Footeractions from "@/components/footer-actions";
import ClientLayout from "@/components/ui/ClientLayout";


export default function ProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

  
      <ClientLayout>
        <header>
          <HeaderActions/>
        </header>

        <main>
          {children}
        </main>

        <footer>
          <Footeractions />
        </footer>
      </ClientLayout>


   

  );
}
