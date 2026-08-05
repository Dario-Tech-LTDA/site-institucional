import { site } from "@/lib/site";

export function Historia() {
  return (
    <section id="historia" className="border-b border-linha">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <p className="rotulo mb-8">História</p>

        <h2 className="max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight text-texto sm:text-4xl">
          O nome da empresa é o apelido do nosso avô.
        </h2>

        {/* Duas colunas no desktop: o texto é longo e em uma coluna só a linha
            passaria de 100 caracteres, que é onde a leitura começa a cansar. */}
        <div className="mt-10 grid gap-x-16 gap-y-5 leading-relaxed text-suave md:grid-cols-2">
          <p>
            Jorge Ordário Dutra — o Dario, como todo mundo chamava — é o avô que
            nos juntou. Foi na casa dele que os três primos cresceram, e é dele
            que vem o jeito de tratar as pessoas que a gente carrega até hoje: de
            perto, sem frescura, com trabalho bem-feito.
          </p>
          <p>
            A {site.nome} nasceu dessa herança. Quisemos que o nome lembrasse,
            todo dia, para quem a gente trabalha: gente de verdade, tocando
            negócios de verdade, com pouco tempo e muita conta para fechar. Por
            isso nossos produtos não são sistemas complicados — são ferramentas
            que resolvem, do jeito que o vô resolveria: direto ao ponto e olhando
            no olho.
          </p>
        </div>
      </div>
    </section>
  );
}
