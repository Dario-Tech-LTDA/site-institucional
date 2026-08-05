"use client";

import Image from "next/image";
import { useState } from "react";
import simbolo from "@/assets/brand/simbolo-positivo.png";
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
    <header className="sticky top-0 z-50 border-b border-petroleo/10 bg-creme/90 backdrop-blur-sm">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <a href="#topo" className="flex items-center gap-3">
          <Image
            src={simbolo}
            alt=""
            width={44}
            height={47}
            priority
            className="h-11 w-auto"
          />
          <span className="font-display text-xl font-extrabold tracking-tight text-petroleo">
            {site.nome}
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-petroleo/70 transition-colors hover:text-laranja"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            className="rounded-full bg-petroleo px-5 py-2.5 text-sm font-semibold text-creme transition-colors hover:bg-laranja"
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
          className="flex h-11 w-11 items-center justify-center rounded-lg text-petroleo transition-colors hover:bg-petroleo/5 md:hidden"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {aberto ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {aberto && (
        <nav
          id="menu-mobile"
          className="border-t border-petroleo/10 bg-creme px-6 py-4 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {[...links, { href: "#contato", label: "Falar com a gente" }].map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setAberto(false)}
                  className="block rounded-lg px-3 py-3 font-medium text-petroleo transition-colors hover:bg-petroleo/5"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
