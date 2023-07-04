function olaMundo() {
    //var msg = 'Olá Mundo';
    //alert(msg);

    var pessoa = {
        nome: "marcos",
        peso: 56,
        altura: 1.70
    }

    var imc = pessoa.peso / pessoa.altura * pessoa.altura;

    console.log(`${pessoa.nome} tem o IMC de ${imc}`)
}

function dados() {
    var teste1;
    console.log(teste1) //undefined - valor não atribuído
    var teste2 = null;
    console.log(teste2); //null - valor nulo
    var n = 20;
    var str = "Texto";
    console.log(n * str); //NaN - erro de conversão
    console.log(2e3);//OK exibe 2000
    console.log(2e4);//OK exibe 20000
    console.log(2e308);//estoura o limite do javascript - Infinity

}

function enviarFormulario(){
  const nome = document.getElementById("txtNome").value;
    const idade = document.getElementById("txtIdade").value;
    const email = document.getElementById("txtEmail").value;
    const pessoa ={
        nome : nome,
        idade: idade,
        email, email
    }
    const msg = `Nome: ${nome}\nIdade: ${idade}\nE-mail:${email}`;
    document.getElementById("txtDados").value = msg;
    return false;
}