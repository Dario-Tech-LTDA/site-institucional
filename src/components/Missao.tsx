import { missao } from "@/lib/site";

export function Missao() {
  return (
    <section id="missao" className="bg-petroleo py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-laranja">
            {missao.titulo}
          </p>
          <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-creme sm:text-4xl">
            {missao.texto}
          </h2>
        </div>

        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {missao.pilares.map((pilar, i) => (
            <li
              key={pilar.titulo}
              className="rounded-2xl border border-creme/15 bg-creme/5 p-7"
            >
              <span className="font-display text-3xl font-extrabold text-laranja">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-xl font-bold text-creme">
                {pilar.titulo}
              </h3>
              <p className="mt-3 leading-relaxed text-creme/70">{pilar.texto}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
