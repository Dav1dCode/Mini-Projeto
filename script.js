class Cadastro {
  constructor(nome, email) {
    this.nome = nome;
    this.email = email;
  }
}

const dados = [];

const form = document.getElementById('cadastroForm');
const listaDados = document.getElementById('listaDados').getElementsByTagName('tbody')[0];

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;

  const novoCadastro = new Cadastro(nome, email);
  dados.push(novoCadastro);

  atualizarLista();
  form.reset();
});

function atualizarLista() {
  listaDados.innerHTML = '';

  dados.forEach((cadastro, index) => {
    const row = listaDados.insertRow();
    const cellNome = row.insertCell(0);
    const cellEmail = row.insertCell(1);
    const cellAcoes = row.insertCell(2);

    cellNome.textContent = cadastro.nome;
    cellEmail.textContent = cadastro.email;

    const btnEditar = document.createElement('button');
    btnEditar.textContent = 'Editar';
    btnEditar.classList.add('btn');
    btnEditar.addEventListener('click', () => editarCadastro(index));

    const btnExcluir = document.createElement('button');
    btnExcluir.textContent = 'Excluir';
    btnExcluir.classList.add('btn');
    btnExcluir.addEventListener('click', () => excluirCadastro(index));

    cellAcoes.appendChild(btnEditar);
    cellAcoes.appendChild(btnExcluir);
  });
}

function editarCadastro(index) {
  const novoNome = prompt('Digite o novo nome:');
  const novoEmail = prompt('Digite o novo email:');

  if (novoNome !== null && novoEmail !== null) {
    dados[index].nome = novoNome;
    dados[index].email = novoEmail;
    atualizarLista();
  }
}

function excluirCadastro(index) {
  if (confirm('Tem certeza que deseja excluir este cadastro?')) {
    dados.splice(index, 1);
    atualizarLista();
  }
}
