import Image from "next/image";
import simbolo from "@/assets/brand/simbolo-positivo.png";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden">
      {/* Warm glow behind the mascot, kept subtle so the artwork stays the focus. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-laranja/10 blur-3xl"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-laranja/30 bg-laranja/10 px-4 py-1.5 text-sm font-semibold text-laranja">
            Empresa de tecnologia · São Paulo, Brasil
          </p>

          <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-petroleo sm:text-5xl lg:text-6xl">
            Tecnologia que facilita a vida de{" "}
            <span className="text-laranja">negócios e pessoas</span>.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-petroleo/75">
            {site.descricao}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#produtos"
              className="inline-flex items-center justify-center rounded-full bg-petroleo px-7 py-3.5 font-semibold text-creme transition-colors hover:bg-petroleo-escuro"
            >
              Conheça nossos produtos
            </a>
            <a
              href="#historia"
              className="inline-flex items-center justify-center rounded-full border-2 border-petroleo/20 px-7 py-3.5 font-semibold text-petroleo transition-colors hover:border-laranja hover:text-laranja"
            >
              Nossa história
            </a>
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end">
          <div className="relative w-full max-w-sm rounded-[2rem] border border-petroleo/10 bg-creme-claro p-10 shadow-[0_24px_60px_-30px_rgba(52,74,72,0.45)]">
            <Image
              src={simbolo}
              alt={`Mascote da ${site.nome}, inspirado no avô dos fundadores`}
              priority
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
