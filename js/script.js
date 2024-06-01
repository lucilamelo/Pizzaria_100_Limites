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