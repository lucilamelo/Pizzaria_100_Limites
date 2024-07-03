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

var slide_index = 1;

show_slides(slide_index);

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