# Desenvolvimento Front-End Para Web  
## Fundamentos da Web e Estruturação de Interfaces  

**Nome:** João Carlos Fabri de Andrade  
**RGM:** 46253904  

# ONG Aumigos!

## Visão Geral  
Este projeto é um sistema web desenvolvido para fornecer presença digital profissional e funcional para ONGs, incluindo páginas institucionais, cadastro e divulgação de projetos sociais, área para voluntários e gerenciamento de informações da organização.

## Estrutura do Projeto  
```
Projeto - Aumigos
├── assets
│   ├── css
│   │   ├── estilo.css                   # Estilo geral das páginas
│   │   ├── spa-validation.css           # Aparência visual/formulários
│   │   └── componentes.css              # Componentes visuais e SPA
│   ├── images
│   │   ├── logo-ong-aumigos.jpg         # Logo ONG
│   │   ├── equipe.jpg                   # Equipe
│   │   ├── projeto-patas.jpg            # Projeto Patas Solidárias
│   │   ├── projeto-educacao.jpg         # Projeto Educação com Patas
│   │   ├── cachorro-oculos.jpg          # Ilustração cadastro
│   │   ├── video-animais.mp4            # Vídeo institucional
│   │   ├── marca-pata.png               # Decoração lateral
│   │   ├── Validacao-pagina-INDEX-no-W3C.png
│   │   ├── Validacao-pagina-PROJETOS-no-W3C.png
│   │   └── Validacao-pagina-Cadastro-no-W3C.png
│   ├── HTML
│   │   ├── index.html                   # Página SPA principal
│   │   ├── projetos.html                # Fallback projetos
│   │   └── cadastro.html                # Fallback cadastro
│   ├── js
│   │   ├── main.js                      # Inicialização SPA
│   │   ├── templates.js                 # Templates SPA JS
│   │   ├── spa.js                       # Navegação SPA JS
│   │   └── form-validation.js           # Validação JS dos formulários
│   ├── README Fase1-HTML.md
│   ├── README Fase2-HTML-CSS.md
│   └── README Fase3-HTML-CSS-JS.md
└── README.md

🔹 Observação: O index.html está na raiz para funcionar corretamente com o GitHub Pages. As outras páginas são carregadas pelo SPA a partir da pasta assets/HTML/.
```

## Aplicação de JavaScript

- SPA (Single Page Application) criada com JS:
  - Injeção dinâmica dos conteúdos usando templates JS (`templates.js`)
  - Navegação entre páginas carregando `<main>` dinamicamente via JS (`spa.js`)
  - Manipulação do DOM para atualização sem reload de página
  - Menu SPA navegável e com indicação de página ativa

- Formulários dinâmicos e inteligentes:
  - Validação em tempo real (campos obrigatórios, formatos — ex: email, CPF, data)
  - Máscaras automáticas (telefone e CPF)
  - Feedback visual em campos inválidos
  - Prevenção de submit se houver erro

- Modularização e organização:
  - Scripts separados por função (`main.js`, `templates.js`, `spa.js`, `form-validation.js`)
  - Componentização para fácil evolução/manutenção

- Acessibilidade:
  - Alt em imagens dinâmicas
  - Respeito a navegação por teclado
  - Feedbacks visuais e textos de ajuda

## Tecnologias Utilizadas

- HTML5 semântico e acessível
- CSS3 avançado para layout responsivo e componentes visuais
- JavaScript (SPA, DOM, templates, validação, navegação dinâmica)
- Imagens otimizadas e multimídia incorporada


## Como rodar o projeto

1. Abra a pasta do projeto no VSCode.
2. Utilize o Live Server (Go Live) e abra `assets/HTML/index.html`.
3. Sempre navegue usando o menu do site. Não abra diretamente projetos.html ou cadastro.html.
4. O projeto é responsivo e funciona em dispositivos móveis e desktop.
---



