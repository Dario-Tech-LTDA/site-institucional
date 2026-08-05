import Image from "next/image";
import simbolo from "@/assets/brand/simbolo-positivo.png";
import { site } from "@/lib/site";

export function Historia() {
  return (
    <section id="historia" className="bg-petroleo-escuro py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 md:grid-cols-[1fr_minmax(0,20rem)]">
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-laranja">
            Nossa história
          </p>
          <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-creme sm:text-4xl">
            O nome vem do vô Jorge.
          </h2>

          <div className="mt-7 space-y-5 text-lg leading-relaxed text-creme/75">
            <p>
              <strong className="font-semibold text-creme">
                Jorge Ordário Dutra
              </strong>{" "}
              — o Dario, como todo mundo chamava — é o avô que nos juntou. Foi na
              casa dele que os três primos cresceram, e é dele que vem o jeito de
              tratar as pessoas que a gente carrega até hoje: de perto, sem
              frescura, com trabalho bem-feito.
            </p>
            <p>
              A {site.nome} nasceu dessa herança. Quisemos que o nome da empresa
              lembrasse, todo dia, para quem a gente trabalha: gente de verdade,
              tocando negócios de verdade, com pouco tempo e muita conta para
              fechar.
            </p>
            <p>
              Por isso nossos produtos não são sistemas complicados. São
              ferramentas que resolvem, do jeito que o vô resolveria: direto ao
              ponto e olhando no olho.
            </p>
          </div>
        </div>

        <figure className="flex flex-col items-center gap-5">
          <div className="w-full max-w-[18rem] rounded-[2rem] border border-creme/15 bg-creme/5 p-8">
            <Image
              src={simbolo}
              alt="Ilustração do avô Jorge Ordário Dutra, o Dario, que dá nome à empresa"
              className="h-auto w-full"
            />
          </div>
          <figcaption className="text-center text-sm leading-relaxed text-creme/50">
            O vô Dario virou mascote — e lembra a gente do porquê todos os dias.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
