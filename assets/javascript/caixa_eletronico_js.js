function calcularNotas() {
    var inSaque = document.getElementById("inSaque");
    var outNotasCem = document.getElementById("outNotasCem");
    var outNotasCinquenta = document.getElementById("outNotasCinquenta");
    var outNotasVinte = document.getElementById("outNotasVinte");
    var outNotasDez = document.getElementById("outNotasDez");
    var outNotasCinco = document.getElementById("outNotasCinco");
    var outNotasDois = document.getElementById("outNotasDois");

    outNotasCem.textContent = "";
    outNotasCinquenta.textContent = "";
    outNotasVinte.textContent = "";
    outNotasDez.textContent = "";
    outNotasCinco.textContent = "";
    outNotasDois.textContent = "";

    var saque = Number(inSaque.value);

    if (saque === 0 || isNaN(saque)) { //
        alert("Informe o valor do saque corretamente"); //
        inSaque.focus(); //
        return; //
    }

    
    if (saque < 2 && saque !== 0) { 
        alert("Valor inválido para notas disponíveis (R$ 2, 5, 10, 20, 50, 100)");
        inSaque.focus();
        return;
    }
    
    if (saque % 2 !== 0 && saque % 5 !== 0) {
        alert("Valor inválido para notas disponíveis (R$ 2, 5, 10, 20, 50, 100)");
        inSaque.focus();
        return;
    }


    var notasCem = Math.floor(saque / 100); //
    var resto = saque % 100; //
    var notasCinquenta = Math.floor(resto / 50); //
    resto = resto % 50; //
    var notasVinte = Math.floor(resto / 20); //
    resto = resto % 20; //
    var notasDez = Math.floor(resto / 10); //
    resto = resto % 10; //

    var notasCinco = Math.floor(resto / 5);
    resto = resto % 5;
    var notasDois = Math.floor(resto / 2);
    resto = resto % 2;

    if (notasCem > 0) { //
        outNotasCem.textContent = "Notas de R$ 100: " + notasCem; //
    }
    if (notasCinquenta > 0) { //
        outNotasCinquenta.textContent = "Notas de R$ 50: " + notasCinquenta; //
    }
    if (notasVinte > 0) { //
        outNotasVinte.textContent = "Notas de R$ 20: " + notasVinte; //
    }
    if (notasDez > 0) { //
        outNotasDez.textContent = "Notas de R$ 10: " + notasDez; //
    }
    if (notasCinco > 0) { //
        outNotasCinco.textContent = "Notas de R$ 5: " + notasCinco; //
    }
    if (notasDois > 0) { //
        outNotasDois.textContent = "Notas de R$ 2: " + notasDois; //
    }
}

var btExibir = document.getElementById("btExibir"); //
btExibir.addEventListener("click", calcularNotas); //