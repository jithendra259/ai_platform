

export default function ProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   
      <body className="">
        <header>
            
             <a>product header</a>
        </header>

        <main>
             {children}
        </main>
           
        
       
      </body>
    
  );
}
