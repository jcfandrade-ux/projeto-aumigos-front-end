/**
 * Script Principal
 * Inicializa todos os módulos da aplicação
 */

// Aguarda carregamento completo do DOM
document.addEventListener('DOMContentLoaded', () => {
  console.log('🐾 ONG Aumigos - Inicializando aplicação...');

  // Inicializa sistema de templates
  Templates.init();
  console.log('✅ Templates carregados');

  // CORREÇÃO: Remoção de FormValidator.init(), pois é inicializado pelo SPA.
  // console.log('✅ Validação de formulários ativa');

  // Inicializa sistema SPA
  SPA.init();
  console.log('✅ Sistema SPA inicializado');

  // Máscaras de entrada para campos
  initInputMasks();
  console.log('✅ Máscaras de entrada configuradas');

  console.log('🎉 Aplicação pronta!');
});

// Função para aplicar máscaras de entrada
function initInputMasks() {
  // Máscara de CPF
  document.addEventListener('input', (e) => {
    if (e.target.matches('[data-validate="cpf"]')) {
      let value = e.target.value.replace(/\D/g, '');
      value = value.replace(/(\d{3})(\d)/, '$1.$2');
      value = value.replace(/(\d{3})(\d)/, '$1.$2');
      value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
      e.target.value = value;
    }

    // Máscara de Telefone
    if (e.target.matches('[data-validate="telefone"]')) {
      let value = e.target.value.replace(/\D/g, '');
      if (value.length <= 10) {
        value = value.replace(/(\d{2})(\d)/, '($1) $2');
        value = value.replace(/(\d{4})(\d)/, '$1-$2');
      } else {
        value = value.replace(/(\d{2})(\d)/, '($1) $2');
        value = value.replace(/(\d{5})(\d)/, '$1-$2');
      }
      e.target.value = value;
    }

    // Máscara de CEP
    if (e.target.matches('[data-validate="cep"]')) {
      let value = e.target.value.replace(/\D/g, '');
      value = value.replace(/(\d{5})(\d)/, '$1-$2');
      e.target.value = value;
    }
  });
}