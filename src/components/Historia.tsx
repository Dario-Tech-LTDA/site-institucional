import Image from "next/image";
import mascote from "@/assets/brand/mascote.png";
import { site } from "@/lib/site";

export function Historia() {
  return (
    <section id="historia" className="border-b border-traco">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <p className="rotulo mb-8">História</p>

        <div className="grid gap-14 md:grid-cols-[1fr_15rem] md:gap-16">
          <div>
            <h2 className="max-w-xl font-display text-2xl font-semibold leading-snug tracking-tight text-gelo sm:text-3xl">
              O nome da empresa é o apelido do nosso avô.
            </h2>

            <div className="mt-7 max-w-xl space-y-5 leading-relaxed text-bruma">
              <p>
                Jorge Ordário Dutra — o Dario, como todo mundo chamava — é o avô
                que nos juntou. Foi na casa dele que os três primos cresceram, e
                é dele que vem o jeito de tratar as pessoas que a gente carrega
                até hoje: de perto, sem frescura, com trabalho bem-feito.
              </p>
              <p>
                A {site.nome} nasceu dessa herança. Quisemos que o nome lembrasse,
                todo dia, para quem a gente trabalha: gente de verdade, tocando
                negócios de verdade, com pouco tempo e muita conta para fechar.
              </p>
              <p>
                Por isso nossos produtos não são sistemas complicados. São
                ferramentas que resolvem, do jeito que o vô resolveria: direto ao
                ponto e olhando no olho.
              </p>
            </div>
          </div>

          {/* Retrato, não logotipo. O mascote é a marca do Senhor Cardápio;
              aqui ele volta a ser o que sempre foi — o desenho do vô Dario. */}
          <figure className="max-w-[15rem] md:max-w-none md:pt-2">
            <div className="rounded-lg border border-traco bg-grafite p-6">
              <Image
                src={mascote}
                alt="Ilustração do avô Jorge Ordário Dutra, o Dario"
                className="h-auto w-full"
              />
            </div>
            <figcaption className="mt-4 text-sm leading-relaxed text-bruma">
              O vô Dario, desenhado para o Senhor Cardápio.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
