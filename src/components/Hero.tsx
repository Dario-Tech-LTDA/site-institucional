import { fundadores, produtos, site } from "@/lib/site";

/**
 * Assinatura do site: o nome da empresa nasce do nome do avô.
 * "Dario" é literalmente as últimas letras de "Ordário" — a derivação é real,
 * então vale mostrá-la em vez de contá-la.
 */
function OrigemDoNome() {
  return (
    <div className="mb-12">
      <p className="origem-nome font-display text-lg tracking-[0.14em] text-bruma sm:text-2xl">
        JORGE OR<span className="origem-destaque font-semibold">DÁRIO</span> DUTRA
      </p>

      <h1 className="origem-marca mt-7 font-display text-5xl font-bold leading-none tracking-tight sm:text-7xl lg:text-8xl">
        <span className="text-gelo">Dario</span>
        <span className="text-bruma">Tech</span>
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
    <section id="topo" className="border-b border-traco">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <p className="rotulo mb-10">Empresa de tecnologia</p>

        <OrigemDoNome />

        <div className="grid gap-12 md:grid-cols-[1fr_auto] md:items-end md:gap-16">
          <div>
            <p className="max-w-xl text-lg leading-relaxed text-bruma sm:text-xl">
              {site.tagline} Construímos software para quem tem um negócio para
              tocar e pouco tempo para aprender sistema.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#produtos"
                className="inline-flex items-center justify-center rounded-full bg-indigo px-7 py-3.5 font-medium text-gelo transition-colors hover:bg-indigo-claro hover:text-noite"
              >
                Ver o que construímos
              </a>
              <a
                href="#historia"
                className="group inline-flex items-center justify-center gap-2 px-3 py-3.5 font-medium text-bruma transition-colors hover:text-gelo"
              >
                De onde vem o nome
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>

          <dl className="flex gap-10 md:flex-col md:gap-5 md:border-l md:border-traco md:pl-8">
            {ficha.map((item) => (
              <div key={item.rotulo}>
                <dt className="rotulo">{item.rotulo}</dt>
                <dd className="mt-1 font-display text-lg font-semibold text-gelo">
                  {item.valor}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
