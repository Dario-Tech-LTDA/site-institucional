import { missao } from "@/lib/site";

export function Missao() {
  return (
    <section id="missao" className="border-b border-linha">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <p className="rotulo mb-8">Missão</p>

        <h2 className="max-w-3xl font-display text-2xl font-semibold leading-snug tracking-tight text-texto sm:text-3xl">
          {missao.texto}
        </h2>

        {/* Os três pilares não são etapas de um processo, então não levam
            numeração — só a divisória que separa um do outro. */}
        <ul className="mt-16 grid gap-px overflow-hidden rounded-lg bg-linha md:grid-cols-3">
          {missao.pilares.map((pilar) => (
            <li key={pilar.titulo} className="bg-base p-7">
              <h3 className="font-display text-lg font-semibold text-texto">
                {pilar.titulo}
              </h3>
              <p className="mt-3 leading-relaxed text-suave">{pilar.texto}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
