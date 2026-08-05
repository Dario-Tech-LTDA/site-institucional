import { site } from "@/lib/site";

const mensagem = encodeURIComponent(
  `Olá! Vim pelo site da ${site.nome} e gostaria de conversar.`,
);

export function Contato() {
  return (
    <section id="contato">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <p className="rotulo mb-8">Contato</p>

        <h2 className="max-w-2xl font-display text-2xl font-semibold leading-snug tracking-tight text-texto sm:text-3xl">
          Quem responde é um dos três.
        </h2>
        <p className="mt-5 max-w-xl leading-relaxed text-suave">
          Quer conhecer o Senhor Cardápio, tirar uma dúvida ou tem uma ideia para
          tirar do papel? Chama a gente.
        </p>

        <div className="mt-12 grid gap-px overflow-hidden rounded-lg bg-linha sm:grid-cols-2">
          <a
            href={`https://wa.me/${site.whatsapp}?text=${mensagem}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-base p-7 transition-colors hover:bg-superficie"
          >
            <span className="rotulo">WhatsApp</span>
            <span className="mt-3 flex items-center gap-2 font-display text-xl font-semibold text-texto">
              {site.telefone}
              <span
                aria-hidden="true"
                className="text-acento-texto transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </span>
          </a>

          <a
            href={`mailto:${site.email}`}
            className="group bg-base p-7 transition-colors hover:bg-superficie"
          >
            <span className="rotulo">E-mail</span>
            {/* text-base no mobile: em text-xl o endereço quebra no meio da
                palavra e fica ilegível em telas de 390px. */}
            <span className="mt-3 flex items-center gap-2 font-display text-base font-semibold text-texto sm:text-xl">
              {site.email}
              <span
                aria-hidden="true"
                className="text-acento-texto transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
