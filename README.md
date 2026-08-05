# Site institucional — DarioTech

Landing page institucional da DarioTech, publicada no GitHub Pages.

**No ar:** https://dariotechltda.github.io/site-institucional/

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

As cores vêm dos arquivos vetoriais da marca e estão declaradas em
`src/app/globals.css`:

| Token Tailwind | Hex | Uso |
| --- | --- | --- |
| `petroleo` | `#344a48` | Cor principal, textos e fundos escuros |
| `petroleo-escuro` | `#253634` | Seções escuras alternadas e rodapé |
| `laranja` | `#d67229` | Destaques, botões e links |
| `creme` | `#f5f0e3` | Fundo do site |
| `creme-claro` | `#fbf8f0` | Cards sobre o fundo creme |

As logos ficam em `src/assets/brand/`. Elas são importadas como módulo (e não
lidas de `public/`) para que o Next aplique o hash de cache e o `basePath`
automaticamente.

> **Nota:** hoje o site usa o símbolo do **Senhor Cardápio** como marca da
> DarioTech. É provisório — quando a empresa tiver identidade própria, basta
> trocar os arquivos em `src/assets/brand/`.
>
> Usamos a versão **RGB** e não a CMYK: JPEG em CMYK não tem transparência e os
> navegadores renderizam suas cores de forma inconsistente. A arte é a mesma.
>
> A versão "negativo" do símbolo não é usada: ela é uma silhueta chapada de uma
> cor só (para impressão monocromática) e perde os traços do rosto. Nas seções
> escuras usamos o símbolo positivo, cujo contorno creme já garante o contraste.

## Deploy

O deploy é automático: todo push na branch `main` dispara o workflow
`.github/workflows/deploy.yml`, que roda o build e publica o conteúdo de `out/`
no GitHub Pages.

**Configuração necessária no GitHub (uma vez só):** em
*Settings → Pages → Build and deployment*, definir **Source: GitHub Actions**.

### Sobre o `basePath`

O Pages serve este repositório em `/site-institucional/`, então o build precisa
saber desse prefixo. O workflow passa `BASE_PATH=/site-institucional`; em
desenvolvimento a variável fica vazia e tudo roda na raiz.

Ao migrar para um domínio próprio (ex.: `dariotech.com.br`):

1. Remover o `env: BASE_PATH` do workflow.
2. Criar `public/CNAME` com o domínio.
3. Apontar o DNS para o GitHub Pages e habilitar *Enforce HTTPS*.
