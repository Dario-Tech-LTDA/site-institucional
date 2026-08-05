# Site institucional — DarioTech

Landing page institucional da DarioTech, publicada no GitHub Pages.

**No ar:** https://dariotech.com.br

## Stack

- [Next.js 16](https://nextjs.org) com App Router, em modo `output: "export"` (gera HTML estático — o Pages não roda Node)
- [Tailwind CSS 4](https://tailwindcss.com)
- TypeScript

## Rodando localmente

```bash
npm install
npm run dev      # http://localhost:3000
```

Outros comandos:

```bash
npm run build    # gera o site estático em out/
npm run lint
```

## Editando o conteúdo

Praticamente todo o texto do site — missão, produtos, fundadores, e-mail e
telefone — está em **`src/lib/site.ts`**. Na maioria dos casos é o único arquivo
que precisa mudar.

Os componentes de cada seção ficam em `src/components/`:

| Arquivo | Seção |
| --- | --- |
| `Header.tsx` | Topo com navegação (e menu mobile) |
| `Hero.tsx` | Primeira dobra |
| `Missao.tsx` | Missão e os três pilares |
| `Produtos.tsx` | Senhor Cardápio |
| `Historia.tsx` | A origem do nome (vô Dario) |
| `Fundadores.tsx` | Os três primos |
| `Contato.tsx` | WhatsApp e e-mail |
| `Footer.tsx` | Rodapé |

## Identidade visual

A DarioTech tem identidade **própria**, deliberadamente oposta à do Senhor
Cardápio. O produto é diurno e quente (creme, laranja, verde-petróleo, letras
arredondadas); a empresa é um campo de cor saturada, do topo ao rodapé. Essa
separação é o que impede que o institucional seja lido como "o site do produto".

Tokens em `src/app/globals.css`:

| Token Tailwind | Hex | Uso |
| --- | --- | --- |
| `cobalto` | `#1b2cc1` | Fundo de todo o site |
| `cobalto-fundo` | `#16249e` | Cards e superfícies |
| `cobalto-linha` | `#4054e0` | Divisórias |
| `branco` | `#ffffff` | Texto principal |
| `azul-claro` | `#a9b4ff` | Texto secundário e rótulos |
| `coral` | `#ff6b4a` | Fundo de botão e elementos gráficos |
| `coral-claro` | `#ffa48e` | Links e destaques em texto |
| `tinta` | `#0a1060` | Texto sobre o coral |
| `creme` | `#f5f0e3` | Só a faixa da marca do produto |

Contraste auditado no DOM renderizado (69 elementos de texto): **todos passam em
WCAG AA**, com mínimo de 4.9:1. Duas restrições que vieram dessa medição e não
devem ser desfeitas:

- O **coral cheio nunca é texto** — dá 3.42:1 sobre o cobalto. Ele só aparece
  como fundo de botão (com texto `tinta`, 5.94:1) e em elementos gráficos.
  Para texto, use `coral-claro` (5.03:1).
- Botão coral leva texto `tinta`, não branco: branco sobre coral dá 2.82:1.

**Tipografia:** Bricolage Grotesque nos títulos, Instrument Sans no texto
corrido, IBM Plex Mono só nos rótulos de dado.

**Assinatura:** o nome da empresa saindo do nome do avô — `JORGE OR·DÁRIO·DUTRA`
→ `DarioTech`, com o destaque se acendendo no carregamento (respeitando
`prefers-reduced-motion`). O mesmo fio se repete em "Quem somos", onde o
sobrenome **Dutra** aparece destacado nos três nomes.

### O mascote

O desenho do vô Dario é usado **repintado na cor da empresa**: branco sobre o
campo cobalto. Isso funciona porque a arte "negativo" do kit tem os traços do
rosto como *recortes transparentes* — 49% da área do desenho é vazada, então é
o próprio fundo do site que forma o rosto. Repintado, ele deixa de carregar a
paleta do produto e passa a pertencer à empresa.

As imagens são geradas por `scripts/recolorir-mascote.py`, não editadas à mão:

```bash
python3 scripts/recolorir-mascote.py --cor '#FFFFFF' --saida mascote-branco.png
```

Se a paleta mudar, rode de novo com outra cor. A arte de origem vem do kit da
marca, que não é versionado — o script avisa se não encontrar.

### Onde cada marca aparece

Ativos em `src/assets/brand/`, importados como módulo (e não lidos de `public/`)
para que o Next aplique hash de cache e `basePath` automaticamente.

- **Hero:** o mascote repintado, uma vez só. Repeti-lo no topo e no rodapé
  gastaria o efeito.
- **Topo e rodapé:** assinatura tipográfica "DarioTech".
- **Produtos:** a marca completa do Senhor Cardápio, sobre faixa creme — o único
  lugar do site em que ela representa o produto, e não a empresa.
- **Favicon:** `src/app/icon.png`, o mascote branco sobre cobalto.

> Dos arquivos da identidade usamos a versão **RGB**, não a CMYK: JPEG em CMYK
> não tem transparência e os navegadores renderizam suas cores de forma
> inconsistente. A arte é a mesma.

## Deploy

O deploy é automático: todo push na branch `main` dispara o workflow
`.github/workflows/deploy.yml`, que roda o build e publica o conteúdo de `out/`
no GitHub Pages.

**Configuração necessária no GitHub (uma vez só):** em
*Settings → Pages → Build and deployment*, definir **Source: GitHub Actions**.

### Domínio próprio

O site é servido na raiz de `dariotech.com.br`. O domínio está declarado em
`public/CNAME` — o Next copia `public/` para `out/`, então o arquivo entra no
artefato a cada deploy. **Não apague esse arquivo:** sem ele o GitHub Pages
esquece o domínio no próximo deploy e volta para `dariotechltda.github.io`.

DNS no Registro.br, apontando a raiz para os quatro IPs do GitHub Pages:

| Tipo | Nome | Valor |
| --- | --- | --- |
| A | `@` | `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` |
| AAAA | `@` | `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153` |
| CNAME | `www` | `dario-tech-ltda.github.io.` |

Os quatro registros A existem porque a raiz de um domínio não aceita CNAME —
limitação do DNS, não do GitHub.

O alvo do CNAME é `<dono-do-repo>.github.io`, ou seja, a organização
**Dario-Tech-LTDA**. Se o repositório for movido de dono, esse registro precisa
ser atualizado junto — os registros A da raiz, não: são fixos do GitHub Pages.

O `www` não precisa de nada no código: com o apex configurado como domínio
principal, o GitHub Pages cria automaticamente o redirect
`www.dariotech.com.br` → `dariotech.com.br`. Basta o registro CNAME acima
existir; sem ele o www simplesmente não resolve.

### Sobre o `basePath`

Com domínio próprio o site fica na raiz, então o build roda sem `BASE_PATH`.
Ele só é necessário se o site voltar a ser publicado em
`dariotechltda.github.io/site-institucional/` — nesse caso, reintroduza
`env: BASE_PATH: /site-institucional` no passo de build do workflow.
