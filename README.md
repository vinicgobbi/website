# Portfólio — Vinícius Cavati Gobbi

Meu site de portfólio pessoal, desenvolvido em Angular. Reúne apresentação, experiência, stacks, certificações e os projetos em que trabalhei (institucionais e pessoais).

🔗 [vinicgobbi.dev.br](https://vinicgobbi.dev.br)

## Stack

- [Angular](https://angular.dev/) (standalone components + SSR)
- Bootstrap 5 / ng-bootstrap
- SCSS
- TypeScript

## Estrutura

```
src/app/components/   # seções da página (home, about, experience, stacks, projects, contact, ...)
src/app/services/     # serviços (ex.: leitura de projects.json)
src/app/shared/       # interfaces e utilitários compartilhados
public/assets/        # imagens, ícones e o projects.json com os dados dos projetos
resume/               # currículo em LaTeX (cv-vinicius-gobbi.tex) usado para gerar o PDF exposto no site
```

Os projetos exibidos na seção "Meus Projetos" são carregados de [`public/assets/projects.json`](public/assets/projects.json) — para adicionar ou editar um projeto, basta alterar esse arquivo (segue a interface em [`src/app/shared/interfaces/project.ts`](src/app/shared/interfaces/project.ts)).

## Desenvolvimento

Instalar dependências:

```bash
pnpm install
```

Subir o servidor local:

```bash
pnpm start
```

Acesse `http://localhost:4200/`. A aplicação recarrega automaticamente ao salvar alterações.

## Build

```bash
pnpm run build
```

Os artefatos de build vão para `dist/docs` (configurado em `angular.json` para publicação via GitHub Pages).

## Deploy

O deploy é feito com [angular-cli-ghpages](https://github.com/angular-schule/angular-cli-ghpages):

```bash
ng deploy
```

## Testes

```bash
pnpm test
```

## Currículo

O CV em PDF disponibilizado no site é gerado a partir do `.tex` em [`resume/cv-vinicius-gobbi.tex`](resume/cv-vinicius-gobbi.tex).

Sempre que esse arquivo é alterado na `main`, o workflow [`compile-resume.yml`](.github/workflows/compile-resume.yml) compila o LaTeX automaticamente e faz commit do PDF atualizado em `resume/cv-vinicius-gobbi.pdf` e `public/assets/cv-vinicius-gobbi.pdf` — não é necessário compilar manualmente após um push.

O deploy do site roda no Netlify a cada push na `main`. Para evitar que ele publique com o PDF ainda desatualizado (antes da Action terminar de compilar), o [`netlify.toml`](netlify.toml) faz o Netlify pular o build quando o único arquivo alterado no commit for o `.tex` do currículo — o build "de verdade" acontece no push seguinte, feito pela própria Action já com o PDF novo.

Para compilar localmente (Ubuntu), por exemplo para conferir o resultado antes de commitar:

```bash
sudo apt install texlive-latex-base texlive-latex-recommended texlive-latex-extra texlive-fonts-extra texlive-fonts-recommended texlive-lang-portuguese
cd resume && pdflatex cv-vinicius-gobbi.tex
```
