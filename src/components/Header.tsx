"use client";

import { useState } from "react";
import { site } from "@/lib/site";

const links = [
  { href: "#missao", label: "Missão" },
  { href: "#produtos", label: "Produtos" },
  { href: "#historia", label: "História" },
  { href: "#fundadores", label: "Quem somos" },
];

export function Header() {
  const [aberto, setAberto] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-cobalto-linha bg-cobalto/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-5xl items-center justify-between px-6">
        {/* Assinatura tipográfica. O mascote aparece uma vez só, no hero —
            repeti-lo aqui gastaria o efeito e encheria a barra. */}
        <a href="#topo" className="font-display text-xl tracking-tight">
          <span className="font-bold text-branco">Dario</span>
          <span className="font-normal text-azul-claro">Tech</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-azul-claro transition-colors hover:text-branco"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            // Texto tinta, não branco: branco sobre coral dá 2.82:1 e reprova.
            className="rounded-full bg-coral px-5 py-2 text-sm font-semibold text-tinta transition-colors hover:bg-coral-claro"
          >
            Falar com a gente
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setAberto((v) => !v)}
          aria-expanded={aberto}
          aria-controls="menu-mobile"
          aria-label={aberto ? "Fechar menu" : "Abrir menu"}
          className="flex h-11 w-11 items-center justify-center rounded-lg text-branco transition-colors hover:bg-cobalto-fundo md:hidden"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {aberto ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
            ) : (
              <path d="M4 8h16M4 16h16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {aberto && (
        <nav id="menu-mobile" className="border-t border-cobalto-linha bg-cobalto px-6 py-3 md:hidden">
          <ul className="flex flex-col">
            {[...links, { href: "#contato", label: "Falar com a gente" }].map((link) => (
              <li key={link.href} className="border-b border-cobalto-linha last:border-0">
                <a
                  href={link.href}
                  onClick={() => setAberto(false)}
                  className="block py-3.5 text-branco transition-colors hover:text-coral-claro"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      <span className="sr-only">{site.nome}</span>
    </header>
  );
}
