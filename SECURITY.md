# Política de segurança

## Versões suportadas

Só a versão no ar em [vinicgobbi.dev.br](https://vinicgobbi.dev.br), gerada a partir da branch `main`, recebe correções de segurança.

## Como relatar uma vulnerabilidade

**Não abra uma issue pública.** Relate de forma privada por um destes caminhos:

- [Relatório privado no GitHub](https://github.com/vinicgobbi/website/security/advisories/new) (preferido);
- e-mail para [vinicgobbi@gmail.com](mailto:vinicgobbi@gmail.com), com "Segurança" no assunto.

Se puder, inclua:

- o que encontrou e onde (URL, seção, arquivo);
- os passos para reproduzir;
- o impacto que você imagina.

Respondo em até 7 dias e aviso quando a correção for publicada. Se quiser, você recebe o crédito pela descoberta.

## Escopo

Entram, por exemplo:

- XSS ou injeção de conteúdo nas páginas;
- arquivos publicados por engano (dados pessoais, segredos, PDFs);
- os workflows de CI/CD em [`.github/workflows/`](.github/workflows/);
- dependências vulneráveis que de fato afetem o site.

Ficam de fora problemas da hospedagem ou do GitHub, ataques de negação de serviço e relatos automáticos sem um impacto demonstrado.
