/**
 * Sistema SPA (Single Page Application)
 * Gerencia navegação entre páginas sem recarregar
 */

const SPA = {
  // Container principal onde o conteúdo será carregado
  contentContainer: null,

  // Cache de páginas carregadas
  cache: {},

  // Página atual
  currentPage: '',

  // Mapeamento de rotas (mantido para referência)
  routes: {
      '/': 'index',
      '/projetos': 'projetos',
      '/cadastro': 'cadastro'
  },

  // Inicializa o sistema SPA
  init() {
    // Define container principal
    this.contentContainer = document.getElementById('app-content') || document.querySelector('main');

    // Captura cliques em links
    this.interceptLinks();

    // Gerencia botões voltar/avançar do navegador
    window.addEventListener('popstate', (e) => {
      if (e.state && e.state.page) {
        this.loadPage(e.state.page, false);
      }
    });

    // Lógica para determinar a página inicial correta
    const path = window.location.pathname.toLowerCase();
    let pageName = 'index'; // Padrão
    
    // 1. Verifica o nome do arquivo na URL para inicialização (Ex: /projetos.html)
    if (path.includes('projetos')) {
        pageName = 'projetos';
    } else if (path.includes('cadastro')) {
        pageName = 'cadastro';
    } else if (path.includes('index') || path === '/') {
        pageName = 'index';
    }
    
    // 2. Carrega o conteúdo correto no corpo principal
    this.loadPage(pageName, true);

    // 3. Limpa a URL do histórico (Se abriu .html, muda para a rota SPA limpa)
    if (path.endsWith('.html') || path === '/') {
        const cleanPath = `/${pageName === 'index' ? '' : pageName}`;
        history.replaceState({ page: pageName }, '', cleanPath);
    }
  },

  // Intercepta cliques em links para navegação SPA (FOCADO NO data-page)
  interceptLinks() {
    document.addEventListener('click', (e) => {
      // Busca o elemento <a> mais próximo que possui o atributo data-page
      const link = e.target.closest('a[data-page]');
      
      if (link) {
        e.preventDefault();
        
        // FOCA APENAS NO ATRIBUTO data-page PARA NAVEGAÇÃO INTERNA
        const pageName = link.getAttribute('data-page');
        
        // Navega se o nome da página for válido e diferente da página atual
        if (pageName && pageName !== this.currentPage) {
            this.navigateTo(pageName);
        }
      }
    });
  },

  // Navega para uma página
  navigateTo(pageName) {
    // 1. Atualiza histórico do navegador
    const path = `/${pageName === 'index' ? '' : pageName}`;
    history.pushState({ page: pageName }, '', path);

    // 2. Carrega a página
    this.loadPage(pageName, true);
  },

  // Carrega conteúdo da página
  async loadPage(pageName, addToHistory) {
    // Verifica se página existe no cache
    if (this.cache[pageName]) {
      this.renderPage(pageName, this.cache[pageName]);
      return;
    }

    // Exibe loading
    this.showLoading();

    try {
      // Carrega template da página
      await new Promise(resolve => setTimeout(resolve, 50));
      const template = Templates.get(pageName);
      
      if (template) {
        // Armazena no cache
        this.cache[pageName] = template;
        
        // Renderiza página
        this.renderPage(pageName, template);
      } else {
        this.showError('Página não encontrada');
      }
    } catch (error) {
      console.error('Erro ao carregar página:', error);
      this.showError('Erro ao carregar página');
    }
  },

  // Renderiza página no container
  renderPage(pageName, content) {
    // Atualiza container
    if (this.contentContainer) {
      this.contentContainer.innerHTML = content;
    }

    // Atualiza página atual
    this.currentPage = pageName;

    // Atualiza menu ativo
    this.updateActiveMenu(pageName);

    // Reinicializa validação de formulários
    if (pageName === 'cadastro' && typeof FormValidator !== 'undefined') {
      FormValidator.init();
    }

    // Rola para o topo
    window.scrollTo(0, 0);
  },

  // Atualiza menu ativo
  updateActiveMenu(pageName) {
    // Remove classe active de todos os links
    document.querySelectorAll('nav a').forEach(link => {
      link.classList.remove('active');
    });

    // Adiciona classe active no link atual (busca pelo data-page)
    const activeLink = document.querySelector(`nav a[data-page="${pageName}"]`);
    if (activeLink) {
      activeLink.classList.add('active');
    }
  },

  // Exibe loading
  showLoading() {
    if (this.contentContainer) {
      this.contentContainer.innerHTML = '<div class="loading">Carregando...</div>';
    }
  },

  // Exibe erro
  showError(message) {
    if (this.contentContainer) {
      this.contentContainer.innerHTML = `<div class="error-page">${message}</div>`;
    }
  }
};

// Exporta para uso global
window.SPA = SPA;