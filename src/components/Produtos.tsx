import Image from "next/image";
import logoSenhorCardapio from "@/assets/brand/senhor-cardapio-horizontal.svg";
import { produtos, site } from "@/lib/site";

export function Produtos() {
  return (
    <section id="produtos" className="border-b border-cobalto-linha">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <div className="mb-12 flex items-baseline justify-between gap-6">
          <p className="rotulo">Produtos</p>
          <p className="rotulo">
            {produtos.length.toString().padStart(2, "0")} no ar
          </p>
        </div>

        {produtos.map((produto) => (
          <article key={produto.nome} className="rounded-xl border border-cobalto-linha bg-cobalto-fundo">
            {/* A marca do produto aparece só aqui — é o único lugar do site
                onde ela representa o produto, e não a empresa. */}
            <div className="border-b border-cobalto-linha bg-creme px-8 py-7">
              <Image
                src={logoSenhorCardapio}
                alt={`Logo do ${produto.nome}`}
                className="h-14 w-auto"
              />
            </div>

            <div className="p-8 md:p-10">
              <h3 className="max-w-2xl font-display text-xl font-semibold leading-snug text-branco sm:text-2xl">
                {produto.resumo}
              </h3>
              <p className="mt-4 max-w-2xl leading-relaxed text-azul-claro">
                {produto.descricao}
              </p>

              <ul className="mt-8 grid gap-x-10 gap-y-3 sm:grid-cols-2">
                {produto.destaques.map((destaque) => (
                  <li key={destaque} className="flex gap-3 text-sm leading-relaxed text-azul-claro">
                    <span aria-hidden="true" className="mt-2 h-px w-4 shrink-0 bg-coral" />
                    {destaque}
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
                  `Olá! Quero saber mais sobre o ${produto.nome}.`,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-10 inline-flex items-center gap-2 font-medium text-coral-claro transition-colors hover:text-branco"
              >
                Conhecer o {produto.nome}
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
