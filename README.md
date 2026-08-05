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
arredondadas); a empresa é noturna e fria. Essa separação por temperatura é o
que impede que o institucional seja lido como "o site do produto".

Tokens em `src/app/globals.css`:

| Token Tailwind | Hex | Uso |
| --- | --- | --- |
| `noite` | `#0b0e15` | Fundo do site |
| `grafite` | `#131826` | Cards e superfícies elevadas |
| `traco` | `#232b3f` | Divisórias e bordas |
| `gelo` | `#e9ecf5` | Texto principal |
| `bruma` | `#8d96af` | Texto secundário e rótulos |
| `indigo` | `#535bdd` | Botões, links e o destaque da assinatura |
| `indigo-claro` | `#949af5` | Links sobre fundo escuro |
| `creme` | `#f5f0e3` | Só a faixa da marca do produto |

Todos os pares de texto passam em **WCAG AA** (4.5:1). O `indigo` foi escurecido
de `#5b63e8` para `#535bdd` porque o tom original reprovava em 4.05:1 com o
texto dos botões por cima.

**Tipografia:** Bricolage Grotesque nos títulos, Instrument Sans no texto
corrido, IBM Plex Mono só nos rótulos de dado. Nenhuma é a geométrica
arredondada da marca do produto.

**Assinatura:** o nome da empresa saindo do nome do avô — `JORGE OR·DÁRIO·DUTRA`
→ `DarioTech`, com o destaque se acendendo no carregamento (respeitando
`prefers-reduced-motion`). O mesmo fio se repete em "Quem somos", onde o
sobrenome **Dutra** aparece destacado nos três nomes.

### Onde cada marca aparece

As imagens ficam em `src/assets/brand/`, importadas como módulo (e não lidas de
`public/`) para que o Next aplique hash de cache e `basePath` automaticamente.

- **Topo e rodapé:** assinatura tipográfica "DarioTech". O mascote **não** entra
  aqui — ele é o logo do Senhor Cardápio, e no cabeçalho seria lido como logo da
  empresa.
- **Produtos:** a marca completa do Senhor Cardápio, sobre faixa creme. É o
  único lugar do site em que ela representa o produto, e não a empresa.
- **História:** o mascote como **retrato** do vô Dario, com legenda. Cortado nas
  bordas do desenho (`mascote.png`); o arquivo original tinha 76% de margem
  transparente, o que o fazia parecer pequeno e solto na página.

> **Pendência:** a DarioTech ainda não tem símbolo próprio — hoje a marca é só
> tipográfica. Quando houver, ele entra no cabeçalho, no rodapé e no favicon
> (`src/app/icon.png`, que hoje usa o mascote).
>
> Dos arquivos da identidade, usamos a versão **RGB** e não a CMYK: JPEG em CMYK
> não tem transparência e os navegadores renderizam suas cores de forma
> inconsistente. A arte é a mesma. A versão "negativo" não serve para tela — é
> uma silhueta chapada de uma cor só, para impressão monocromática.

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
