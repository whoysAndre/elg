import { Footer, Header, LogoWapp } from "@/components";

export default function ShopLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <>
      <Header/>
      <main className="md:pt-[140px]">
        {children}
      </main>
      <Footer/>
      <LogoWapp/>
    </>
  );
}