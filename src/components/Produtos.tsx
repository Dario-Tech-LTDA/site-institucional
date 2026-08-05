import Image from "next/image";
import logoSenhorCardapio from "@/assets/brand/senhor-cardapio-horizontal.svg";
import { produtos, site } from "@/lib/site";

export function Produtos() {
  return (
    <section id="produtos" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-laranja">
          O que construímos
        </p>
        <h2 className="max-w-2xl font-display text-3xl font-extrabold leading-tight tracking-tight text-petroleo sm:text-4xl">
          Nossos produtos
        </h2>

        <div className="mt-12 grid gap-8">
          {produtos.map((produto) => (
            <article
              key={produto.nome}
              className="grid gap-10 rounded-[2rem] border border-petroleo/10 bg-creme-claro p-8 md:grid-cols-[minmax(0,22rem)_1fr] md:items-center md:p-12"
            >
              <div className="flex flex-col items-start gap-6">
                <Image
                  src={logoSenhorCardapio}
                  alt={`Logo do ${produto.nome}`}
                  className="h-auto w-full max-w-[18rem]"
                />
                <span className="rounded-full bg-laranja/12 px-4 py-1.5 text-sm font-semibold text-laranja">
                  {produto.status}
                </span>
              </div>

              <div>
                <h3 className="font-display text-2xl font-extrabold text-petroleo">
                  {produto.resumo}
                </h3>
                <p className="mt-4 leading-relaxed text-petroleo/75">
                  {produto.descricao}
                </p>

                <ul className="mt-7 grid gap-3">
                  {produto.destaques.map((destaque) => (
                    <li key={destaque} className="flex items-start gap-3">
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        aria-hidden="true"
                        className="mt-0.5 shrink-0"
                      >
                        <circle cx="11" cy="11" r="11" fill="#d67229" fillOpacity="0.14" />
                        <path
                          d="M6.5 11.2l3 3 6-6.4"
                          stroke="#d67229"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="text-petroleo/80">{destaque}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
                    `Olá! Quero saber mais sobre o ${produto.nome}.`,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-9 inline-flex items-center gap-2 rounded-full bg-laranja px-7 py-3.5 font-semibold text-white transition-colors hover:bg-laranja-claro"
                >
                  Quero conhecer
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                    <path
                      d="M4 9h10M10 5l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-petroleo/60">
          Novos produtos a caminho. É só o começo.
        </p>
      </div>
    </section>
  );
}
