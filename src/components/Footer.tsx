import Image from "next/image";
import simbolo from "@/assets/brand/simbolo-positivo.png";
import { site } from "@/lib/site";

export function Footer() {
  // Static export: resolved at build time, so it updates on every deploy.
  const ano = new Date().getFullYear();

  return (
    <footer className="bg-petroleo-escuro py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:items-start md:justify-between md:text-left">
          <div className="flex items-center gap-3">
            <Image src={simbolo} alt="" width={40} height={43} className="h-10 w-auto" />
            <div>
              <p className="font-display text-lg font-extrabold text-creme">
                {site.nome}
              </p>
              <p className="text-sm text-creme/50">{site.tagline}</p>
            </div>
          </div>

          <div className="flex flex-col gap-2 text-sm">
            <a
              href={`mailto:${site.email}`}
              className="text-creme/70 transition-colors hover:text-laranja"
            >
              {site.email}
            </a>
            <a
              href={`https://wa.me/${site.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-creme/70 transition-colors hover:text-laranja"
            >
              {site.telefone}
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-creme/10 pt-7 text-center text-sm text-creme/40">
          <p>
            © {ano} {site.razaoSocial}. Feito com carinho, em homenagem ao vô Dario.
          </p>
        </div>
      </div>
    </footer>
  );
}
