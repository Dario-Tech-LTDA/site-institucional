import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Missao } from "@/components/Missao";
import { Produtos } from "@/components/Produtos";
import { Historia } from "@/components/Historia";
import { Fundadores } from "@/components/Fundadores";
import { Contato } from "@/components/Contato";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Missao />
        <Produtos />
        <Historia />
        <Fundadores />
        <Contato />
      </main>
      <Footer />
    </>
  );
}
