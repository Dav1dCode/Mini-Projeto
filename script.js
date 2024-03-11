class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
}

const userList = [];

const form = document.getElementById('signup-form');
const dataList = document.getElementById('data-list');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const newUser = new User(username, email, password);
  userList.push(newUser);

  displayData(newUser);
  form.reset();
});

function displayData(user) {
  const listItem = document.createElement('li');
  listItem.innerHTML = `
    <strong>Username:</strong> ${user.username}<br>
    <strong>Email:</strong> ${user.email}<br>
    <strong>Password:</strong> ${user.password}
    <button class="edit-btn">Editar</button>
    <button class="delete-btn">Deletar</button>
  `;
  dataList.appendChild(listItem);

  const editBtn = listItem.querySelector('.edit-btn');
  const deleteBtn = listItem.querySelector('.delete-btn');

  editBtn.addEventListener('click', function() {
    // Implementar a lógica de edição
    console.log('Editar usuário:', user);
  });

  deleteBtn.addEventListener('click', function() {
    // Implementar a lógica de exclusão
    const index = userList.indexOf(user);
    userList.splice(index, 1);
    dataList.removeChild(listItem);
    console.log('Usuário deletado:', user);
  });
}
