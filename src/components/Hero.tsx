import Image from "next/image";
import mascote from "@/assets/brand/mascote-branco.png";
import { fundadores, produtos } from "@/lib/site";

// Números que a empresa realmente tem — não métricas infladas de vitrine.
const ficha = [
  { rotulo: "Sócios", valor: fundadores.length.toString().padStart(2, "0") },
  { rotulo: "Produtos", valor: `${produtos.length.toString().padStart(2, "0")} no ar` },
  { rotulo: "Base", valor: "São Paulo, BR" },
];

export function Hero() {
  return (
    <section id="topo" className="border-b border-linha">
      <div className="mx-auto max-w-5xl px-6 pt-16 md:pt-24">
        <div className="grid gap-12 md:grid-cols-[1fr_14rem] md:items-center md:gap-12">
          <div>
            <p className="rotulo mb-8">Empresa de tecnologia</p>

            <h1 className="max-w-2xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-texto sm:text-5xl lg:text-[3.5rem]">
              Tecnologia que facilita a vida de{" "}
              <span className="text-acento-texto">negócios e pessoas</span>.
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-relaxed text-suave">
              Somos três primos construindo software para quem tem um negócio
              para tocar e pouco tempo para aprender sistema.
            </p>

            {/* A origem do nome fica como nota de rodapé do hero, não como
                manchete: a história importa, mas quem chega quer saber
                primeiro o que a empresa faz. O resto está em #historia. */}
            <p className="mt-7 text-sm text-suave">
              <span className="text-texto">DarioTech</span> é o apelido do nosso
              avô, Jorge Or<span className="marca-dario">dário</span> Dutra.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#produtos"
                className="inline-flex items-center justify-center rounded-full bg-acento px-7 py-3.5 font-semibold text-tinta transition-opacity hover:opacity-85"
              >
                Ver o que construímos
              </a>
              <a
                href="#historia"
                className="group inline-flex items-center justify-center gap-2 px-3 py-3.5 font-medium text-suave transition-colors hover:text-texto"
              >
                Nossa história
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>

          {/* O desenho do vô Dario, repintado na cor da empresa: os traços do
              rosto são vazados na arte, então é o próprio fundo que os forma. */}
          <Image
            src={mascote}
            alt="Ilustração do avô Jorge Ordário Dutra, o Dario, que dá nome à empresa"
            priority
            className="mx-auto h-auto w-40 md:mx-0 md:w-full"
          />
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-px border-t border-linha bg-linha sm:grid-cols-3 md:mt-20">
          {ficha.map((item) => (
            <div key={item.rotulo} className="bg-base px-1 py-6 last:col-span-2 sm:last:col-span-1">
              <dt className="rotulo">{item.rotulo}</dt>
              <dd className="mt-1 font-display text-xl font-semibold text-texto">
                {item.valor}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
