/**
 * Sistema de Templates
 * Gerencia templates HTML para o sistema SPA
 */

const Templates = {
  // Armazena templates
  templates: {},

  // Registra templates das páginas
  register() {
  // Template da página inicial (index)
  this.templates.index = `
    <section>
      <h2>Missão</h2>
      <p>Promover o bem-estar integral de animais e pessoas, fortalecendo vínculos de empatia e solidariedade por meio de projetos sociais inovadores, inclusivos e sustentáveis, que transformam vidas e comunidades.</p>
    </section>

    <section>
      <h2>Visão</h2>
      <p>Tornar-se a principal referência nacional em proteção animal e transformação social, promovendo educação sustentável e engajamento comunitário que inspirem mudanças duradouras no respeito à vida.</p>
    </section>

    <section>
      <h2>Valores</h2>
      <ul>
        <li>Transparência</li>
        <li>Empatia</li>
        <li>Solidariedade</li>
        <li>Respeito à vida</li>
      </ul>
    </section>

    <section>
      <h2>Nossa Equipe</h2>
      <img src="assets/images/equipe.jpg" alt="Equipe da ONG Aumigos!" width="400">
    </section>

    <section>
      <h2>Contato</h2>
      <ul>
        <li>Telefone: (15) 99123-9952</li>
        <li>E-mail: contato@ongaumigos.org</li>
        <li>Endereço: Rua Rafaela Camargo, 123, Centro — Votorantim/SP</li>
      </ul>
    </section>
  `;

  // Template da página de projetos (projetos)
  this.templates.projetos = `
    <section>
      <h2>Projeto Patas Solidárias</h2>
      <p>Resgata e promove a adoção responsável de animais em situação de abandono.</p>
      <img src="assets/images/projeto-patas.jpg" alt="Resgate animal realizado pela ONG Aumigos!" width="300">
    </section>

    <section>
      <h2>Projeto Educação com Patas</h2>
      <p>Leva palestras sobre respeito e responsabilidade aos lares e escolas.</p>
      <img src="assets/images/projeto-educacao.jpg" alt="Palestra educativa promovida pela ONG Aumigos!" width="300">
    </section>

    <section>
      <h2>Como ser voluntário</h2>
      <p>Basta preencher nosso <a href="#" data-page="cadastro">formulário de cadastro</a> e contribuir nos projetos.</p>
      
      <h2>Como doar</h2>
      <p>Faça uma doação via conta bancária ou pelo Pix e ajude a salvar vidas!</p>

      <h3>Doação via PIX</h3>
      <p>Chave PIX: <strong>pix@aumigos.org</strong></p>
      <p>Banco: Banco Bradesco - Agência: 0001 - Conta: 12345-6</p>

      <h3>Doação via Depósito Bancário</h3>
      <p>Banco: Banco Bradesco</p>
      <p>Agência: 0001</p>
      <p>Conta Corrente: 12345-6</p>
      <p>Conta em nome da ONG Aumigos</p>

      <video controls src="assets/images/video-aumigos.mp4" alt="Vídeo dos projetos da ONG Aumigos!" width="400"></video>
    </section>
  `;

  // Template da página de cadastro (cadastro)
  this.templates.cadastro = `
    <img src="assets/images/cachorro-oculos.jpg" alt="Cachorro com óculos preenchendo formulário" width="300">
    
    <form data-validate-form>
      <fieldset>
        <legend>Dados Pessoais</legend>
        <label for="nome">Nome Completo*</label>
        <input type="text" id="nome" name="nome" data-validate="nome" required>

        <label for="email">Email*</label>
        <input type="email" id="email" name="email" data-validate="email" autocomplete="email" required>

        <label for="cpf">CPF*</label>
        <input type="text" id="cpf" name="cpf" data-validate="cpf" autocomplete="off" maxlength="14" required>

        <label for="telefone">Telefone*</label>
        <input type="tel" id="telefone" name="telefone" data-validate="telefone" autocomplete="tel" maxlength="15" required>

        <label for="dataNascimento">Data de Nascimento*</label>
        <input type="date" id="dataNascimento" name="dataNascimento" data-validate="dataNascimento" required>
      </fieldset>

      <fieldset>
        <legend>Endereço</legend>
        
        <label for="cep">CEP*</label>
        <input type="text" id="cep" name="cep" autocomplete="postal-code" maxlength="9" data-validate="cep" required>

        <label for="endereco">Endereço*</label>
        <input type="text" id="endereco" name="endereco" data-validate="endereco" autocomplete="address-line1" required>

        <label for="cidade">Cidade*</label>
        <input type="text" id="cidade" name="cidade" data-validate="cidade" autocomplete="address-level2" required>

        <label for="estado">Estado*</label>
        <select id="estado" name="estado" data-validate="estado" required>
          <option value="">Selecione...</option>
          <option value="SP">São Paulo</option>
          <option value="RJ">Rio de Janeiro</option>
          <option value="MG">Minas Gerais</option>
          <option value="ES">Espírito Santo</option>
          <option value="PR">Paraná</option>
          <option value="SC">Santa Catarina</option>
          <option value="RS">Rio Grande do Sul</option>
        </select>
      </fieldset>
      <button type="submit">Enviar cadastro</button>
    </form>
    `;
  },

  // Retorna template por nome
  get(name) {
    if (this.templates[name]) {
      return this.templates[name];
    }
    return null;
  },

  // Inicializa o módulo (chamado em main.js)
  init() {
    this.register();
  }
};

// Exporta para uso global
window.Templates = Templates;