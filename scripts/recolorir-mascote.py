#!/usr/bin/env python3
"""Gera as versões coloridas do mascote a partir da arte original da marca.

A arte de origem vem do kit de identidade do Senhor Cardápio e fica fora do
repositório. Este script existe para que as imagens em `src/assets/brand/`
sejam reproduzíveis: se a paleta do site mudar, roda de novo com outra cor em
vez de editar PNG na mão.

Duas artes de origem, com estruturas diferentes:

- **Negativo** — o desenho é uma área chapada de uma cor só e os traços do
  rosto são *recortes transparentes*. Colorindo essa área e colocando sobre um
  fundo, o fundo atravessa os vazados e o rosto aparece. É a versão que serve
  para um site de campo colorido.
- **Positivo** — desenho de duas cores (creme e verde-petróleo) sobre fundo
  transparente. Serve para fundo claro.

Uso:
    python3 scripts/recolorir-mascote.py
    python3 scripts/recolorir-mascote.py --cor '#FFFFFF' --saida mascote-branco.png
"""

from __future__ import annotations

import argparse
import sys
from pathlib import Path

try:
    from PIL import Image
except ImportError:
    sys.exit("Este script precisa do Pillow: pip install Pillow")

KIT = Path.home() / "Downloads/SenhorCardapioIdentidadeVisual/Arte Final/RGB (Telas)/Simbolo"
NEGATIVO = KIT / "Senhor_Cardapio_Simbolo_RGB_Negativo_PNG.png"
DESTINO = Path(__file__).resolve().parent.parent / "src/assets/brand"


def hex_para_rgb(valor: str) -> tuple[int, int, int]:
    v = valor.lstrip("#")
    if len(v) != 6:
        raise argparse.ArgumentTypeError(f"cor inválida: {valor} (esperado #RRGGBB)")
    return tuple(int(v[i : i + 2], 16) for i in (0, 2, 4))  # type: ignore[return-value]


def recolorir(origem: Path, cor: tuple[int, int, int], destino: Path) -> None:
    """Pinta a área opaca da arte com `cor`, preservando o canal alfa.

    Só o RGB é substituído: o alfa original carrega tanto os vazados do rosto
    quanto a suavização das bordas, então mexer nele serrilharia o contorno.
    """
    im = Image.open(origem).convert("RGBA")

    # Recorta na arte antes de pintar — o arquivo do kit tem uma margem
    # transparente enorme, que faria o desenho parecer pequeno na página.
    caixa = im.getbbox()
    if caixa is None:
        raise SystemExit(f"{origem.name}: imagem totalmente transparente")
    im = im.crop(caixa)

    alfa = im.getchannel("A")
    pintado = Image.new("RGBA", im.size, (*cor, 255))
    pintado.putalpha(alfa)

    destino.parent.mkdir(parents=True, exist_ok=True)
    pintado.save(destino, optimize=True)

    largura, altura = pintado.size
    print(f"  {destino.name}: {largura}x{altura} em #{cor[0]:02x}{cor[1]:02x}{cor[2]:02x}")


def main() -> None:
    p = argparse.ArgumentParser(description=__doc__)
    p.add_argument("--cor", type=hex_para_rgb, default="#FFFFFF",
                   help="cor do desenho, em #RRGGBB (padrão: #FFFFFF)")
    p.add_argument("--saida", default="mascote-branco.png",
                   help="nome do arquivo gerado em src/assets/brand/")
    p.add_argument("--origem", type=Path, default=NEGATIVO,
                   help="arte de origem (padrão: símbolo negativo do kit)")
    args = p.parse_args()

    if not args.origem.exists():
        sys.exit(
            f"Arte de origem não encontrada:\n  {args.origem}\n\n"
            "O kit da marca não é versionado. Baixe-o e ajuste --origem."
        )

    print("Gerando mascote:")
    recolorir(args.origem, args.cor, DESTINO / args.saida)


if __name__ == "__main__":
    main()
