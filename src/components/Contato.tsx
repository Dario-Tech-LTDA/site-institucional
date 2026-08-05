import { site } from "@/lib/site";

const mensagem = encodeURIComponent(
  `Olá! Vim pelo site da ${site.nome} e gostaria de conversar.`,
);

export function Contato() {
  return (
    <section id="contato" className="pb-20 md:pb-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-[2rem] bg-petroleo px-8 py-14 text-center md:px-16 md:py-20">
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-extrabold leading-tight tracking-tight text-creme sm:text-4xl">
            Vamos conversar?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-creme/70">
            Quer conhecer o Senhor Cardápio, tirar uma dúvida ou tem uma ideia
            para tirar do papel? Chama a gente — quem responde é um dos três.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={`https://wa.me/${site.whatsapp}?text=${mensagem}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-laranja px-8 py-4 font-semibold text-white transition-colors hover:bg-laranja-claro sm:w-auto"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.87 9.87 0 004.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm0 18.15h-.01a8.2 8.2 0 01-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.18 8.18 0 01-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23a8.2 8.2 0 018.23 8.24c0 4.54-3.69 8.23-8.23 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.15.16-.29.18-.53.06-.25-.13-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.44.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.13-.56-1.35-.77-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.21.89 2.39 1.01 2.55.12.17 1.74 2.66 4.22 3.73.59.25 1.05.4 1.41.52.59.19 1.13.16 1.56.1.47-.07 1.47-.6 1.68-1.18.2-.58.2-1.08.14-1.18-.06-.11-.22-.17-.47-.29z" />
              </svg>
              WhatsApp {site.telefone}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex w-full items-center justify-center gap-2.5 rounded-full border-2 border-creme/25 px-8 py-4 font-semibold text-creme transition-colors hover:border-creme hover:bg-creme/10 sm:w-auto"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect
                  x="2.75"
                  y="4.75"
                  width="18.5"
                  height="14.5"
                  rx="2.5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
                <path
                  d="M3.5 7l7.6 5.4a1.5 1.5 0 001.8 0L20.5 7"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
              {site.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
