/**
 * Sistema de Validação de Formulários
 * Verifica consistência de dados e exibe avisos ao usuário
 */

const FormValidator = {
  // Regras de validação
  rules: {
    nome: {
      required: true,
      minLength: 3,
      pattern: /^[A-Za-zÀ-ÿ\s]+$/,
      message: 'Nome deve conter apenas letras e ter no mínimo 3 caracteres'
    },
    email: {
      required: true,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: 'Email inválido. Use o formato: exemplo@dominio.com'
    },
    cpf: {
      required: true,
      // O pattern agora espera o valor mascarado, mas a validação customizada espera o valor limpo
      pattern: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
      message: 'CPF inválido. Use o formato: 000.000.000-00',
      customValidation: (value) => {
        // Remove pontos e traço
        const cleanCPF = value.replace(/\D/g, '');
        if (cleanCPF.length !== 11) return false;
        
        // Validação básica de CPF
        let sum = 0;
        let remainder;
        
        // Verifica se todos os dígitos são iguais
        if (/^(\d)\1+$/.test(cleanCPF)) return false;
        
        // Valida primeiro dígito verificador
        for (let i = 1; i <= 9; i++) {
          sum += parseInt(cleanCPF.substring(i - 1, i)) * (11 - i);
        }
        remainder = (sum * 10) % 11;
        if (remainder === 10 || remainder === 11) remainder = 0;
        if (remainder !== parseInt(cleanCPF.substring(9, 10))) return false;
        
        // Valida segundo dígito verificador
        sum = 0;
        for (let i = 1; i <= 10; i++) {
          sum += parseInt(cleanCPF.substring(i - 1, i)) * (12 - i);
        }
        remainder = (sum * 10) % 11;
        if (remainder === 10 || remainder === 11) remainder = 0;
        if (remainder !== parseInt(cleanCPF.substring(10, 11))) return false;
        
        return true;
      }
    },
    telefone: {
      required: true,
      pattern: /^\(\d{2}\)\s\d{4,5}-\d{4}$/,
      message: 'Telefone inválido. Use o formato: (00) 00000-0000'
    },
    dataNascimento: {
      required: true,
      customValidation: (value) => {
        const date = new Date(value);
        const today = new Date();
        const age = today.getFullYear() - date.getFullYear();
        // A data de nascimento deve ser no passado e a idade deve ser válida
        return date < today && age >= 18 && age <= 120;
      },
      message: 'Você deve ter entre 18 e 120 anos'
    },
    cep: {
      required: true,
      pattern: /^\d{5}-\d{3}$/,
      message: 'CEP inválido. Use o formato: 00000-000'
    },
    // CORREÇÃO: Adicionadas regras para campos de endereço
    endereco: {
      required: true,
      minLength: 5,
      message: 'Endereço é obrigatório e deve ter no mínimo 5 caracteres'
    },
    cidade: {
      required: true,
      minLength: 2,
      message: 'Cidade é obrigatória'
    },
    estado: {
      required: true,
      message: 'Estado é obrigatório'
    }
  },

  // FUNÇÃO DE NORMALIZAÇÃO
  normalizeValue(fieldName, value) {
    // Normaliza o valor para testar o pattern de campos mascarados
    if (fieldName === 'cpf' || fieldName === 'telefone' || fieldName === 'cep') {
      return value.trim();
    }
    return value;
  },

  // Valida um campo específico
  validateField(fieldName, value) {
    const rule = this.rules[fieldName];
    if (!rule) return { valid: true };
    
    // CORREÇÃO: Normaliza o valor antes de testar required/pattern
    const normalizedValue = this.normalizeValue(fieldName, value);

    // Verifica campo obrigatório
    if (rule.required && (!normalizedValue || normalizedValue.trim() === '')) {
      return {
        valid: false,
        message: `${this.getFieldLabel(fieldName)} é obrigatório`
      };
    }
    
    // Ignora validação de length e pattern se o campo não for obrigatório e estiver vazio
    if (!rule.required && normalizedValue.trim() === '') {
        return { valid: true };
    }

    // Verifica comprimento mínimo
    if (rule.minLength && normalizedValue.length < rule.minLength) {
      return {
        valid: false,
        message: rule.message || `Mínimo de ${rule.minLength} caracteres`
      };
    }

    // Verifica padrão (regex)
    if (rule.pattern && !rule.pattern.test(normalizedValue)) {
      return {
        valid: false,
        message: rule.message
      };
    }

    // Validação customizada
    if (rule.customValidation && !rule.customValidation(normalizedValue)) {
      return {
        valid: false,
        message: rule.message
      };
    }

    return { valid: true };
  },

  // Retorna label amigável do campo
  getFieldLabel(fieldName) {
    const labels = {
      nome: 'Nome',
      email: 'Email',
      cpf: 'CPF',
      telefone: 'Telefone',
      dataNascimento: 'Data de Nascimento',
      cep: 'CEP',
      // CORREÇÃO: Labels para os novos campos
      endereco: 'Endereço',
      cidade: 'Cidade',
      estado: 'Estado'
    };
    return labels[fieldName] || fieldName;
  },

  // Exibe mensagem de erro no campo
  showError(field, message) {
    // Remove erro anterior
    this.clearError(field);

    // Adiciona classe de erro
    field.classList.add('error');

    // Cria elemento de mensagem
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    errorDiv.setAttribute('role', 'alert');

    // Insere após o campo
    field.parentNode.insertBefore(errorDiv, field.nextSibling);
  },

  // Remove mensagem de erro
  clearError(field) {
    field.classList.remove('error');
    const errorMessage = field.parentNode.querySelector('.error-message');
    if (errorMessage) {
      errorMessage.remove();
    }
  },

  // Valida formulário completo
  validateForm(form) {
    let isValid = true;
    // Seleciona todos os campos com data-validate
    const fields = form.querySelectorAll('input[data-validate], select[data-validate]');

    fields.forEach(field => {
      const fieldName = field.getAttribute('data-validate');
      const value = field.value;
      const result = this.validateField(fieldName, value);

      if (!result.valid) {
        this.showError(field, result.message);
        isValid = false;
      } else {
        this.clearError(field);
      }
    });

    return isValid;
  },

  // Inicializa validação em tempo real
  initRealTimeValidation() {
    // Seleciona todos os campos data-validate no DOM atual
    const fields = document.querySelectorAll('input[data-validate], select[data-validate]');

    fields.forEach(field => {
      // Validação ao perder foco
      field.addEventListener('blur', (e) => {
        const fieldName = e.target.getAttribute('data-validate');
        const value = e.target.value;
        const result = this.validateField(fieldName, value);

        if (!result.valid) {
          this.showError(e.target, result.message);
        } else {
          this.clearError(e.target);
        }
      });

      // Limpa erro ao digitar
      field.addEventListener('input', (e) => {
        if (e.target.classList.contains('error')) {
          this.clearError(e.target);
        }
      });
    });
  },

  // Inicializa validação de formulário
  init() {
    // CORREÇÃO: initRealTimeValidation agora é chamado após a renderização do template,
    // garantindo que os event listeners sejam anexados aos elementos do DOM recém-criados.
    this.initRealTimeValidation();

    // Captura submit de formulários (somente o que foi renderizado, se houver)
    const forms = document.querySelectorAll('form[data-validate-form]');
    forms.forEach(form => {
      // Garante que o event listener só é adicionado uma vez
      if (form.getAttribute('data-form-initialized') === 'true') {
          return;
      }
      form.setAttribute('data-form-initialized', 'true');
      
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (this.validateForm(form)) {
          // Formulário válido - pode enviar
          alert('Formulário enviado com sucesso!');
          form.reset();
        } else {
          // Rola até o primeiro erro
          const firstError = form.querySelector('.error');
          if (firstError) {
            firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }
      });
    });
  }
};

// Exporta para uso global
window.FormValidator = FormValidator;