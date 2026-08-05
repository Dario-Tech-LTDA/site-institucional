import { fundadores } from "@/lib/site";

export function Fundadores() {
  return (
    <section id="fundadores" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-laranja">
          Quem somos
        </p>
        <h2 className="max-w-2xl font-display text-3xl font-extrabold leading-tight tracking-tight text-petroleo sm:text-4xl">
          Três primos, um sobrenome e a mesma teimosia.
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-petroleo/75">
          A gente não montou uma empresa para ter uma empresa. Montou porque via
          conhecidos perdendo dinheiro e paciência com ferramentas ruins — e
          sabia como resolver.
        </p>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {fundadores.map((fundador) => (
            <li
              key={fundador.nome}
              className="overflow-hidden rounded-2xl border border-petroleo/10 bg-creme-claro"
            >
              {/* Accent bar instead of initials: two founders share "AD". */}
              <div aria-hidden="true" className="h-1.5 bg-laranja" />
              <div className="p-7">
                <h3 className="font-display text-xl font-bold leading-snug text-petroleo">
                  {fundador.nome}
                </h3>
                <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-laranja">
                  {fundador.papel}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
