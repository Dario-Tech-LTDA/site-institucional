import { site } from "@/lib/site";

export function Footer() {
  // Static export: resolvido no build, então atualiza a cada deploy.
  const ano = new Date().getFullYear();

  return (
    <footer className="border-t border-linha">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-display tracking-tight">
          <span className="font-bold text-texto">Dario</span>
          <span className="text-suave">Tech</span>
        </p>
        <p className="rotulo">
          © {ano} {site.razaoSocial} · Em homenagem ao vô Dario
        </p>
      </div>
    </footer>
  );
}
