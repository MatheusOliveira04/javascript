
function formularioIMC(){
    const pessoa = {
        nome: document.getElementById("txtNome").value,
        sexo: document.querySelector('input[name="txtSexo"]:checked').value,
        peso : document.getElementById("txtPeso").value,
        altura : document.getElementById("txtAltura").value
    }

    const imc = calculaIMC(pessoa.peso, pessoa.altura)

    const msg = `Nome: ${pessoa.nome} \nSexo: ${pessoa.sexo} \nIMC: ${imc} \nAvaliação: ${avaliaIMC(imc, pessoa.sexo)}`

    document.getElementById("txtDados").value = msg;

    return false;
}

function calculaIMC(peso, altura){
    return peso / ((altura / 100)* (altura / 100));
}

function avaliaIMC(imc, sexo){
    var masculino = "Masculino";
    if(masculino == sexo){
        if(imc < 20.7){
            return `Abaixo do peso`
        }
        else if(imc >= 20.7 && imc < 26.4){
            return `Peso normal`
        } 
        else if(imc >= 26.4 && imc < 27.8){
            return `Marginalmente acima do peso` 
        } 
        else if(imc >= 27.8 && imc < 31.1){
            return `Acima do peso ideal`
        } 
        else {
            return `acima do peso`
        }
    } else{
        if(imc < 19.1){
            return `Abaixo do peso`
        }
        else if(imc >= 19.1 && imc < 25.8){
            return `Peso normal`
        } 
        else if(imc >= 25.8 && imc < 27.30){
            return `Marginalmente acima do peso` 
        } 
        else if(imc >= 27.3 && imc < 32.3){
            return `Acima do peso ideal`
        } 
        else {
            return `acima do peso`
        }
    }
}