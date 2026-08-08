# Currículo (LaTeX)

Fonte do currículo em `cv-vinicius-gobbi.tex`, com os dados extraídos diretamente dos componentes do site (experiência, projetos, stacks e certificações).

## Como compilar

**Overleaf (mais simples, sem instalar nada):** crie um projeto novo, faça upload de `cv-vinicius-gobbi.tex` e clique em "Recompile".

**Localmente**, com uma distribuição TeX (TeX Live/MiKTeX) instalada:

```bash
pdflatex cv-vinicius-gobbi.tex
```

**Sem instalar TeX**, usando Docker:

```bash
docker run --rm --user "$(id -u):$(id -g)" -e HOME=/tmp -v "$PWD":/data -w /data \
  texlive/texlive:latest pdflatex -interaction=nonstopmode cv-vinicius-gobbi.tex
```

## Atualizar o currículo publicado no site

Depois de recompilar, copie o PDF gerado para `public/assets/cv-vinicius-gobbi.pdf` — é o arquivo que o botão "Baixar CV" do header serve diretamente.

```bash
cp cv-vinicius-gobbi.pdf ../public/assets/cv-vinicius-gobbi.pdf
```
