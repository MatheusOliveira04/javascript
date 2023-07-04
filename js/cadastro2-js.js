
function formularioIMC(){
    const pessoa = {
        nome: document.getElementById("txtNome").value,
        sexo: document.querySelector('input[name="txtSexo"]:checked').value,
        peso : document.getElementById("txtPeso").value,
        altura : document.getElementById("txtAltura").value
    }

    const msg = `Nome: ${pessoa.nome} \nSexo: ${pessoa.sexo} \nIMC: ${calculaIMC(pessoa.peso, pessoa.altura)}`

    document.getElementById("txtDados").value = msg;

    return false;
}

function calculaIMC(peso, altura){
    return peso / (altura * altura);
}

function avaliaIMC(imc, sexo){
    var masculino = "Masculino";
    if(masculino == sexo){
        return 
    } else{

    }
}