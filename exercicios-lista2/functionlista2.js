function exe1(){
    nota1 = Number(document.getElementById("nota1").value);
    nota2 = Number(document.getElementById("nota2").value);
    nota3 = Number(document.getElementById("nota3").value);
    nota4 = Number(document.getElementById("nota4").value);

    var media = (nota1+nota2+nota3+nota4)/4

    if (media>=7){
        alert("APROVADO COM A MEDIA " + media)
        console.log("APROVADO COM A MEDIA " + media)
    }
    else {
        alert("REPROVADO COM A MEDIA " + media)
        console.log("REPROVADO COM A MEDIA " + media)
    }
}
function exe2(){
    n1 = Number(document.getElementById("n1").value);
    n2 = Number(document.getElementById("n2").value);
    var media = (n1 + n2)/2
    if (media>=7){
        alert("APROVADO COM A MEDIA " + media)
        console.log("APROVADO COM A MEDIA " + media)
    }
    else if ((media>=3) && (media < 7)) {
        alert("EXAME COM A MEDIA " + media)
        console.log("EXAME COM A MEDIA " + media)
    }
    else {
        alert("REPROVADO COM A MEDIA " + media)
        console.log("REPROVADO COM A MEDIA " + media)
    }
}
function exe3(){
    numero1 = Number(document.getElementById("numero1").value);
    numero2 = Number(documento.getElementById("numero2").value);

    if (numero1 > numero2){
        alert("O NUMERO 2 É O MENOR NUMERO: " + numero2)
    }
    else if (numero2 > numero1){
        alert("O NUMERO 1 É O MAIOR NUMERO: " + numero1)
    }
    else{
        alert("OS NUMEROS SAO IGUAIS")
    }
}
function exe4(){
    num1 = Number(document.getElementById("num1").value);
    num2 = Number(documten.getElementById("num2").value);
    num3 = Number(document.getElementById("num3").value);

    if ((num1 > num2) && (num2 > num1)){
        alert("MAIOR NUMERO: " + num1)
    }
    else if ((num2 > num1) && (num2 > num3)){
        alert("MAIOR NUMERO: " + num2)
    }
    else if ((num1 == num2) && (num2 == num3)){
        alert("OS NUMEROS SÃO IGUAIS NUMERO: " + num1)
    }
    else if ((num3 > num1) && (num3 > num2)){
        alert("MAIOR NUMERO: " + num3)
    }
    else if ((num1 == num2) && (num2 > num3)){
        alert("MAIOR NUMERO: " + num2)
    }
    else if ((num2 == num3) && (num2 > num1)){
        alert("MAIOR NUMERO: " + num2)
    }
    else if ((num2 == num3) && (num1 > num2)){
        alert("MAIOR NUMERO: " + num1)
    }
    else if ((num1 == num3) && (num2 > num3)){
        alert("MAIOR NUMERO: " + num2)
    }
    else if ((num1 == num3) && (num1 > num2)){
        alert("MAIOR NUMERO: " + num1)
    }
}
funtion exe5(){
    nume1 = Number(document.getElementById("nume1").value);
    nume2 = Number(document.getElementById("nume2").value);
    opcao = Number(document.getElementById("opcao").value);
    var resultado
    switch (opcao) {
        case 1: resultado = (nume1 + nume2)/2            
            break
        case 2: if (nume1 >= nume2){
            resultado = nume1 - nume2
        }
            else{
                resultado = nume2 - nume1
        }
        case 3: resultado = nume1 * nume2
            break
        case 4: if (nume2 !=0){
            resultado = nume1 / nume2
        }
        else
            resultado = "A DIVISAO POR ZERO (0)"
            break
    default: resultado = "OPCAO INVALIDA"
    }
    alert("resultado " + resultado)
}