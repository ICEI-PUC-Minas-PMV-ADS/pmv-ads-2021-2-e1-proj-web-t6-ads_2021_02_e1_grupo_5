//Validação do cadastro de usuário
const init = () => {
  console.log('Iniciado');
};

window.onload = init;

//Verifica o preenchimento dos inputs
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
  } else {
    // Verifica se a senha contem 8 caracteres, ao menos 1 letra e um número
    const validator = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    validator.test(senha.value);

    // Se a senha não estiver válida, exibe alerta e retorna
    if (validator.test(senha.value) == false) {
      alert(
        'A senha deve conter ao menos 8 caracteres, incluindos LETRAS e NÚMEROS'
      );
      senha.focus();
      return;
    }
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

  cadastrarUsuario();

  // console.log('Cadastrado');
}

//Armazena os dados informados no form e envia para o servidor
function cadastrarUsuario() {
  event.preventDefault();

  const urlUsers = 'http://localhost:3000/users';

  //Busca os dados do form
  const user = {
    name: document.getElementById('user__name').value,
    lastname: document.getElementById('user__lastname').value,
    birthday: document.getElementById('user__birthday').value,
    email: document.getElementById('user__email').value,
    city: document.getElementById('user__city').value,
    state: document.getElementById('user__state').value,
    password: document.getElementById('user__password').value,
  };

  //Envia os dados para o banco de dados
  fetch(urlUsers, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      response.json();
    })
    .then((json) => {
      console.log(json);
    });

  window.location.href = './registerFinish.html';
}

//Busca dados dos usuários para validar o login
function login() {
  event.preventDefault();

  const urlUsers = 'http://localhost:3000/users';
  let userValid = {
    user: '',
    password: '',
  };
  const userEmail = document.getElementById('login__email').value;
  const userPassword = document.getElementById('login__password').value;

  //Busca lista de usuários do banco de dado
  const usersList = (url) => {
    let request = new XMLHttpRequest();
    request.open('GET', url, false);
    request.send();
    return request.responseText;
  };

  const users = JSON.parse(usersList(urlUsers));

  console.log('Lista obj', users);

  // console.log(validList);

  users.forEach((item) => {
    if (userEmail == item.email && userPassword == item.password) {
      userValid = {
        user: item.email,
        password: item.password,
      };

      console.log(userValid);
    }
  });

  if (userEmail == userValid.user && userPassword == userValid.password) {
    window.location.href = '/home.html';
  } else {
    alert('Usuário ou senha inválidos!');
  }
}
