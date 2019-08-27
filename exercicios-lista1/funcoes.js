function ex24(){
    //dinheiro viagem
    var dinheiro = document.getElementById("dinheiro").value;
    //conversao marco
    var marcototal = dinheiro*2
    alert("A CONVERSAO PARA MARCO ALEMAO : " + marcototal.toFixed(2))
    //conversao dolares
    var dolarestotal = dinheiro*1.8
    alert("A CONVERSAO PARA DOLARES : " + dolarestotal.toFixed(2))
    //conversao libra esterlina
    var libratotal = dinheiro*3.57
    alert("A CONVERSAO PARA LIBRA ESTERLINA: " + libratotal.toFixed(2))
    }


    function ex14() {
            // ano
            var ano = document.getElementById("ano").value;
            // nascimento
            var nascimento = document.getElementById("nascimento").value;
            // anos
            var anos = ano-nascimento
            alert("Sua idade em anos é: " + anos.toFixed())
            var meses = anos*12
            alert("Sua idade em meses é: " + meses.toFixed())
            var semanas = meses*4
            alert("Sua idade em semanas é: " + semanas.toFixed())
            var dias = semanas*7
            alert("Sua idade em dias é: " + dias.toFixed())
        }