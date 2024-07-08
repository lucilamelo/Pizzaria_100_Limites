var spanErro = document.getElementById('erro');


function handleLogin(event) {
  event.preventDefault();

  const username = document.querySelector('input[name="username"]').value;
  const password = document.querySelector('input[name="password"]').value;

  if(username == 'LucilaMelo' && password == '12345'){
    window.location.href = '../admin/administrativo.html';
    return
  }

  spanErro.innerText = 'Usuario ou Senha Incorreto.' 
}

function toggleMenu() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('active');
}

function toggleSubmenu() {
  const submenu = document.querySelector('.submenu');
  submenu.classList.toggle('active');
}

function logout() {
  alert('Você saiu com sucesso!');

  window.location.href = '../admin/login.html';
}

let produtos = [];

function cadastrarProduto(event) {
  event.preventDefault();

  const titulo = document.querySelector('#titulo').value;
  const descricao = document.querySelector('#descricao').value;
  const imagemInput = document.querySelector('#imagem');
  const imagem = imagemInput.files[0];

  if (titulo && descricao && imagem) {
      const reader = new FileReader();
      reader.onload = function(e) {
          const produto = {
              titulo: titulo,
              descricao: descricao,
              imagem: e.target.result
          };

          produtos.push(produto);
          displayProdutos();
      };
      reader.readAsDataURL(imagem);
  } else {
      alert('Por favor, preencha todos os campos.');
  }
}

function deletar(){
  console.log('funciona')
}

function displayProdutos() {
  const produtosContainer = document.querySelector('#produtos-container');
  produtosContainer.innerHTML = '';

  produtos.forEach((produto) => {
      const produtoElement = document.createElement('div');
      produtoElement.className = 'produto';

      const imagemElement = document.createElement('img');
      imagemElement.src = produto.imagem;
      imagemElement.alt = produto.titulo;

      const tituloElement = document.createElement('h3');
      tituloElement.textContent = produto.titulo;

      const descricaoElement = document.createElement('p');
      descricaoElement.textContent = produto.descricao;      

      produtoElement.appendChild(imagemElement);
      produtoElement.appendChild(tituloElement);
      produtoElement.appendChild(descricaoElement);

      produtosContainer.appendChild(produtoElement);
  });

  
}