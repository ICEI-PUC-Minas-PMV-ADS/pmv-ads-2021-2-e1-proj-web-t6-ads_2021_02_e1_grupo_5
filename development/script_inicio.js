//Validação do cadastro de usuário

function validarCadastro(event) {
  event.preventDefault();

  // Declaração de variáveis do inputs
  const nome = document.getElementById('user__name');
  const sobrenome = document.getElementById('user__lastname');
  const nascimento = document.getElementById('user__birthday');
  const email = document.getElementById('user__email');
  const cidade = document.getElementById('user__city');
  const estado = document.getElementById('user__state');
  const senha = document.getElementById('user__password');
  const confirmacaoSenha = document.getElementById('user__confirmPassword');
  const termoDeUso = document.getElementById('user__accepted');

  // Verificação se os campos estão válidos
  if (nome.value == '') {
    alert('Nome não informado');

    // Deixa o input com o focus
    nome.focus();

    // Retorna a função e não olha as outras linhas
    return;
  }

  if (sobrenome.value == '') {
    alert('Sobrenome não informado');
    sobrenome.focus();
    return;
  }

  if (nascimento.value == '') {
    alert('Data de nascimento não informado');
    nascimento.focus();
    return;
  }

  if (email.value == '') {
    alert('E-mail não informado');
    email.focus();
    return;
  }

  if (cidade.value == '') {
    alert('Cidade não informada');
    cidade.focus();
    return;
  }

  if (estado.value == '') {
    alert('Estado não informado');
    estado.focus();
    return;
  }

  if (senha.value == '') {
    alert('Senha não informada');
    senha.focus();
    return;
  }

  if (confirmacaoSenha.value == '') {
    alert('Confirmação da senha não informada');
    confirmacaoSenha.focus();
    return;
  } else {
    // Verifica se a confirmação da senha está correta
    if (confirmacaoSenha.value !== senha.value) {
      alert('Confirmação da senha não confere com a senha informada');
      confirmacaoSenha.focus();
      return;
    }
  }

  if (termoDeUso.checked == false) {
    alert('Favor confirmar Termos de Uso e Responsabilidade');
    termoDeUso.focus();
    return;
  }

  window.location.href = './registerFinish.html';
  console.log('Cadastrado');
}
