const SPA = {
  contentContainer: null,
  cache: {},
  currentPage: '',
  routes: {
    '/': 'index',
    '/projetos': 'projetos',
    '/cadastro': 'cadastro'
  },

  init() {
    this.contentContainer = document.getElementById('app-content') || document.querySelector('main');

    if (!this.contentContainer) {
      console.error('Container de conteúdo não encontrado.');
      return;
    }

    this.interceptLinks();

    window.addEventListener('popstate', (e) => {
      if (e.state && e.state.page) {
        this.loadPage(e.state.page, false);
      }
    });

    const path = window.location.pathname.toLowerCase();
    let pageName = 'index';
    if (path.includes('projetos')) pageName = 'projetos';
    else if (path.includes('cadastro')) pageName = 'cadastro';

    this.loadPage(pageName, true);

    const cleanPath = `/${pageName === 'index' ? '' : pageName}`;
    history.replaceState({ page: pageName }, '', cleanPath);
  },

  interceptLinks() {
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[data-page]');
    if (link) {
      e.preventDefault();
      const pageName = link.getAttribute('data-page');
      console.log('Clique interceptado: página', pageName);
      if (pageName && pageName !== this.currentPage) {
        this.navigateTo(pageName);
        this.closeMobileMenu();
        }
      }
    });
  },

  navigateTo(pageName) {
    const path = `/${pageName === 'index' ? '' : pageName}`;
    history.pushState({ page: pageName }, '', path);
    this.loadPage(pageName, true);
  },

  async loadPage(pageName, addToHistory) {
    if (this.cache[pageName]) {
      this.renderPage(pageName, this.cache[pageName]);
      return;
    }

    this.showLoading();

    try {
      await new Promise(resolve => setTimeout(resolve, 50));
      const template = Templates.get(pageName);

      if (template) {
        this.cache[pageName] = template;
        this.renderPage(pageName, template);
      } else {
        this.showError('Página não encontrada.');
      }
    } catch (error) {
      console.error('Erro ao carregar página:', error);
      this.showError('Erro ao carregar página.');
    }
  },

  renderPage(pageName, content) {
    if (this.contentContainer) {
      this.contentContainer.innerHTML = content;
    }
    this.currentPage = pageName;
    this.updateActiveMenu(pageName);
    if (pageName === 'cadastro' && typeof FormValidator !== 'undefined') {
      FormValidator.init();
    }
    window.scrollTo(0, 0);
  },

  updateActiveMenu(pageName) {
    document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));
    const activeLink = document.querySelector(`nav a[data-page="${pageName}"]`);
    if (activeLink) activeLink.classList.add('active');
  },

  showLoading() {
    if (this.contentContainer) {
      this.contentContainer.innerHTML = '<div class="loading">Carregando...</div>';
    }
  },

  showError(message) {
    if (this.contentContainer) {
      this.contentContainer.innerHTML = `<div class="error-page">${message}</div>`;
    }
  },

  initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');

    if (menuToggle && navList) {
      menuToggle.addEventListener('click', () => {
        navList.classList.toggle('open');
        menuToggle.classList.toggle('active');
      });
    } else {
      console.warn('Elementos do menu mobile não encontrados.');
    }
  },

  closeMobileMenu() {
    const navList = document.querySelector('.nav-list');
    const menuToggle = document.querySelector('.menu-toggle');

    if (navList && navList.classList.contains('open')) {
      navList.classList.remove('open');
    }
    if (menuToggle && menuToggle.classList.contains('active')) {
      menuToggle.classList.remove('active');
    }
  }
};

window.SPA = SPA;

// Inicializa SPA e outros recursos
document.addEventListener('DOMContentLoaded', () => {
  SPA.init();
});

// Inicializa menu mobile separadamente para garantir o DOM ready
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navList = document.querySelector('.nav-list');
  if (menuToggle && navList) {
    menuToggle.addEventListener('click', () => {
      navList.classList.toggle('open');
      menuToggle.classList.toggle('active');
    });
  }
});
