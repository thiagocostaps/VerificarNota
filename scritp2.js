function verificarNota () {
    let nota = Number(document.getElementById("nota").value);

    if (isNaN(nota)|| nota < 0 || nota > 10) {
       document.getElementById("resultado").innerText="Não é um nº válido!"; 
    }

    else if (nota>=7) {
        document.getElementById("resultado").innerText="Aprovado!✅";
    }

    else {
        document.getElementById("resultado").innerText="Recuperação!❌";

    }
}