import { site } from "@/lib/site";

export function Footer() {
  // Static export: resolvido no build, então atualiza a cada deploy.
  const ano = new Date().getFullYear();

  return (
    <footer className="border-t border-traco">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-display tracking-tight">
          <span className="font-bold text-gelo">Dario</span>
          <span className="text-bruma">Tech</span>
        </p>
        <p className="rotulo">
          © {ano} {site.razaoSocial} · Em homenagem ao vô Dario
        </p>
      </div>
    </footer>
  );
}
