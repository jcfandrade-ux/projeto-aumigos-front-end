# Desenvolvimento Front-End Para Web
## Fundamentos da Web e Estruturação de Interfaces

**Nome:** João Carlos Fabri de Andrade
**RGM:** 46253904

## Sobre

Este documento finaliza o projeto mostrando a consolidação das melhores práticas profissionais de desenvolvimento web, especialmente:

- Versionamento organizado;
- Acessibilidade conforme WCAG 2.1 Nível AA;
- Otimização para produção;
- Deploy público acessível.

---

## Controle de Versão (Git/GitHub)

- Método GitFlow adotado com branches:  
  - `main` para produção;  
  - `develop` para desenvolvimento integrado;  
  - branches `feature/`, `release/` e `hotfix/` conforme necessidade.  
- Histórico de commits limpo e semântico, como:  
  - `feat: adiciona navegação SPA`  
  - `fix: corrige contraste dos botões`  
- Utilização de Pull Requests para revisão e documentação das mudanças  
- Issues e milestones criando um fluxo contínuo de acompanhamento do projeto  
- Releases com versionamento semântico marcando as entregas das fases

---

## Acessibilidade (WCAG 2.1 AA)

- Estrutura semântica correta (uso adequado de tags `<header>`, `<nav>`, `<main>`, `<section>`, `<form>`, `<footer>`)  
- Navegação completa por teclado, com foco visível claro em menus, links e formulários  
- Contraste adequado e testado, com relação mínima 4.5:1 entre textos e fundos  
- Suporte para leitores de tela com labels e atributos ARIA quando necessários  
- Implementação de modo alto contraste e modo escuro acessível (toggle e media queries CSS)

---

## Otimização para Produção

- Minificação de arquivos CSS, JS e HTML usando ferramentas especializadas  
- Compressão e otimização de imagens (convertidas para formatos leves, como WebP)  
- Estrutura de arquivos preparada para deploy e manutenção em ambiente estático  
- Scripts e estilos carregados eficientemente para performance aprimorada

---

## Deploy

- Projeto hospedado publicamente em ambiente estático:  
    https://jcfandrade-ux.github.io/projeto-aumigos-front-end/
- Testes realizados para garantir navegabilidade, acessibilidade e responsividade no ambiente de produção

---

## Como rodar localmente

1. Clone o repositório:  
git clone [\[URL_DO_REPOSITÓRIO\]](https://github.com/jcfandrade-ux/projeto-aumigos-front-end)
cd projeto-aumigos-front-end

2. Use o VSCode + extensão Live Server para abrir `assets/HTML/index.html`
3. Navegue usando o menu para garantir o funcionamento correto do SPA
4. Teste formulários, navegação e layout em dispositivos variados

---

## Considerações Finais

Este projeto é a consolidação de um desenvolvimento completo para a ONG Aumigos, corrigindo aspectos técnicos e visuais nas fases 1 a 3 e integrando práticas modernas com controle de versão, análise de acessibilidade e deploy público.

---
## Controle de Versão e Fluxo de Trabalho no GitHub

O projeto é organizado em diferentes ramos (branches), representando cada fase evolutiva do desenvolvimento e facilitando o controle de versões e a manutenção do código.

### Estrutura de Branches

- **principal**: Branch padrão e principal do projeto, sempre estável e pronta para produção, reunindo todas as entregas consolidadas.
- **fase-2-css**: Branch de desenvolvimento referente à Fase 2, dedicada à implementação e ajustes do CSS, responsividade e design visual.
- **fase-3-js**: Branch específica da Fase 3, onde foi implementada toda a lógica SPA, templates e funcionalidades JavaScript.

A cada evolução de fase, as branchs foram mantidas e integradas na principal, assegurando histórico e rastreabilidade entre as etapas.

### Histórico de Commits

- As mensagens de commit são semânticas e objetivas, por exemplo:
  - `feat: implementa navegação SPA`
  - `fix: acerta contraste de botões`
  - `docs: adiciona orientações no README`

### Pull Requests, Issues e Releases

- Pull Requests realizados para revisão e integração de branchs
- Issues utilizadas para acompanhamento de pendências e refinamento do projeto
- Releases planejados e marcados ao final de cada fase, com changelogs objetivos

---

## Otimização de Código e Imagens

O projeto passou por um processo de otimização, garantindo carregamento rápido e boa experiência em qualquer dispositivo.

### Minificação de Arquivos
- Todos os arquivos CSS e JS utilizados no deploy final foram minificados para reduzir tamanho e agilizar o carregamento.
  - Ferramentas como extensões do VSCode 
  - Os arquivos minificados substituem os originais nas rotas de deploy ou ficam em uma pasta separada (ex: `/dist`).

### Otimização de Imagens
- Imagens otimizadas em formatos leves (JPEG/PNG comprimidos, WebP) sem perda significativa de qualidade.
- O site utiliza imagens redimensionadas conforme o layout responsivo para evitar downloads desnecessários em dispositivos móveis.
- Foram utilizadas ferramentas como TinyPNG, Squoosh ou exportação otimizada a partir de editores gráficos.

### Produção mais leve
- HTML revisado para remover espaços, comentários e trechos desnecessários.
- CSS modularizado e padronizado, aproveitando variáveis e regras reutilizáveis.
- Scripts JavaScript organizados para carregar apenas o necessário, evitando blocos não utilizados.

---

## Deploy Público

O projeto está publicado em ambiente estático de acesso livre, permitindo a qualquer pessoa conhecer a ONG, navegar pelo sistema e testar todas as funcionalidades.

### Plataforma de Deploy

- O deploy foi realizado utilizando o [GitHub Pages](https://pages.github.com/), garantindo disponibilidade e acesso gratuito ao site.

### Link de Acesso

- Acesse o projeto rodando em produção pelo link:
https://jcfandrade-ux.github.io/projeto-aumigos-front-end/


### Como testar

- Basta acessar pelo navegador (desktop ou mobile) para verificar:
- Navegação SPA sem recarregar a página
- Menus e formulários acessíveis via teclado
- Contraste e responsividade em diferentes tamanhos de tela
- Temas de alto contraste/escuro se oferecidos

---

O deploy é auditado constantemente – qualquer atualização nas branchs aplicadas é refletida automaticamente (ou manualmente, caso necessário) na versão de produção do site.


