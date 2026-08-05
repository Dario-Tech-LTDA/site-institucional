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

Paleta **"Ardósia média + argila"**: azul dessaturado com texto marfim quente.
A separação do Senhor Cardápio vem da temperatura — o produto é diurno e claro
(creme, laranja, letras arredondadas), a empresa é escura e sóbria.

| Token Tailwind | Hex | Uso |
| --- | --- | --- |
| `base` | `#2a3b52` | Fundo do site |
| `superficie` | `#33465f` | Cards |
| `linha` | `#4a5d77` | Divisórias |
| `texto` | `#f1ece4` | Texto principal |
| `suave` | `#b6c1d0` | Texto secundário e rótulos |
| `acento` | `#e0916f` | Fundo de botão e elementos gráficos |
| `acento-texto` | `#efb097` | Texto e links em cor de acento |
| `tinta` | `#22303f` | Texto sobre o acento |
| `creme` | `#f5f0e3` | Só a faixa da marca do produto |

Contraste auditado no DOM renderizado (70 elementos de texto): **todos passam em
WCAG AA**, mínimo 5.19:1. Três regras que vieram dessa medição:

- `acento` **nunca é texto** — sobre a superfície dá 3.87:1. Para texto em cor
  de acento, use `acento-texto`.
- Botão de acento leva texto `tinta`; texto claro por cima reprova.
- Não clarear o fundo nem escurecer o `suave` sem medir de novo.

### Paleta alternativa aprovada: "Navy profundo + latão"

Mais escura e formal, mesma estrutura. Trocar os nove valores no `@theme` de
`globals.css` (estão documentados em comentário lá) e regerar o favicon com a
cor de fundo nova. Também passa em AA, com folga maior — 13.65:1 no texto
principal contra 9.67:1 da Ardósia.

**Tipografia:** Bricolage Grotesque nos títulos, Instrument Sans no texto
corrido, IBM Plex Mono só nos rótulos de dado.

**A origem do nome** aparece como nota discreta no hero — "DarioTech é o apelido
do nosso avô, Jorge Or*dário* Dutra", com um traço fino sob as letras que viraram
o nome. A história completa fica na seção História. O sobrenome **Dutra** também
aparece destacado nos três fundadores.

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
