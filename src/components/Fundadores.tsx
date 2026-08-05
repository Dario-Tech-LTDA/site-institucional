import { fundadores } from "@/lib/site";

/**
 * Destaca "Dutra" no nome. É o mesmo fio do avô: os três primos carregam o
 * sobrenome que deu origem à empresa — o destaque mostra isso em vez de dizer.
 */
function NomeComSobrenome({ nome }: { nome: string }) {
  const partes = nome.split(/(\bDutra\b)/);
  return (
    <>
      {partes.map((parte, i) =>
        parte === "Dutra" ? (
          <span key={i} className="text-acento-texto">
            {parte}
          </span>
        ) : (
          parte
        ),
      )}
    </>
  );
}

export function Fundadores() {
  return (
    <section id="fundadores" className="border-b border-linha">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <p className="rotulo mb-8">Quem somos</p>

        <h2 className="max-w-2xl font-display text-2xl font-semibold leading-snug tracking-tight text-texto sm:text-3xl">
          Três primos, um sobrenome e a mesma teimosia.
        </h2>
        <p className="mt-5 max-w-xl leading-relaxed text-suave">
          A gente não montou uma empresa para ter uma empresa. Montou porque via
          conhecidos perdendo dinheiro e paciência com ferramentas ruins — e
          sabia como resolver.
        </p>

        <ul className="mt-14 border-t border-linha">
          {fundadores.map((fundador) => (
            <li
              key={fundador.nome}
              // No mobile o rótulo sempre desce; sem isso alguns nomes cabem
              // na mesma linha e outros não, e a lista fica desalinhada.
              className="flex flex-col gap-1 border-b border-linha py-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
            >
              <span className="font-display text-xl font-semibold tracking-tight text-texto sm:text-2xl">
                <NomeComSobrenome nome={fundador.nome} />
              </span>
              <span className="rotulo">{fundador.papel}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
