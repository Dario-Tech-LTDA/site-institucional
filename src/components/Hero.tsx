import Image from "next/image";
import mascote from "@/assets/brand/mascote-branco.png";
import { fundadores, produtos, site } from "@/lib/site";

/**
 * Assinatura do site: o nome da empresa nasce do nome do avô.
 * "Dario" é literalmente as últimas letras de "Ordário" — a derivação é real,
 * então vale mostrá-la em vez de contá-la.
 */
function OrigemDoNome() {
  return (
    <div>
      <p className="origem-nome font-display text-lg tracking-[0.14em] text-azul-claro sm:text-2xl">
        JORGE OR<span className="origem-destaque font-semibold">DÁRIO</span> DUTRA
      </p>

      <h1 className="origem-marca mt-7 font-display text-6xl font-bold leading-[0.9] tracking-tight sm:text-7xl lg:text-8xl">
        <span className="text-branco">Dario</span>
        <span className="text-azul-claro">Tech</span>
      </h1>
    </div>
  );
}

// Números que a empresa realmente tem — não métricas infladas de vitrine.
const ficha = [
  { rotulo: "Sócios", valor: fundadores.length.toString().padStart(2, "0") },
  { rotulo: "Produtos", valor: `${produtos.length.toString().padStart(2, "0")} no ar` },
  { rotulo: "Base", valor: "São Paulo, BR" },
];

export function Hero() {
  return (
    <section id="topo" className="border-b border-cobalto-linha">
      <div className="mx-auto max-w-5xl px-6 pt-16 md:pt-24">
        <div className="grid gap-12 md:grid-cols-[1fr_16rem] md:items-center md:gap-10">
          <div>
            <p className="rotulo mb-10">Empresa de tecnologia</p>

            <OrigemDoNome />

            <p className="mt-10 max-w-xl text-lg leading-relaxed text-azul-claro sm:text-xl">
              {site.tagline} Construímos software para quem tem um negócio para
              tocar e pouco tempo para aprender sistema.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#produtos"
                className="inline-flex items-center justify-center rounded-full bg-coral px-7 py-3.5 font-semibold text-tinta transition-colors hover:bg-coral-claro"
              >
                Ver o que construímos
              </a>
              <a
                href="#historia"
                className="group inline-flex items-center justify-center gap-2 px-3 py-3.5 font-medium text-azul-claro transition-colors hover:text-branco"
              >
                De onde vem o nome
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>

          {/* O desenho do vô Dario, repintado na cor da empresa: os traços do
              rosto são vazados na arte, então é o próprio cobalto que os forma. */}
          <Image
            src={mascote}
            alt="Ilustração do avô Jorge Ordário Dutra, o Dario, que dá nome à empresa"
            priority
            className="mx-auto h-auto w-48 md:mx-0 md:w-full"
          />
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-px border-t border-cobalto-linha bg-cobalto-linha sm:grid-cols-3 md:mt-20">
          {ficha.map((item) => (
            <div key={item.rotulo} className="bg-cobalto px-1 py-6 last:col-span-2 sm:last:col-span-1">
              <dt className="rotulo">{item.rotulo}</dt>
              <dd className="mt-1 font-display text-xl font-semibold text-branco">
                {item.valor}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
