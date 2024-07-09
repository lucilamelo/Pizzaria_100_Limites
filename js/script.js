var spanErro = document.getElementById('erro2');
var spanLogin = document.getElementById('login');
var spanName = document.getElementById('name');
var users = [];

spanLogin.innerHTML = sessionStorage.getItem('nome') ? '' : `<h2>Bem Vindo(a). 
                                                            <span id="name"></span>
                                                            <span id="login">Faça seu 
                                                                <a href="login.html">Login</a> 
                                                            ou 
                                                                <a href="cadastro.html"> Cadastre-se</a>
                                                            </span>
                                                        </h2>`
spanName.innerHTML = sessionStorage.getItem('nome') ? `Bem Vindo(a). 
                                                        ${sessionStorage.getItem('nome')} 
                                                        <button 
                                                            style="margin-left: 10px" 
                                                            onclick="logout()">
                                                            Sair
                                                        </button>` : ''

function validacao(){
    let nome =document.getElementById("i_nome");
    let sobrenome = document.getElementById("i_sobrenome");
    let celular = document.getElementById("i_celular");
    let email = document.getElementById("i_email");
    let mensagem = document.getElementById("i_mensagem");

    let est1 = estilo_input(nome,"#f45656", "#808080");
    let est2 = estilo_input(sobrenome,"#f45656", "#808080");
    let est3 = estilo_input(celular,"#f45656", "#808080");
    let est4 = estilo_input(email,"#f45656", "#808080");
    let est5 = estilo_input(mensagem,"#f45656", "#808080");

    if(est1.includes('#808080') & 
        est2.includes('#808080') & 
        est3.includes('#808080') & 
        est4.includes('#808080') & 
        est5.includes('#808080'))
    {
        alert('Obrigado por enviar suas Sugestões, em breve analisaremos!!')
    }
}

function estilo_input(input, cor_1, cor_2){

    var alert = document.getElementById("f_alert");

    if(!input.checkValidity()){
        alert.style.display = "block";
        return input.style.border = `3px solid ${cor_1}`;
    }else{
        return input.style.border = `1px solid ${cor_2}`;
    }
}

function pedidos(){
    setTimeout(function() {
        window.location.replace("https://github.com/lucilamelo");
      }, 1000);
}

function aguarde(){
    setTimeout(function() {
        window.location.href = './login.html';
      }, 3000);
}

function processArray() {
    let index = 0;
  
    function processChunk() {
        setTimeout(function() {
            plus_slides(1)
        }, 0);
  
      if (index < 1) {
        index = 0
        setTimeout(processChunk, 5000); // Chama a próxima iteração do chunk
      } else {
        console.log('Processing complete');
      }
    }
  
    processChunk();
}

processArray()

var slide_index = 1;

show_slides(slide_index);
// start(slide_index);

// Avança ou retorna a imagem do carrossel
function plus_slides(n){
    show_slides(slide_index += n);
}

// Setar a dot que corresponde a imagem selecionada no carrossel
function current_slides(n){
    show_slides(slide_index = n);
}

// Fazer a ação de trocar as imagens no carrossel
function show_slides(n){
    var slides = document.getElementsByClassName("fade");
    var dots = document.getElementsByClassName("dot");
    var i;

    // estando na ultima imagem, faz o carrossel voltar para a primeira
    if(n > slides.length){
        slide_index = 1;
    }
    // estando na primeira imagem, faz o carrossel voltar para a ultima
    if(n < 1){
        slide_index = slides.length;
    }

    // Desativa todas as imagens do carrossel
    for(i=0; i<slides.length; i++){
        slides[i].style.display = "none";
    }

    // Desativar todas as bolinhas que estejam selecionadas
    for(i=0; i<dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slide_index-1].style.display = "block";
    dots[slide_index-1].className += " active";
}

function handleLogin(event) {
    event.preventDefault();
  
    const username = document.querySelector('input[name="username"]').value;
    const password = document.querySelector('input[name="password"]').value;
  
    var users = JSON.parse(sessionStorage.getItem('users')) ?? []

    const user = users.filter(user => user.username === username && user.password === password)

    if(user.length > 0){
        sessionStorage.setItem('nome', user[0].nome)

        window.location.href = './index.html';
        return
    }
    spanErro.innerHTML = '<br><br>Usuario ou Senha Incorreto.' 
}

function handleCadastrar(event) {
    event.preventDefault();

    const cpf = document.querySelector('input[name="cpf"]').value;
    const nome = document.querySelector('input[name="nome"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const username = document.querySelector('input[name="username"]').value;
    const password = document.querySelector('input[name="password"]').value;
  
    const newUser = {
        cpf,
        nome,
        email,
        username,
        password
    }

    var users = JSON.parse(sessionStorage.getItem('users')) ?? []

    const userExist = users.filter(user => user.username === username)

    if(userExist.length > 0){
        spanErro.innerHTML = '<br><br>Nome de Usuario ja existe, por favor escolha outro!' 
        return
    }

    users.push(newUser);

    sessionStorage.setItem('users', JSON.stringify(users))
    spanErro.innerHTML = '<br><br>Obrigado por se cadastrar! Aguarde você sera redirecionado para tela de login!' 
    
    aguarde();
    return
}

function logout() {
    sessionStorage.removeItem('nome');
    window.location.href = './index.html';
    return
}


function displayProdutos() {
    const BebidasContainer = document.querySelector('#Bebidas');
    const SalgadasContainer = document.querySelector('#PizzaSalgada');
    const DocesContainer = document.querySelector('#PizzaDoce');
    //produtosContainer.innerHTML = '';

    var produtos = JSON.parse(localStorage.getItem(`Produtos`))

    produtos.forEach((produto) => {
        const divElement = document.createElement('div');
        divElement.className = 'teste';

        const imagemElement = document.createElement('img');
        imagemElement.alt = produto.titulo;
        imagemElement.src = produto.imagem;

        const produtoElement = document.createElement('div');
        produtoElement.id = 'test';

        const tituloElement = document.createElement('h3');
        tituloElement.textContent = produto.titulo;

        const descricaoElement = document.createElement('p');
        descricaoElement.textContent = produto.descricao;

        const precoElement = document.createElement('p');
        precoElement.textContent = `R$ ${produto.preco} `;
        precoElement.id = 'preco'

        const promocaoElement = document.createElement('span');
        promocaoElement.textContent = `R$ ${produto.preco} `;
        promocaoElement.id = 'promocao'

        produtoElement.appendChild(tituloElement);
        produtoElement.appendChild(descricaoElement);

        if(produto.promocao){
            let precoNovo = parseFloat(produto.preco.replace(',','.')) - 10
            precoElement.textContent = `R$ ${precoNovo.toFixed(2).replace('.', ',')} `;
            precoElement.appendChild(promocaoElement)
        }

        produtoElement.appendChild(precoElement);
        
        divElement.appendChild(imagemElement);
        divElement.appendChild(produtoElement);

        if(produto.categoria == 'bebida'){
            BebidasContainer.appendChild(divElement);
        }
        else if(produto.categoria == 'pizza-doce'){
            DocesContainer.appendChild(divElement);
        }
        else if(produto.categoria == 'pizza-salgada'){
            SalgadasContainer.appendChild(divElement);
        }
    });
}