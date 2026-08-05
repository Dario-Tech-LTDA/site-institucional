import Image from "next/image";
import logoSenhorCardapio from "@/assets/brand/senhor-cardapio-horizontal.svg";
import { produtos, site } from "@/lib/site";

export function Produtos() {
  return (
    <section id="produtos" className="border-b border-linha">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <p className="rotulo mb-4">Produtos</p>

        <h2 className="mb-12 max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight text-texto sm:text-4xl">
          Nossos produtos
        </h2>

        {produtos.map((produto) => (
          <article key={produto.nome} className="rounded-xl border border-linha bg-superficie">
            {/* A marca do produto aparece só aqui — é o único lugar do site
                onde ela representa o produto, e não a empresa. */}
            <div className="border-b border-linha bg-creme px-8 py-7">
              <Image
                src={logoSenhorCardapio}
                alt={`Logo do ${produto.nome}`}
                className="h-14 w-auto"
              />
            </div>

            <div className="p-8 md:p-10">
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <h3 className="font-display text-2xl font-semibold tracking-tight text-texto">
                  {produto.nome}
                </h3>
                <span className="rotulo">{produto.status}</span>
              </div>

              <p className="mt-4 max-w-2xl font-display text-lg font-medium leading-snug text-texto">
                {produto.resumo}
              </p>
              <p className="mt-4 max-w-2xl leading-relaxed text-suave">
                {produto.descricao}
              </p>

              <ul className="mt-8 grid gap-x-10 gap-y-3 sm:grid-cols-2">
                {produto.destaques.map((destaque) => (
                  <li key={destaque} className="flex gap-3 text-sm leading-relaxed text-suave">
                    <span aria-hidden="true" className="mt-2 h-px w-4 shrink-0 bg-acento" />
                    {destaque}
                  </li>
                ))}
              </ul>

              {/* O site do produto é a ação principal; o WhatsApp fica como
                  alternativa para quem prefere falar com alguém. */}
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={produto.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-acento px-7 py-3.5 font-semibold text-tinta transition-opacity hover:opacity-85"
                >
                  Visitar {produto.urlRotulo}
                  <span aria-hidden="true">↗</span>
                </a>

                <a
                  href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
                    `Olá! Quero saber mais sobre o ${produto.nome}.`,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 px-3 py-3.5 font-medium text-acento-texto transition-colors hover:text-texto"
                >
                  Falar no WhatsApp
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
