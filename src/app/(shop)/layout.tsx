import { Footer, Header, LogoWapp } from "@/components";

export default function ShopLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <>
      <Header/>
      <main>
        {children}
      </main>
      <Footer/>
      <LogoWapp/>
    </>
  );
}