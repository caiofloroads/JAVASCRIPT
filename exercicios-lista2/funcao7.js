function exe7(){
    var salario = Number(document.getElementById("salario").value);
    if (salario < 500){
        var novo = salario + salario*30/100
        alert("Novo valor" + novo)
    }
    else {
        alert("Nao tem direito a aumento")
    }
}
function exe22() {
    var idade = Number(document.getElementById("idade").value);
    var peso = Number(document.getElementById("peso").value);
    var risco = 0
    if (idade < 20){
        if (peso < 60){
            risco = 9
        }
        else if (peso <= 90){
            risco = 8
        }
        else if (peso > 90){
            risco = 7
        }
    
    }
    else if (idade < 50){
        if (peso < 60){
            risco = 6

        }
        else if (peso <= 90){
            risco = 5

        }
        else if (peso > 90){
            risco = 4

        }
    }
    else if (idade > 50){
        if (peso < 60){
            risco = 3

        }
        else if (peso <= 90){
            risco = 2

        }
        else if (peso > 90){
            risco = 1

        }
    }
    alert("risco" + risco)
}