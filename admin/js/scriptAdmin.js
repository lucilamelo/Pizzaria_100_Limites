var spanErro = document.getElementById('erro');
var spanStatus = document.getElementById('status');

displayProdutos()

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

function limpaCampos(){
  document.querySelector('#categoria').value = '';
  document.querySelector('#titulo').value = '';
  document.querySelector('#descricao').value = '';
  document.querySelector('#imagem').value = '';
  document.querySelector('#preco').value = '';
}

function cadastrarProduto(event) {
  event.preventDefault();

  var produtos = JSON.parse(localStorage.getItem('Produtos')) ?? []

  const categoria = document.querySelector('#categoria').value;
  const titulo = document.querySelector('#titulo').value;
  const descricao = document.querySelector('#descricao').value;
  const imagemInput = document.querySelector('#imagem');
  const preco = document.querySelector('#preco').value;
  const promocao = document.querySelector('#promocao').checked;
  
  const imagem = imagemInput.files[0];

  if (titulo && descricao && imagem) {
      const reader = new FileReader();
      reader.onload = function(e) {
          const produto = {
              id: produtos.reduce((max, produto) => (produto.id > max ? produto.id : max), 0) + 1,
              categoria: categoria,
              titulo: titulo,
              descricao: descricao,
              imagem: e.target.result,
              preco: preco,
              promocao: promocao
          };

          produtos.push(produto);
          localStorage.setItem(`Produtos`, JSON.stringify(produtos));
          //limpaCampos()
          alert('Produto Cadastrado com sucesso!')
          displayProdutos();
      };
      reader.readAsDataURL(imagem);
  } else {
      alert('Por favor, preencha todos os campos.');
  }
}

function deletar(id) {
  console.log('entrou', id)
  var produtos = JSON.parse(localStorage.getItem('Produtos')) ?? [];
  produtos = produtos.filter(produto => produto.id !== id);
  localStorage.setItem(`Produtos`, JSON.stringify(produtos));
  displayProdutos();
}

function displayProdutos() {
  const produtosContainer = document.querySelector('#produtos-container');
  var produtos = JSON.parse(localStorage.getItem('Produtos')) ?? [];
  produtosContainer.innerHTML = '';

  produtos.forEach((produto) => {
      const produtoElement = document.createElement('div');
      produtoElement.className = 'produto';

      const imagemElement = document.createElement('img');
      imagemElement.src = produto.imagem;
      imagemElement.alt = produto.titulo;

      const categoriaElement = document.createElement('h3');
      categoriaElement.textContent = `Categoria: ${produto.categoria}`;

      const tituloElement = document.createElement('h3');
      tituloElement.textContent = `Titulo: ${produto.titulo}`;

      const descricaoElement = document.createElement('p');
      descricaoElement.textContent = `Descricao: ${produto.descricao}`; 

      const precoElement = document.createElement('p');
      precoElement.textContent = `Preco: R$ ${produto.preco}`;    

      const btnElement = document.createElement('button');
      btnElement.textContent = `Deletar`;  
      btnElement.onclick = () => deletar(produto.id);

      produtoElement.appendChild(categoriaElement);
      produtoElement.appendChild(imagemElement);
      produtoElement.appendChild(tituloElement);
      produtoElement.appendChild(descricaoElement);
      produtoElement.appendChild(precoElement);
      produtoElement.appendChild(btnElement);

      produtosContainer.appendChild(produtoElement);
  });
}