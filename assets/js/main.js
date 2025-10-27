/**
 * main.js
 * Script principal da ONG Aumigos!
 * Inicializa SPA, validações, máscaras e menu mobile.
 */

document.addEventListener('DOMContentLoaded', () => {
  console.log('🐾 ONG Aumigos - Inicializando aplicação...');

  // -----------------------------
  // Templates
  // -----------------------------
  if (typeof Templates !== 'undefined') {
    Templates.init();
    console.log('✅ Templates carregados');
  }

  // -----------------------------
  // SPA
  // -----------------------------
  if (typeof SPA !== 'undefined') {
    SPA.init();
    console.log('✅ SPA inicializado');
  }

  // -----------------------------
  // Formulário (somente se existir)
  // -----------------------------
  if (typeof FormValidator !== 'undefined') {
    FormValidator.init();
    console.log('✅ Validação de formulários ativa');
  }

  // -----------------------------
  // Máscaras de input
  // -----------------------------
  initInputMasks();
  console.log('✅ Máscaras de entrada configuradas');

  console.log('🎉 Aplicação pronta!');
});

/**
 * Aplica máscaras em inputs
 */
function initInputMasks() {
  document.addEventListener('input', (e) => {
    const target = e.target;

    // CPF
    if (target.matches('[data-validate="cpf"]')) {
      let value = target.value.replace(/\D/g, '');
      value = value.replace(/(\d{3})(\d)/, '$1.$2');
      value = value.replace(/(\d{3})(\d)/, '$1.$2');
      value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
      target.value = value;
    }

    // Telefone
    if (target.matches('[data-validate="telefone"]')) {
      let value = target.value.replace(/\D/g, '');
      if (value.length <= 10) {
        value = value.replace(/(\d{2})(\d)/, '($1) $2');
        value = value.replace(/(\d{4})(\d)/, '$1-$2');
      } else {
        value = value.replace(/(\d{2})(\d)/, '($1) $2');
        value = value.replace(/(\d{5})(\d)/, '$1-$2');
      }
      target.value = value;
    }

    // CEP
    if (target.matches('[data-validate="cep"]')) {
      let value = target.value.replace(/\D/g, '');
      value = value.replace(/(\d{5})(\d)/, '$1-$2');
      target.value = value;
    }
  });
}


