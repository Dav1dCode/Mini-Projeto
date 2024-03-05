// Array para armazenar os dados cadastrados
let dados = [];

// Função para exibir os dados cadastrados na página
function mostrarDados() {
  const lista = document.getElementById("listaDados");
  lista.innerHTML = "";

  dados.forEach((dado, index) => {
    const li = document.createElement("li");
    li.textContent = dado;

    // Botão para editar o dado
    const editarButton = document.createElement("button");
    editarButton.textContent = "Editar";
    editarButton.addEventListener("click", () => editarDado(index));
    li.appendChild(editarButton);

    // Botão para deletar o dado
    const deletarButton = document.createElement("button");
    deletarButton.textContent = "Deletar";
    deletarButton.addEventListener("click", () => deletarDado(index));
    li.appendChild(deletarButton);

    lista.appendChild(li);
  });
}

// Função para cadastrar um novo dado
function cadastrarDado(nome) {
  dados.push(nome);
  mostrarDados();
}

// Função para editar um dado cadastrado
function editarDado(index) {
  const novoNome = prompt("Digite o novo nome:");
  if (novoNome !== null) {
    dados[index] = novoNome;
    mostrarDados();
  }
}

// Função para deletar um dado cadastrado
function deletarDado(index) {
  dados.splice(index, 1);
  mostrarDados();
}

// Evento de submissão do formulário de cadastro
document.getElementById("formCadastro").addEventListener("submit", (event) => {
  event.preventDefault();
  const inputNome = document.getElementById("inputNome");
  const nome = inputNome.value.trim();
  if (nome !== "") {
    cadastrarDado(nome);
    inputNome.value = "";
  } else {
    alert("Por favor, insira um nome válido.");
  }
});

// Exibir os dados cadastrados ao carregar a página
mostrarDados();
